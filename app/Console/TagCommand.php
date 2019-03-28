<?php

namespace App\Console;

use App\Tmp;
use Cz\Git\GitRepository;
use Illuminate\Console\Command;
use vierbergenlars\SemVer\SemVerException;
use vierbergenlars\SemVer\version;

class TagCommand extends Command
{
    protected $signature = 'git:tag {remote?} {tag?} {--branch=}';

    /** @var \App\Tmp */
    protected $tmp;

    /**
     * handle method
     *
     * @return void
     * @throws \Cz\Git\GitException
     */
    public function handle()
    {
        $remote = $this->argument('remote');
        $tag    = $this->argument('tag');
        $branch = $this->option('branch');


        $repo    = new GitRepository(getcwd());
        $remotes = $repo->execute('remote');

        if ($remote === null || ! in_array($remote, $remotes, true)) {
            $this->error("Remote [$remote] does not exist.");
            $remoteNames = array_keys($remotes);
            $remote      = head($this->select('Pick a remote', $remoteNames, false));
        }


        $branch    = $branch ?? $repo->getCurrentBranchName();
        $remoteUrl = head($repo->execute([ 'remote', 'get-url', $remote ])); //data_get($remotes, "{$remote}.fetch");
        $tmpDir    = $this->cloneToTmp($remoteUrl, $branch);
        $clone     = new GitRepository($tmpDir);
        $remotes   = $clone->execute('remote');
        $clone->pull('origin', [ '--tags' ]);
        $tags = $clone->getTags();
        $tag  = $this->askTag($tags !== null ? head($tags) : null);
        if ($this->confirm("Tagging {$tag}, is that ok?")) {
            $clone->createTag($tag);
            $clone->push('origin', [ '--tags' ]);
            $this->info("Tagged {$tag}");
        }
        $this->comment('No changes made');
    }

    protected function askTag($prevTag = null)
    {
        $tag         = $this->argument('tag');
        $prevVersion = null;
        if ($prevTag) {
            try {
                $prevVersion = new version($prevTag);
            }
            catch (SemVerException $e) {
                $prevVersion = null;
                $prevTag     = null;
            }
        }
        if ($tag === null && $prevVersion !== null) {
            $this->comment("Previous tag was [$prevVersion].");
            $selected = head($this->select('Select', [ 'patch', 'minor', 'major', 'custom' ]));
            if ($selected === 'custom') {
                $tag = $this->ask('Enter tag');
            } else {
                $tag = $prevVersion->inc($selected)->getVersion();
            }
        } elseif ($tag === null && $prevVersion === null) {
            $tag = $this->ask('Enter first tag', '0.1.0');
            try {
                $version = new version($tag);
            }
            catch (SemVerException $e) {
                $this->error($e->getMessage());
                return $this->askTag($prevTag);
            }
        }
        return $tag;
    }

    protected function cloneToTmp($remoteUrl, $branch)
    {
        $tmpDir = $this->makeTempDir(str_slug($remoteUrl) . '-' . $branch);
        chdir($tmpDir);
        `git clone {$remoteUrl} .`;
        `git checkout "{$branch}";`;
        return $tmpDir;
    }

    protected function makeTempDir($prefix)
    {
        $this->tmp = app()->make(Tmp::class, [ 'prefix' => 'codex-git-tag-' . $prefix ]);
        $this->tmp->initRunFolder();
        $tmpDir = $this->tmp->getTmpFolder();
        return $tmpDir;
    }

}

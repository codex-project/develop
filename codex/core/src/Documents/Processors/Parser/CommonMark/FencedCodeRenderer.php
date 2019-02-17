<?php

namespace Codex\Documents\Processors\Parser\CommonMark;

use League\CommonMark\Block\Element\AbstractBlock;
use League\CommonMark\Block\Element\FencedCode;
use League\CommonMark\ElementRendererInterface;
use League\CommonMark\HtmlElement;
use League\CommonMark\Util\Xml;

class FencedCodeRenderer extends \League\CommonMark\Block\Renderer\FencedCodeRenderer
{
    /**
     * @param FencedCode               $block
     * @param ElementRendererInterface $htmlRenderer
     * @param bool                     $inTightList
     *
     * @return HtmlElement
     */
    public function render(AbstractBlock $block, ElementRendererInterface $htmlRenderer, $inTightList = false)
    {
        if ( ! ($block instanceof FencedCode)) {
            throw new \InvalidArgumentException('Incompatible block type: ' . get_class($block));
        }

        $attrs = [];
        foreach ($block->getData('attributes', []) as $key => $value) {
            $attrs[ $key ] = Xml::escape($value, true);
        }

        $infoWords           = $block->getInfoWords();
        $attrs[ 'language' ] = 'php';
        if (count($infoWords) !== 0 && strlen($infoWords[ 0 ]) !== 0) {
            $attrs[ 'language' ] = Xml::escape($infoWords[ 0 ], true);
        }

        return new HtmlElement('c-code-highlight', $attrs, Xml::escape($block->getStringContent()));
    }
}
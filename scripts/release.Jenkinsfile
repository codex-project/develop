#!/usr/bin/env groovy

import nl.radic.Radic

//noinspection GroovyAssignabilityCheck
node {
    try {
        def radic = new Radic(this)
        def codex = radic.codex()
        def backend = codex.backend


        codex.useEnv {
            stage('checkout') {
                codex.checkout()
            }



            if (env.DEPLOY_PACKAGES) {
                stage('deploy packages') {
                    def buildJob = radic.build('packages.radic.ninja/deploy')
                }
            }
        }
    } catch (e) {
        throw e
    } finally {
        echo "done"
    }
}

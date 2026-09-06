pipeline {
    agent any

    stages {
        stage('Deploy') {
            steps {
                script{
                    if (env.BRANCH_NAME == 'main'){
                        sh 'pwd'
                        sh 'docker compose build'
                        sh 'docker compose up -d'
                    } else if (env.BRANCH_NAME.startsWith('dev/')) {
                        sh 'echo this is a dev branch'
                    } else {
                        sh 'echo branch does not match main or dev'
                    }
                }
                
            }
        }
    }
}
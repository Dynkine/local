# Node js app deploy with CircleCI and Heroku

- Prerequisites
    - Heroku setup
        
         Create your Heroku account at **[sign up page](https://signup.heroku.com/)**.
        
         Install Heroku cli  from **[web site](https://devcenter.heroku.com/articles/heroku-cli)**.
        
        - Configure Heroku for cli
            
            ```bash
            heroku login
            ```
            
        - Configure Heroku for app deploy
            
            ```bash
            heroku create $your_app_name
            ```
            
        - Generate Heroku API Key. That will retrieve a token, that is the one you need to use as your HEROKU_API_KEY
            
            ```bash
            heroku authorizations:create
            ```
            
    - CircleCI setup
        1. To start your work wit CircleCI go to the **[Sign Up](https://circleci.com/signup)**
         page. Sign up with your GitHub, Bitbucket or GitLab account
        2. click **Settings** and **Projects** and find the required Github repository
        3. In the “**project settings**” int the **Environment variables** section add Heroku app name (HEROKU_APP_NAME) and Heroku api key (HEROKU_API_KEY) variables.
        
- App deploy
    
    Deploy your app by pushing your code to the repository branch specified in CircleCi
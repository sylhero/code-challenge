# code challenge

---

## About
Browser compatibility:

![Chrome](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.1.1/chrome/chrome_48x48.png) | ![Firefox](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.1.1/firefox/firefox_48x48.png) | ![IE](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.1.1/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) | ![Opera](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.1.1/opera/opera_48x48.png) | ![Safari](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.1.1/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | 1atest ✔ | Latest ✔ | 6.1+ ✔ |
---

## Package managers

### NPM

In this code challenge I use npm for package management

### Installation

Tested on Mac with **node v9.8.0 and npm  v5.6.0** and also tested on ubuntu 16.4 with **node v8.11.1 and npm version 5.6.0**

1. Install modules and start on your localhost

    Go to the project root where you can find the package.json
    ```
    npm install && npm run gulp
    ```
    static http server should start at `localhost:3000`
2. Start the local json mock server

    Open another terminal
    ```
    npm run server
    ```
    the server should start at `localhost:5000`

## Demos
You can see the demo on both your local and AWS. The code is deployed in AWS S3 bucket with a mock server running on AWS EC2 instance. Please login to see all features. For login you can use any `email` and `password` since it's just mock after login you should have the url like this http://domain.com/leads?theme=pink&id=0&token=b89720c634d64763b434f8efc3dbe4f2
you can manually change the `theme` for exmaple: `theme=blue` with make the page render with blue theme

### 100% Unit test coverage
The code is covered by 100% unit tests. You can view the coverage report at http://demo-code-bucket-1.s3-website-us-east-1.amazonaws.com/coverage/index.html
or on your local at `[PROJECT_ROOT]/reports/coverage/lcov-report/index.html`

### AWS
http://demo-code-bucket-1.s3-website-us-east-1.amazonaws.com/

### Local
Navigate your browser to `localhost:3000` and voila!

## More Info about gulp tasks

The default gulp task will pack all javascript, css, html and host/watch them on ``localhost:3000``. 

1. Set enviromental variables
    You can export enviromental variables to tell gulp package the project in production mode.
    For example, if you only want to pack comcast you can do the following:
    ```
    export ENV=prod

    npm run clean && npm run gulp production
    ```
    
2. Clean the current build
   ```
   npm run gulp clean
   ```

3. Run unit tests
    ```
    npm run gulp test:unit
    ```

## Deployment

## Development
### Components
this project is based on components.

### Breakdown of module files
#### `{module-name}.module.js`
The name and dependencies of a module are declared here. Dependencies usually consist of its child modules and shared libraries.

#### `{module-name}.component.js`
Configuration for the module. Sets bindings for attributes being passed from its parent module. Expresses which controller, template, and other resources to use.

#### `{module-name}.controller.js`
Controller for the module.

#### `{module-name}.template.html`
View for the module. Basically contains a template for the controller to fill.

#### `{module-name}.scss`
Sass styling for the module.

### Structure

```
> src
|---> app
    |
    |- index.html
    |- app.config.js
    |- app.module.js
    |---> {page-name}
    |   |- {page-name}.module.js
    |   |- {page-name}.component.js
    |   |- {page-name}.controller.js
    |   |- {page-name}.template.js
    |   |- {page-name}.scss
    |
    |---> {page-name-2}
    |- ...
```

## Reference
### Coding style:

https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md


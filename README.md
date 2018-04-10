# code challenge

---

## About
Browser:

![Chrome](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.1.1/chrome/chrome_48x48.png) | ![Firefox](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.1.1/firefox/firefox_48x48.png) | ![IE](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.1.1/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) | ![Opera](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.1.1/opera/opera_48x48.png) | ![Safari](https://cdnjs.cloudflare.com/ajax/libs/browser-logos/39.1.1/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | 10+ ✔ | Latest ✔ | 6.1+ ✔ |
---

## Package managers

### NPM

In this code challenge I use npm for package management

### Installation

Before installation make sure you have **npm version >= 7.0 (linux user)** and  **npm version >= 7.15 (windows user)**

1. Install modules and start on your localhost

    Go to the project root where you can find the package.json
    ```
    npm install && npm run gulp
    ```
## Demos
Navigate to your ``localhost:3000`` and voila!

## More Info about gulp tasks

The default gulp task will pack all javascript, css, html and host/watch them on ``localhost:3000``. 

1. Set enviromental variables
    You can export enviromental variables to tell gulp package the project in production mode.
    For example, if you only want to pack comcast you can do the following:
    ```
    export ENV=prod

    npm run gulp production
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


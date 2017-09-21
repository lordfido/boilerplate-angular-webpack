# boilerplate-angular-webpack

### Table of Contents
* [x] [Getting Started](#getting-started)
* [x] [Requirements](#requirements)
* [x] [Installing](#installing)
* [x] [Developing](#developing)
  * [x] [Useful plugins](#useful-plugins)
  * [x] [Useful commands](#useful-commands)
* [ ] [Testing](#testing)
* [x] [Deploying](#deploying)
* [x] [Tutorials](#tutorials)

## Getting started
This mashup is a boilerplate/template to start developing webapps, using modern technologies that will allow us to create more powerful applications using a common and unified stack of technologies.

It is based on [angularjs-webpack](https://github.com/preboot/angularjs-webpack)'s repo, with some additions to fit with most webapps' requirements.

Some of the packages we're using are:
* [NodeJS](https://nodejs.org): Execution enviroment
* [Webpack 2.x](https://webpack.js.org): Bundler
* [Angular 1.x](https://angularjs.org): Main framework
* [UI Router](https://ui-router.github.io/): State-based router
* [BabelJS](https://babeljs.io/): ES6 support
* [SASS](https://github.com/sass/node-sass): CSS extension language
* [ExpressJS](http://expressjs.com/): Web server
* [Karma](https://karma-runner.github.io): Test runner
* [Jasmine](https://jasmine.github.io/): Test framework
* [ESLint](https://eslint.org/): Pluggable linting utility for JavaScript
* [StyleLint](https://stylelint.io/): A mighty, modern CSS linter

## Requirements
The only tools that we need are:
* [NodeJS](https://nodejs.org)
* [Git](https://git-scm.com/)

It is recommended to have a Qlik Sense server installation. For this purpose, you can use:
* [Qlik Machine Images](https://qmi.qlik.com)

## Installing
Since this is a boilerplating, and not a functional webapp, we're gonna fork the repo:

```bash
$ mkdir my-new-mashup && cd my-new-mashup

$ git init

$ git add origin master git@github.com:lordfido/boilerplate-angular-webpack.git

$ git pull origin master

$ npm install
```

## Developing
After you have installed all dependencies you can now run the app with:

```bash
$ npm start
```
This will start a local server which will watch, build (in-memory), and auto-reload the site for you. The port will be displayed to you as `http://localhost:8080`.

Here you have a readme about [Application's structure](./src/)

Good coding session!

### Useful plugins
This webapp comes with [ESLint](https://eslint.org/) and [StyleLint](https://stylelint.io/) enabled, following some writing advices from sites like [Airbnb](https://github.com/airbnb/javascript) (for JS) and [GitHub, Google and Airbnb](https://github.com/stylelint/stylelint-config-standard) (for CSS).

If you follow those guidelines, you can check and assure your code is looking beautiful and clean. Most of code editors have plugins to check those advices on real time, for example:

* [Sublime Text](https://www.sublimetext.com/)
  * [ESLint plugin](https://github.com/polygonplanet/sublime-text-eslint)
  * [StyleLint plugin](https://github.com/kungfusheep/SublimeLinter-contrib-stylelint)

* [Atom](https://atom.io/)
  * [ESLint plugin](https://atom.io/packages/fast-eslint)
  * [StyleLint plugin](https://atom.io/packages/linter-stylelint)

* [Visual Studio Code](https://code.visualstudio.com/)
  * [ESLint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  * [StyleLint plugin](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint)

### Useful commands
If you are not using those plugins, you can check the same rules by running commands:

```bash
$ npm run lint:js   # This will check the JS
$ npm run lint:css  # This will check the CSS
$ npm run lint      # This will check JS and CSS
```

Even, for some easy rules (like `expecting empty-line before @import`), you can run a command to automatically fix them:

```bash
$ npm run fix:js    # This will fix some of your JS warnings
$ npm run fix:css   # This will fix some of your CSS warnings *Note: It's an experimental feature. It currently does not respect special comments for disabling stylelint within sources*
$ npm run fix       # This wil fix some of your JS and CSS warnings
```

## Testing
If you want to test your components or your services, execute:

```bash
$ npm run test
```

If you are developing a component, and you are using TDD, you can test your components live:
```bash
$ npm run test-watch
```

## Deploying
When you have completed your development, just execute next command:

```bash
$ npm run build
```

## Tutorials
We are using some new technology stack, and it's normal that you feel lost at the beginning. I also suffered that feeling when I moved from Angular to React, from Grunt/Gulp to webpack, from CSS to SCSS, so I have prepeared a few Readmes, so you can have a minimal base, to understand those strange letters that you are watching right now.

* [What is webpack?](./webpack/)
* [What is ES6?](./src/app/)
* [What are components?](./src/app/components/)
* [What is SCSS?](./src/styles/)

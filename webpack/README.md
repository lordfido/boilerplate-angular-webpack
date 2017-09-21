# What is webpack?
[Webpack](https://webpack.github.io/) is a powerful tool to create bundles with all contents of our sites.
Unlike task managers such as Grunt or Gulp, webpack is not managing task. There is only 1 task: to pack things.

Wait, but how are we gonna do all our tasks like minify, uglify, compress, concat, move, etc? We'll need to understand a few concepts about webpack's setup.

## Concepts
### Entry
As I said, webpack is creating a bundle of all your stuff (dependencies), but we need a starting point to do it. This is where [entry](https://webpack.js.org/concepts/#entry) comes up.

So webpack is gonna start _reading_ the entry point, and will bundle all dependencies (imports, requires) in it.

This is a very simple example for our `entry` property:
```js
entry: './path/to/my/script.js',
```

### Output
Once you've bundled all of your assets together, you still need to tell webpack where to bundle your application. The [output](https://webpack.js.org/concepts/#output) property tells webpack how to treat bundled code.

This is a very simple example for our `output` property:
```js
output: {
  path: path.resolve(__dirname, 'dist'),
  filename: 'my-first-webpack.bundle.js'
},
```

### Loaders
Well, webpack uses [loaders](https://webpack.js.org/concepts/#loaders) to process different files and do things with them.

This is how a loader config should looks like:
```js
module: {
  rules: [
    {
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|ico)$/,
      exclude: /node_modules|webpack/,
      loader: 'file-loader',
    },
  ],
},
```

This piece of code indicates that `file-loader` is gonna load all files that match the `test` regex, excluding those files wich match `exclude` rule.

Each loader is doing their own tasks. For instance, `file-loader` is moving files to a specific folder (wich is gonna be explained later).

### Plugins
And finally we have [plugins](https://webpack.js.org/concepts/#plugins). These elements are powerful tools that can do other tasks than process files (like loaders).

This is a very simple example of a `plugin`:
```js
plugins: [
  new HtmlWebpackPlugin({
    template: './src/index.html'
  }),
],
```

This plugin is loading (in memory) all our bundle in our `./src/index.html` template. So we'll have everything available since the very first moment that we load `index.html`.

### Final config
```js
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import path from 'path';

const config = {
  entry: './path/to/my/script.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|ico)$/,
        exclude: /node_modules|webpack/,
        loader: 'file-loader',
      },

      // Adding a second loader
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        loader: 'sass-loader',
        options: {
          sourceMap: true,
          importer: jsonImporter,
        },
      }
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ],
};

export default config;
```
In short, if we execute webpack with this setup, this is what is gonna happen:
1. Webpack starts reading `script.js`, at `./path/to/my/` folder.
2. Will load all files that match with `/\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|ico)$/` pattern.
3. Those files are gonna me moved to `./dist`, thanks to our `file-loader`.
4. Will load all files that match with `/\.s?css$/` pattern.
5. Those files are gonna be translated to `css` thanks to our `sass-loader`.
6. Then, webpack is gonna inject our `script.js` and all the bundle into `index.html`, at `./src` folder.

## Advanced
On this setup, we're splitting webpack's config into different files, in order to have different webpack's configurations for different purposes:

* [base.config.babel.js](./base.config.babel.js): This file is gonna have a very basic setup, with `entry`, `output` and some common `loaders`. It is NOT gonna be used itself, never.
* [dev.config.babel.js](dev.config.babel.js): This file is taking some configs from the base config, and adding some specific configs for our development enviroment, so we can develop faster.
  * For instance, there are no phisical build. All files are gonna be loaded in memory, so changes are gonna be reflected faster.
  * A webserver is gonna be used, watching files for changes.
  * We'll also have Hot Module Reloader (hmr) available, so CSS changes are gonna be reflected *without* needing to refresh the page. (AngularJS 1.x is not supporting hmr, but if you use Angular2 or ReactJS, also HTML/JS/JSX files are gonna be updated without refreshing the page).
* [prod.config.babel.js](prod.config.babel.js): This file is taking some configs from the base config, and adding some specific configs for production enviroments.
  * Files are gonna be persisted under our `output` directory.
  * No webserver is gonna be used. If we want a webserver, it can be used without watching our file changes.
* [test.config.babel.js](test.config.babel.js): This file is taking some configs from the base config, and adding some specific configs for testing.
  * SCSS/CSS files are not gonna be loaded, since we are just testing features, not appearance.
  * No webserver is gonna be used

# About the mashup
This mashup contains small examples of some features that we'll be able to do with our future mashups. Files have been splitted in a way each file has it's own purpose, wich it's prettended to be easily understandable.

* `index.js`: The start point is the `index.js`, where we load main resources:
  1. First thing to be loaded is `require.js` and `qlik-styles.css` from our Qlik Sense server.
  2. Then, application will load needed modules for our Angular application from our `node_modules` folder.
  3. After that, application is loading `qlik.js` from our Qlik Sense server.
  4. Finally, next thing is executing `initNgApp()` method, placed on `app/app.js`.
  
* `app/app.js`: It's only purpose is to create and load our Angular Application.
* `app/routes.js`: This file contains all the states that are linked to different routes.

* `app/components/`: Here we will place all `components` files, such as footer, dropdowns, etc.

* `app/config/`: Configuration files.
  * `app/config/constants.js`: A file including some constants, like server address or package dependencies.
  * `app/config/senseConnection.js`: A file containing needed data to connect with our Qlik Sense server.

* `app/services/`: Here we'll place `services` and `factories`.

* `app/utils/`: Files with functions that will make our lives easier.
  * `app/utils/qlik-handler.js`: Contains a promise that will check every `heartbeat` if qlik API is available. If it's not, it will wait. When it's available, will execute the action passed through params.

* `app/views/`: This folder will contain all our `.html` files.

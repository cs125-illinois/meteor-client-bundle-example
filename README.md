# `meteor-client-bundle-example`

Simplest possible example that uses the [`meteor-client
bundle`](https://github.com/Urigo/meteor-client-bundler) and
[`webpack`](https://webpack.js.org/) together to separate the front and back end
of a [Meteor](https://www.meteor.com/) application. Unlike the original
["simple example"](https://github.com/Urigo/React-Meteor-Todo-app) linked off of
the (very helpful) [blog
post](https://blog.meteor.com/leverage-the-power-of-meteor-with-any-client-side-framework-bfb909141008),
you don't need a Ph.D. in Webpack to understand this one.

````bash
$ npm i
$ npm run bundle # bundle the Meteor dependencies into client/meteor-client.js
$ npm run webpack # pack everything into dist/items.js
$ npm run meteor # run Meteor in one window
$ npm run static # run static server in a second window
````

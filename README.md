# react-webpack-boilerplate
A minimal webpack configuration for react/es6/jsx/sass

## Installation

Copy this project. Run either `yarn install` or `npm install`.

## Development

Start the server with `npm run start`, which runs both webpack and http-server for serving files. Visit `http://localhost:3000`.

Javascript and css files go in `/js` and `/css` respectively. Webpack compiles `js/index.js` and `css/main.scss`, so these files must be there. Note that the css file is built as a separate css file, and is linked to directly in `<head>`.

## Notes

This has not yet been configured for production building.

Currently supports:
* React
* ES2016
* SASS
* CSS autoprefixing
* Hot reloading (js and css)

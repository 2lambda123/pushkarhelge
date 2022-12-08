# Trucker Trip Planner

## Resources

Please refer to:
* [Functional examples](https://developer.tomtom.com/maps-sdk-web-js/functional-examples) - live version of examples included in this repository.
* [Documentation](https://developer.tomtom.com/maps-sdk-web-js/documentation) - detailed SDK API reference.
* [Downloads](https://developer.tomtom.com/maps-sdk-web-js/downloads) - the latest version of the SDK.

## Getting started

To run examples on your local machine you need to install [node.js](https://nodejs.org).
Use the latest LTS version available in the download section.


Below is the instruction how to run the project in your local device.
1. Open config.json.
2. There are placeholders for every type of key; replace them accordingly.
3. Open a terminal or command line tool in the same folder.
4. `npm install`, this will install all npm modules necessary to run examples in offline mode.
5. `npm run build`, this command will run the provided script and replace placeholders with your keys.
6. `npm start`, this will start a http server which will serve files. Open the browser, choose dist directory and click on one of the html files.
7. The server should start at https://localhost:8080 (if the port was already in use, check your console - http server prints what port it is running on), you can open it in the browser.
8. Also open another terminal or command line tool in the same folder.
9. `npm install nodemon`, this will install nodemon in the device
10. `cd App`, this will dircect the directory to App folder
11. `nodemon app.js`, this will start the web app at localhost.
12. open browser and type `localhost` in the place of URL.

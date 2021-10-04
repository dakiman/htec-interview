import axios from "axios";

/*
* Retrieving environmnet variables
* Leave at beginning of file for safety
* */
const result = require('dotenv').config({
    path: './.env',
});

if (result.error) {
    console.error('Couldnt find environment variables. Make sure you have a `.env` file prepared in the root of the project');
    throw result.error;
}

/*
* Jasmine configuration and reporter
* */

const JasmineConsoleReporter = require('jasmine-console-reporter');
jasmine.getEnv().addReporter(new JasmineConsoleReporter());

/*
* Axios configuration
* */
import Configuration from "../../../app-config";

axios.defaults.baseURL = Configuration.API_URL;
if (Configuration.API_URL == null) throw new Error("You must specify API_URL parameter in .env file")

console.log('LOGGING', Configuration.ENABLE_API_LOGGING);

if (Configuration.ENABLE_API_LOGGING) {
    axios.interceptors.response.use(
        (response) => {
            console.log(response.data);
            return response;
        }, (error) => {
            console.log(error.response.data);
            return Promise.reject(error);
        });
}

import axios from "axios";

const result = require('dotenv').config({
    path: './.env',
});

if (result.error) {
    console.error('Couldnt find environment variables. Make sure you have a `.env` file prepared in the root of the project');
    throw result.error;
}

import Configuration from "../../../app-config";

const JasmineConsoleReporter = require('jasmine-console-reporter');
jasmine.getEnv().addReporter(new JasmineConsoleReporter());
// jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000; //TODO Review

axios.defaults.baseURL = Configuration.API_URL;
if (Configuration.API_URL == null) throw new Error("You must specify API_URL parameter in .env file")

//TODO review
// if (Configuration.ENABLE_API_LOGGING) {
//     axios.interceptors.response.use(
//         (response) => {
//             console.log(response.data);
//             return response;
//         }, (error) => {
//             console.log(error.response.data);
//             return Promise.reject(error);
//         });
// }

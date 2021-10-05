const result = require('dotenv').config({
    path: './.env',
});

if (result.error) {
    console.error('Couldnt find environment variables. Make sure you have a `.env` file prepared in the root of the project');
    throw result.error;
}
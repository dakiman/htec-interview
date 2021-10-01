require('ts-node').register({
    compilerOptions: {
        module: 'commonjs'
    },
    disableWarnings: true,
    fast: true
});

exports.config = require('./protractor.conf.ts').config;
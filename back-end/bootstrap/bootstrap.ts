const JasmineConsoleReporter = require('jasmine-console-reporter');

jasmine.getEnv().addReporter(new JasmineConsoleReporter());
// jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000; //TODO Review
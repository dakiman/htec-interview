# HTEC Interview Assignment

### Setup

* From root directory run:

        npm install

* Most configuration variables are held and read from a **.env** file, so before running any tests make sure to create
your own .env file (there is a **.env.example** file that you can copy over)

* Make sure to input valid email/password in the **.env** file credentials for logging into the application before running the tests
* Make sure to have the latest version of chrome installed OR alter the **npm run test** commands to specify WebDriver version
### Running the tests

* To run front-end tests run the following command:

        npm run test-fe
        
* To run back-end tests run the following command:
        
        npm run test-be

### Configuring the tests

#### All tests
    USER_EMAIL/USER_PASSWORD <= Valid login credentials for sandbox app
#### Frontend
    ELEMENT_TIMEOUT          <= Maximum amount of time the FE tests will wait for an element condition to fulfill    
    URL_TIMEOUT              <= Maximum amount of time the FE tests will wait for a URL switch/check
    BASE_URL_FE              <= Base URL setting of protractor
#### Backend
    API_URL                  <= Base URL used by Axios HTTP client
    ENABLE_API_LOGGING       <= Toggle Axios interceptor for logging request/response
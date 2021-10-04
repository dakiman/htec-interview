export default class Configuration {
    public static USER_EMAIL = process.env.USER_EMAIL || null
    public static USER_PASSWORD = process.env.USER_PASSWORD || null
    public static BASE_URL_FE = process.env.BASE_URL_FE || null
    public static ELEMENT_TIMEOUT = Number(process.env.DEFAULT_TIMEOUT) || 10000
    public static URL_TIMEOUT = Number(process.env.URL_TIMEOUT) || 1000
    public static API_URL = process.env.API_URL || null;
    public static ENABLE_API_LOGGING = process.env.ENABLE_API_LOGGING == 'true'; //proccess.env returns strings
}
export default class Configuration {
    public static USER_EMAIL = process.env.USER_EMAIL || null
    public static USER_PASSWORD = process.env.USER_PASSWORD || null
    public static BASE_URL = process.env.BASE_URL || null
    public static ELEMENT_TIMEOUT = Number(process.env.DEFAULT_TIMEOUT) || 10000
    public static URL_TIMEOUT = Number(process.env.URL_TIMEOUT) || 1000
    public static API_URL = process.env.API_URL || null;
    public static ENABLE_API_LOGGING = Boolean(process.env.ENABLE_API_LOGGING) || false;
}

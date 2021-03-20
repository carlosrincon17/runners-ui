class LocalStorageUtil {

    static TOKEN_KEY = 'token';
    static ACCESS_TIME = 'access_time';
    static IS_ADMIN = 'is_admin';


    static setItem(key, value) {
        return localStorage.setItem(key, value);
    }

    static getItem(key) {
        return localStorage.getItem(key)
    }

    static removeItem(key) {
        return localStorage.removeItem(key)
    }

}

export default LocalStorageUtil;
class LocalStorage {
    static setToken = (token) => {
        window.localStorage.setItem('token', token);
    };

    static setUserId = (userId) => {
        window.localStorage.setItem('userId', userId);
    };

    static getToken = () => {
        return window.localStorage.getItem('token');
    };

    static getUserId = () => {
        return window.localStorage.getItem('userId');
    };

    static clearToken = () => {
        window.localStorage.removeItem('token');
    }

    static clearUserId = () => {
        window.localStorage.removeItem('userId');
    }
}

export default LocalStorage;
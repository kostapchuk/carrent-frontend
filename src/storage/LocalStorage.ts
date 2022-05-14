class LocalStorage {
    static setToken = (token: string) => {
        window.localStorage.setItem('token', token);
    };

    static setUserId = (userId: string) => {
        window.localStorage.setItem('userId', userId);
    };

    static getToken = (): string => {
        return window.localStorage.getItem('token') || "";
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

    static setLoggedIn(loggedIn: string) {
        window.localStorage.setItem('loggedIn', loggedIn);
    }

    static getLoggedIn = (): string => {
        return window.localStorage.getItem('loggedIn') || "";
    }

    static setAdmin(admin: string) {
        window.localStorage.setItem('admin', admin);
    }

    static getAdmin = (): string => {
        return window.localStorage.getItem('admin') || "";
    }
}

export default LocalStorage;

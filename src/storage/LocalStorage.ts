class LocalStorage {
    setToken = (token: string) => {
        window.localStorage.setItem('token', token);
    };

    setUserId = (userId: string) => {
        window.localStorage.setItem('userId', userId);
    };

    getToken = (): string => {
        return window.localStorage.getItem('token') || "";
    };

    getUserId = () => {
        return window.localStorage.getItem('userId');
    };

    clearToken = () => {
        window.localStorage.removeItem('token');
    }

    clearUserId = () => {
        window.localStorage.removeItem('userId');
    }

    setLoggedIn(loggedIn: string) {
        window.localStorage.setItem('loggedIn', loggedIn);
    }

    getLoggedIn = (): string => {
        return window.localStorage.getItem('loggedIn') || "";
    }

    setAdmin(admin: string) {
        window.localStorage.setItem('admin', admin);
    }

    getAdmin = (): string => {
        return window.localStorage.getItem('admin') || "";
    }
}

export default new LocalStorage();

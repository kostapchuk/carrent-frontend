class LocalStorage {
  static setToken = (token: string) =>
    window.localStorage.setItem('token', token);

  static setUserId = (userId: string) =>
    window.localStorage.setItem('userId', userId);

  static getToken = (): string => window.localStorage.getItem('token') || '';

  static getUserId = () => window.localStorage.getItem('userId');

  static clearToken = () => window.localStorage.removeItem('token');

  static clearUserId = () => window.localStorage.removeItem('userId');

  static setLoggedIn = (loggedIn: string) =>
    window.localStorage.setItem('loggedIn', loggedIn);

  static getLoggedIn = (): string =>
    window.localStorage.getItem('loggedIn') || '';

  static setAdmin = (admin: string) =>
    window.localStorage.setItem('admin', admin);

  static getAdmin = (): string => window.localStorage.getItem('admin') || '';
}

export default LocalStorage;

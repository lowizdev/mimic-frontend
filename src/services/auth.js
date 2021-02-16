const TOKEN_KEY = 'login-token';


export const isAuthenticated = () => {
    return (getToken() !== null);
};

export const getToken = () => {
    return (localStorage.getItem(TOKEN_KEY));
};

export const login = (token) => {
    localStorage.setItem(TOKEN_KEY, token);
};

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
};

import httpService from "./httpService";
import jwtDecode from "jwt-decode";

const TOKEN_KEY = "token";
setHeaderToken();

export function setHeaderToken() {
    httpService.setCommonHeader("x-auth-token", getJWT());
}
export function getJWT() {
    return localStorage.getItem(TOKEN_KEY);
}
export function createUser(user) {
    return httpService.post("/users", user);
}
export async function login(credentials) {
    const response = await httpService.post("/users/login", credentials);
    localStorage.setItem(TOKEN_KEY, response.data.token);
    setHeaderToken();
    return response;
}
export function logout() {
    localStorage.removeItem(TOKEN_KEY);
    setHeaderToken();
}

export function getUser() {
    try {
        const token = getJWT();
        return jwtDecode(token);
    } catch {
        return null;
    }
}
export function myFavourites() {
    return httpService.get("/users/my-favorites");
};
export function myProfile() {
    return httpService.get(`/users/my-profile`);
}

export function getMe(id) {
    return httpService.get(`/users/${id}`);
}

const usersServices = {
    createUser,
    login,
    logout,
    getJWT,
    getUser,
    getMe,
    myProfile,
    myFavourites
};
export default usersServices;
import axios from "axios";

const BASE_URL = "https://api.qureal.com/";
const TOKEN = "HZbcprzBXNjb8oHfOih5DCkuDUD70vyw";

axios.defaults.baseURL = BASE_URL;

export const publicAxios = axios.create({
    baseURL: BASE_URL,
});

publicAxios.interceptors.response.use(
    function (res) {
        return res.data;
    },
    function (err) {
        return Promise.reject(err);
    }
);

export const secureAxios = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer ${TOKEN}`,
    },
});

secureAxios.interceptors.response.use(
    function (res) {
        return res.data;
    },
    function (err) {
        return Promise.reject(err);
    }
);

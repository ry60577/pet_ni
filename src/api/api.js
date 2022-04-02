import { api } from "boot/axios.js";

// const api = axios.create();

const request = api;

// 請求攔截
request.interceptors.request.use(
  (config) => {
    console.group(`%c Request:[${config.url}]`, "background:#dddddd");
    console.log("Request:", config.data);
    console.groupEnd();

    return config;
  },
  (error) => {
    console.group(`%c Request:[${error.config.url}]`, "background:#f98686;");
    console.log("Request:", error);
    console.groupEnd();

    return Promise.reject(error);
  }
);

// 回應攔截
request.interceptors.response.use(
  (res) => {
    console.group(`%c Response:[${res.config.url}]`, "background:#96ddb7;");
    console.log("Status:", res.data.code);
    console.log("Data:", res.data.data);
    console.groupEnd();

    return res;
  },
  (error) => {
    console.log(error);
    const status = error.response.status;
    console.group(`%c Response:[${error.config.url}]`, "background:#f98686;");
    console.error("Error Code:", status);
    console.groupEnd();

    return Promise.reject(error);
  }
);

export { request };

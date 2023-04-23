/* eslint-disable no-param-reassign */
import axios, { AxiosError } from "axios";
import settings from "@/config/settings";
import { refreshToken } from "@/services";

const isBrowser = typeof window !== "undefined";

const request = axios.create({
  baseURL: settings.baseURL,
  timeout: settings.requestTimeout,
});

request.defaults.headers.timezone = new Date().getTimezoneOffset();
request.defaults.headers["Accept-Language"] =
  (isBrowser && localStorage.getItem("lang")) || settings.defaultLanguage;

request.interceptors.request.use((config) => {
  // config.validateStatus = (status) => status < 500;

  if (isBrowser) {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
}, errorHandler);

request.interceptors.response.use((response) => {
  return response.data;
}, errorHandler);

export function errorHandler(error: AxiosError) {
  // Using toJSON you get an object with more information about the HTTP error
  // const errObj = error.toJSON();
  if (error.response) {
    // server responded with a status code that falls out of the range of 2xx

    if (error.response?.data?.code === 403) {
      if (isBrowser) {
        const refresh_token = localStorage.getItem("refresh_token");
        refreshToken({ refresh_token })
          .then((res: Response) => {
            if (res.ok) return res.json();
            throw new Error(res.status.toString());
          })
          .then((res) => {
            localStorage.setItem("token", res.token);
            localStorage.setItem("refresh_token", res.refresh_token);

            window.location.reload();
          })
          .catch((err) => {
            console.error("Error: ", err);
            localStorage.removeItem("token");
            localStorage.removeItem("refresh_token");
            window.location.replace("/auth/login");
          });
      }
    }

    // console.error(error.response);
    // toast({ title: error.message });
    return Promise.reject(error.response);
  }
  if (error.request) {
    // no response received from server
    // console.error(error.request);
    // toast({
    //   title: "No response from the server",
    // });
    return Promise.reject(error.request);
  }
  // else {
  // something happened in setting up the request
  // console.error(errObj);
  // toast({
  //   title: "Error happened in setting up the request",
  // });
  // }

  return Promise.reject(error);
}

export default request;

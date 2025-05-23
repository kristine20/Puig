import axios from "axios";

import {
  getDataFromStorage,
  removeDataFromStorage,
  ResponseErrorMessages,
} from "utils";
import { toast } from "react-toastify";

export const api = axios.create({
  headers: { "Content-Type": "Application/json" },
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use(
  (config) => {
    const token =
      getDataFromStorage("accessToken") || getDataFromStorage("sessionToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
const removeTokensFromStorage = () => {
  if (getDataFromStorage("sessionToken")) {
    removeDataFromStorage("sessionToken");
    return;
  }
  removeDataFromStorage("accessToken");
};

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { response } = error;

    const status = response?.status;
    if (status === 401) {
      removeTokensFromStorage();
    } else {
      let errorMessage = "";
      if (error.response && error.response.data instanceof Blob) {
        try {
          const responseText = await error.response.data.text();
          errorMessage = JSON.parse(responseText)?.message;
        } catch {
          errorMessage = ResponseErrorMessages.something_went_wrong;
        }
      } else {
        errorMessage =
          (error.response
            ? error.response.data?.message
            : ResponseErrorMessages.network_error) ||
          ResponseErrorMessages.something_went_wrong;
      }
      const isExist = Object.keys(ResponseErrorMessages).includes(errorMessage);
      const translatedErrorMessage = ResponseErrorMessages[errorMessage];
      handleError(isExist ? translatedErrorMessage : errorMessage);
    }
    return Promise.reject(error);
  }
);
const handleError = (message) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
  });
};

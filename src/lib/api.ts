import axios from "axios";
import nProgress from "nprogress";

const api = axios.create({
  baseURL:
    (process.env.NEXT_PUBLIC_STRAPI_BASE_URL || "http://localhost:1337") +
    "/api",
  timeout: 10000,
});

if (typeof window !== "undefined") {
  let requestCount = 0;

  const startProgress = () => {
    if (requestCount === 0) nProgress.start();
    requestCount++;
  };

  const stopProgress = () => {
    requestCount--;
    if (requestCount <= 0) {
      nProgress.done();
      requestCount = 0;
    }
  };

  api.interceptors.request.use((config) => {
    startProgress();
    return config;
  });

  api.interceptors.response.use(
    (response) => {
      stopProgress();
      return response;
    },
    (error) => {
      stopProgress();
      return Promise.reject(error);
    }
  );
}

export default api

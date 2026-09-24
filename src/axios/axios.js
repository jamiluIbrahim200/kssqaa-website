import axios from "axios";
// eslint-disable-next-line no-unused-vars
import router from "../router";
// eslint-disable-next-line no-unused-vars
import { useAuthStore } from "@/store/auth";

const url = "";

export const AxiosClient = axios.create({
  baseURL: url,
});
AxiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    //  if (error.response.status === 401) {
    //   // Handle 401 error (Unauthorized)
    //   useAuthStore().logout()
    //   router.push({ name: 'login' })
    // } else if (error.response.status === 409) {
    //   // Handle 404 error (Not Found)
    //   router.push({ name: "default" });
    // } else if (error.response.status === 404) {
    //   // Handle 404 error (Not Found)
    //   // return router.push({ name: "not-found" });
    //   router.push({ name: "default" });
    // }

    return Promise.reject(error);
  }
);

// export const fetchApi = async (path, method, data, headers = {}) => {
//   fetch(url+ path, {
//     method: method,
//     headers: {
//       ...headers,
//       Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
//     },
//     body: data,
//   })
//     .then((response) => {
//       Promise.resolve(response.json());
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error);
//       Promise.reject(error);
//     });
// };

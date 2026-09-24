import { defineStore } from "pinia";
// import url from "../axios/url";
// import axios from "axios";
import { AxiosClient } from "../axios/axios";
import router from "../router";
export const useAuthStore = defineStore("authStore", {
  state: () => ({
    user: null,
    name: null,
    email: null,
    prvi: [],
    token: localStorage.getItem("token") || null,
    error: null,
    errors: {},
    isLoading: false,
  }),

  getters: {
    isLoggedIn: (state) => state.token != null,
  },
  actions: {
    //Clear errors Action Start
    async clearErrors() {
      this.error = "";
      this.errors = {};
    },
    //clear errors end start
    //Login Action Start
    async login(formData) {
      this.isLoading = true;

      return new Promise((resolve, reject) => {
        AxiosClient.post(`/login`, formData, {
          withCredentials: true,
        })
          .then((res) => {
          console.log(res.data);
            localStorage.setItem("token", res.data.userToken);
            this.token = res.data.userToken;
            this.isLoading = false;
            router.push({ name: "default" });
            // resolve(res)
          })
          .catch((error) => {
            this.isLoading = false;
            reject(error);
          });
      });
    },
    //Login Action End
    //Logout Action Start
    async logout() {
      // Clear the token and user data
      try {
        // await AxiosClient.get(`logout`, {
        //   headers: {
        //     Authorization: "Bearer " + this.token,
        //   },
        // });
        if (this.token) {
          localStorage.removeItem("token");
        }
        this.user = null;
        this.token = null;
        this.isLoading = false;
        router.push({ name: "login" });
      } catch (error) {
        if (this.token) {
          localStorage.removeItem("token");
        }
        this.error = error?.response?.data?.message ?? "An error occurred";
        this.user = null;
        this.token = null;
        this.isLoading = false;

        router.push({ name: "login" });
      }
    },
    //Logout Action End

    // Get User Action Start
    async getUser() {
      return new Promise((resolve, reject) => {
        AxiosClient.get(`v1/d/user`, {
          headers: {
            Authorization:
              "Bearer " + localStorage.getItem("token") ?? this.token,
          },
        })
          .then((res) => {
            this.user = res?.data.info;
            this.name = res?.data.info?.name;
            this.prvi = res?.data?.info.abilities;
            resolve(res);
          })
          .catch((error) => {
            if (error?.status === 401) {
              this.logout();
            }
            reject(error);
          });
      });
    },
    // Get User Action End

    // get privileges

    getPrivileges() {
      return new Promise((resolve, reject) => {
        AxiosClient.get(`privilage`, {
          headers: {
            Authorization:
              "Bearer " + localStorage.getItem("token") ?? this.token,
          },
        })
          .then((response) => {
            resolve(response.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    // end of get privileges
  },
});

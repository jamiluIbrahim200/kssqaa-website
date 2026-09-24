import { defineStore } from "pinia";
import { AxiosClient } from "../axios/axios";

export const useUserStore = defineStore("userStore", {

  state: () => ({
    isLoading: false,
    isUpdating: false,
    isCreating: false,
    token: localStorage.getItem("token") || null,
  }),

  actions: {
    allUsers(params) {
      return new Promise((resolve, reject) => {
        this.isLoading = true;
        AxiosClient.get(`/v1/n/usre`, {
          params,
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          })
          .finally(() => {
            this.isLoading = false;
          });
      });
    },
    createUser(payload) {
      return new Promise((resolve, reject) => {
        this.isCreating = true;
        AxiosClient.post(`/v1/n/usre`, payload, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          })
          .finally(() => {
            this.isCreating = false;
          });
      });
    },
    getCreate() {
      return new Promise((resolve, reject) => {
        this.isLoading = true;
        AxiosClient.get(`/v1/n/usre/create`, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
            .then((res) => {
                resolve(res);
            })
            .catch((error) => {
                reject(error);
            })
            .finally(() => {
                this.isLoading = false;
            });
      });
    },
    getUserInfo(id){
      return new Promise((resolve, reject)=>{
        this.isLoading = true;
        AxiosClient.get(`/v1/n/usre/${id}`, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => {
          this.isLoading = false;
        });
      
      })
    },
    getUserEdit(id){
      return new Promise((resolve, reject)=>{
        this.isLoading = true;
        AxiosClient.get(`/v1/n/usre/${id}/edit`, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => {
          this.isLoading = false;
        });
      
      })
    },
    updateUser(id, payload){
      return new Promise((resolve, reject)=>{
        this.isUpdating = true;
        AxiosClient.put(`/v1/n/usre/${id}`, payload, {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => {
          this.isUpdating = false;
        });
      
      })
    },
  },
});
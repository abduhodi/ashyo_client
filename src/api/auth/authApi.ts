import axiosClient from "@/api/axios/axiosApi";

export interface IAuthPayload {
  login: string;
  password: string;
}

export const authApi = {
  login(payload: IAuthPayload) {
    const url = "auth/login";
    return axiosClient.post(url, payload);
  },

  logout() {
    const url = "auth/logout";
    return axiosClient.post(url);
  },

  getProfileInfo() {
    const url = "profile/info";
    return axiosClient.get(url);
  },

  profileUpdate(payload: any) {
    const url = "profile/update";
    return axiosClient.put(url, payload);
  },

  changePassword(payload: any) {
    const url = "profile/change-password";
    return axiosClient.post(url, payload);
  },

  uploadImage(payload: any) {
    const url = "profile/upload-image";
    return axiosClient.post(url, payload);
  },
};

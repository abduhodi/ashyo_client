import axiosClient from "@/api/axios/axiosApi";

export const userApi = {
  async getProducts() {
    const url = "products";
    return axiosClient.get(url);
  },
};

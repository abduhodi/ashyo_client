import axiosClient from "@/api/axios/axiosApi";

export const productApi = {
  async getProducts() {
    const url = "product";
    return axiosClient.get(url);
  },
  async getSingleProduct(id: number) {
    const url = "product/" + id;
    return axiosClient.get(url);
  },
  async addCart(id: number) {
    const url = "cart_items";
    return axiosClient.post(url, { product_id: id, quantity: 1 });
  },
  async getCart() {
    const url = "cart_items/cart";
    return axiosClient.get(url);
  },
  async deleteCart(id: number) {
    const url = "cart_items/" + id;
    return axiosClient.delete(url);
  },
  async increaseCartItem(id: number) {
    const url = "cart_items/increase/" + id;
    return axiosClient.post(url);
  },
  async decreaseCartItem(id: number) {
    const url = "cart_items/decrease/" + id;
    return axiosClient.post(url);
  },
  async saveProduct(id: number) {
    const url = "views/save/" + id;
    return axiosClient.post(url);
  },
  async getSaved() {
    const url = "views/saved";
    return axiosClient.get(url);
  },
  async getViews() {
    const url = "views";
    return axiosClient.get(url);
  },
  async viewed(id: number) {
    const url = "views";
    return axiosClient.post(url, { product_id: id });
  },
  async getCategories() {
    const url = "categories";
    return axiosClient.get(url);
  },
  async getAttributes(id: number) {
    const url = "category-brand/" + id;
    return axiosClient.get(url);
  },
  async getBrandProducts(id: number) {
    const url = "brand/" + id;
    return axiosClient.get(url);
  },
};

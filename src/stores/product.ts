import { defineStore } from "pinia";
import { productApi } from "../api/user/productApi";

export const productStore = defineStore("product_store", {
  state: () => ({
    products: [] as any,
    product: {} as any,
    cart: [] as any,
    saved: [] as any,
    views: [] as any,
  }),
  actions: {
    async getProducts() {
      try {
        const products: any = await productApi.getProducts();
        const saved = JSON.parse(localStorage.getItem("saved") ?? "[]");
        const cart = this.cart.map((item: any) => item?.product_id);
        this.products = products.map((item: any) => {
          if (saved?.includes(item?.id)) item.liked = true;
          if (cart?.includes(item?.id)) item.inCart = true;
          return item;
        });
        console.log(products);
      } catch (error) {
        console.log(error);
      }
    },
    async getSingleProduct(id: number) {
      try {
        const product: any = await productApi.getSingleProduct(id);
        this.product = JSON.parse(JSON.stringify(product));
        const prod = this.cart.filter((item: any) => item?.product_id == id);
        if (prod?.length) {
          this.product.inCart = true;
          this.product.quantity = prod[0]?.quantity;
        }
        console.log(product);
      } catch (error) {
        console.log(error);
      }
    },
    async addCart(id: number) {
      try {
        const response: any = await productApi.addCart(id);
        this.cart.push(response);
        localStorage.setItem(
          "cart",
          JSON.stringify(this.cart.map((item: any) => item.product_id))
        );
        this.cart = this.cart.map((item: any) => {
          item.inCart = true;
          return item;
        });
        const prod = this.cart.filter((item: any) => item?.product_id == id);
        if (prod?.length) {
          this.product.inCart = true;
        }
        const saved = JSON.parse(localStorage.getItem("saved") ?? "[]");
        const cart = this.cart.map((item: any) => item?.product_id);
        this.products = this.products.map((item: any) => {
          if (saved?.includes(item?.id)) item.liked = true;
          else item.liked = false;
          if (cart?.includes(item?.id)) item.inCart = true;
          else item.liked = false;
          return item;
        });
        this.views = this.views.map((item: any) => {
          if (cart?.includes(item?.id)) item.inCart = true;
          else item.inCart = false;
          if (saved?.includes(item?.id)) item.liked = true;
          else item.liked = false;
          return item;
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
    async getCart() {
      try {
        const response: any = await productApi.getCart();
        this.cart = [...response];
        const saved = JSON.parse(localStorage.getItem("saved") ?? "[]");
        this.cart = this.cart.map((item: any) => {
          if (saved?.includes(item?.product_id)) {
            item.liked = true;
            return item;
          }
          return item;
        });
      } catch (error) {
        console.log(error);
      }
    },
    async deleteCart(id: number) {
      try {
        const response: any = await productApi.deleteCart(id);
        const ind = this.cart.reduce(
          (index: number, item: any, inde: number) => {
            if (item?.id == id) return inde;
            else return index;
          },
          -1
        );
        this.cart.splice(ind, 1);
        localStorage.setItem(
          "cart",
          JSON.stringify(this.cart.map((item: any) => item.id))
        );
        // const cart = JSON.parse(localStorage.getItem("cart") ?? "[]");
      } catch (error) {
        console.log(error);
      }
    },
    async increaseCartItem(id: number) {
      try {
        const response: any = await productApi.increaseCartItem(id);
        console.log(response);
        this.cart = this.cart.map((item: any) => {
          if (id == item?.id) {
            item.quantity++;
            return item;
          }
          return item;
        });
      } catch (error) {
        console.log(error);
      }
    },
    async decreaseCartItem(id: number) {
      try {
        const response: any = await productApi.decreaseCartItem(id);
        this.cart = this.cart.map((item: any) => {
          if (id == item?.id) {
            item.quantity--;
            return item;
          }
          return item;
        });
      } catch (error) {
        console.log(error);
      }
    },
    async saveProduct(id: number) {
      try {
        const response: any = await productApi.saveProduct(id);
        this.saved = [...response];
        localStorage.setItem(
          "saved",
          JSON.stringify(this.saved.map((item: any) => item?.product_id))
        );
        const saved = JSON.parse(localStorage.getItem("saved") ?? "[]");

        this.products = this.products.map((item: any) => {
          if (saved?.includes(item?.id)) {
            item.liked = true;
            return item;
          } else {
            item.liked = false;
            return item;
          }
        });
        console.log(this.views);
        this.views = this.views.map((item: any) => {
          if (saved?.includes(item?.product_id)) item.liked = true;
          else item.liked = false;
          return item;
        });
      } catch (error) {
        console.log(error);
      }
    },
    async getSaved() {
      try {
        const response: any = await productApi.getSaved();
        const cart = JSON.parse(localStorage.getItem("cart") ?? "[]");
        this.saved = response.map((item: any) => {
          if (cart?.includes(item?.product_id)) item.product.inCart = true;
          item.product.liked = true;
          return item;
        });
      } catch (error) {
        console.log(error);
      }
    },
    async getViews() {
      try {
        const response: any = await productApi.getViews();
        const cart = this.cart?.map((item: any) => item?.product_id);
        const saved = JSON.parse(localStorage.getItem("saved") ?? "[]");
        this.views = response.map((item: any) => {
          if (cart?.includes(item?.product_id)) item.product.inCart = true;
          if (saved?.includes(item?.product_id)) item.product.liked = true;
          return item?.product;
        });
        console.log(this.views);
      } catch (error) {
        console.log(error);
      }
    },
    async viewed(id: number) {
      try {
        const response: any = await productApi.viewed(id);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  },
});

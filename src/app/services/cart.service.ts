import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: any[] = [];

  addToCart(product: any): void {
    const existingProduct = this.cart.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }

  removeFromCart(product: any): void {
    const cartItem = this.cart.find((item) => item.id === product.id);
    if (cartItem) {
      if (cartItem.quantity > 1) {
        cartItem.quantity--;
      } else {
        this.cart = this.cart.filter((item) => item.id !== product.id);
      }
    }
  }
  

  incrementQuantity(product: any): void {
    const cartItem = this.cart.find((item) => item.id === product.id);
    if (cartItem) cartItem.quantity++;
  }

  decrementQuantity(product: any): void {
    const cartItem = this.cart.find((item) => item.id === product.id);
    if (cartItem && cartItem.quantity > 1) {
      cartItem.quantity--;
    } else {
      this.removeFromCart(product);
    }
  }

  getCart(): any[] {
    return this.cart;
  }

  getTotal(): number {
    return this.cart.reduce((total, product) => total + product.price * product.quantity, 0);
  }
}

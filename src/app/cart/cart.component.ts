import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { ToastNotificationService } from '../services/toast-notification.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  imports: [CommonModule, CurrencyPipe, RouterModule],
})
export class CartComponent implements OnInit {
  cart: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }

  removeFromCart(product: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to remove "${product.title}" from the cart?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, remove it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.isConfirmed) {
        this.cartService.removeFromCart(product);
        this.cart = this.cartService.getCart();
        ToastNotificationService.showToast(product.title, 'removed');

      }
    });
  }

  incrementQuantity(product: any) {
    this.cartService.incrementQuantity(product);
    this.cart = this.cartService.getCart();
  }

  decrementQuantity(product: any) {
    this.cartService.decrementQuantity(product);
    this.cart = this.cartService.getCart();
  }

  getTotal() {
    return this.cartService.getTotal();
  }
}

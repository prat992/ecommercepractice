import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { config } from '../constants/config';
import { ToastNotificationService } from '../services/toast-notification.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [CommonModule, NgxPaginationModule, RouterModule],
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  page = 1;
  totalRecords = 20;
  unsplashApiUrl = config.unsplashApiUrl;
  accessKey = config.accessKey;

  constructor(private http: HttpClient, private cartService: CartService) {}

  ngOnInit(): void {
    this.fetchImages();
  }

  fetchImages(): void {
    const url = `${this.unsplashApiUrl}?client_id=${this.accessKey}&per_page=${this.totalRecords}`;

    this.http.get<any[]>(url).subscribe((response: any) => {
      this.products = response.map((item: any, index: any) => ({
        id: index + 1,
        image: item.urls.small,
        title: `Product ${index + 1}`,
        description: item.alt_description || 'This is a product description',
        price: Math.floor(Math.random() * 100) + 50,
      }));
    });
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    ToastNotificationService.showToast(product.title,'added');
  }
}

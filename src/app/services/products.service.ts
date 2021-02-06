import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.interface';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(
      'http://testapi.techriff.in/api/open/products'
    );
  }

  getProduct(productId: number): Observable<IProduct> {
    return this.http.get<IProduct>(
      `http://testapi.techriff.in/api/open/products/${productId}`
    );
  }

  deleteProduct(productName: string) {
    // this.allProducts = this.allProducts.filter(
    //   (x) => x.productName != productName
    // );
  }

  changeStatus(
    newStatus: 'activate' | 'deactivate',
    productId: number
  ): Observable<IProduct> {
    if (newStatus == 'activate')
      return this.http.post<IProduct>(
        `http://testapi.techriff.in/api/open/products/${productId}/reactivate`,
        null
      );
    else
      return this.http.post<IProduct>(
        `http://testapi.techriff.in/api/open/products/${productId}/deactivate`,
        null
      );
  }
}

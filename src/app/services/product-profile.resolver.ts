import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.interface';
import { ProductService } from './products.service';

@Injectable({
  providedIn: 'root',
})
export class ProductResolver implements Resolve<IProduct> {
  constructor(private productService: ProductService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): IProduct | Observable<IProduct> | Promise<IProduct> {
    console.log('Inside Resolver');

    let id = +route.paramMap.get('id');
    return this.productService.getProduct(id);
  }
}

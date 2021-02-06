import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

import { IProduct } from '../models/product.interface';
import { ProductService } from '../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit, OnChanges, DoCheck {
  @Input() product: IProduct;
  @Input() isShowImage: boolean;

  @Output() onProductDelete: EventEmitter<string> = new EventEmitter<string>();
  @Output() onStatusChange: EventEmitter<number> = new EventEmitter<number>();

  counter: number = 0;

  constructor(private productService: ProductService) {}

  ngDoCheck(): void {
    this.counter++;
    // console.log('Inside ngDoCheck() ProductDetailsComponent', this.counter);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.counter++;
    // console.log('Inside OnChanges() ProductDetailsComponent', {
    //   changes: changes,
    //   counter: this.counter,
    // });
  }

  ngOnInit(): void {
    this.counter++;
    // console.log('Inside ngOnInit() ProductDetailsComponent', this.counter);
  }

  getClassesForProduct(product: IProduct) {
    if (product.price == 200) {
      return {
        green: true,
        bold: true,
      };
    } else {
      return {};
    }
  }

  buyProduct(product: IProduct) {
    console.log('Buying initiated for ' + product.productName);
  }

  deleteProduct(product: IProduct) {
    //you make http call
    console.log('Deleting Product -' + product.productName);
    this.onProductDelete.emit(product.productName);
  }

  changeStatus(newStatus: 'deactivate' | 'activate', product: IProduct) {
    this.productService
      .changeStatus(newStatus, product.productId)
      .subscribe((data: IProduct) => {
        console.log('Status Changed');
        this.onStatusChange.emit(product.productId);
      });
  }
}

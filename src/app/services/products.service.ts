import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../core/services';
import { Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productURL: string = '/products';
  private products: Product[] = [];
  constructor(private apiServie: ApiService) { }

  getProducts(): Observable<Product[]> {
    return this.apiServie.get(this.productURL);
  }

  getProductsPromise(): Promise<Product[]> {
    return this.apiServie.get(this.productURL).toPromise();
  }

  getProduct(id: number) {
    return this.apiServie
      .get(`${this.productURL}/${id}`);
  }

  addProduct(product: Product) {
    return this.apiServie
      .post(this.productURL, product);
  }

  updateProduct(id: number, product: Product) {
    return this.apiServie
      .put(`${this.productURL}/${id}`, product);
  }

  deleteProduct(id: number) {
    return this.apiServie
      .delete(`${this.productURL}/${id}`);
  }
}

import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models';
import { ProductsService } from 'src/app/services';
import { AppError } from 'src/app/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  error: AppError;

  constructor(private service: ProductsService) {}

  ngOnInit() {
    this.service.getProducts().subscribe(
      (products: any[]) => {
        console.log('Success! Get Products Successful! (via Observable)');
        this.products = products;
      }/* ,
      (error: AppError) => {
        this.handleError('Failed! Error occurred when getting products. (via Observable)', error);
      } */
    );
  }

  xngOnInit() {
    this.service
      .getProductsPromise()
      .then((products: Product[]) => {
        console.log('Success! Get Products Successful! (via Promise)');
        this.products = products;
      });
      /* .catch((error: AppError) => {
        this.handleError('Failed! Error occurred when getting products. (via Promise)', error);
      }); */
  }

  onDelete(productId) {
    if (confirm('Are you sure?')) {
      this.service.deleteProduct(productId).subscribe(
        () => {
          console.log('Success! Delete Product Successful!');
          this.products = this.products.filter(
            product => product.id !== productId
          );
        }/* ,
        (error: AppError) => {
          this.handleError('Failed! Error occurred when deleting product.', error);
        } */
      );
    }
  }

  handleError(message: string, error: AppError) {
    this.error = error;
    console.log(message, error);
  }
}

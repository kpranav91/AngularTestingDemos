import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product = new Product();
  id: number;

  constructor(
    private service: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];

      if (isNaN(this.id) || !this.id) {
        console.log(
          `Product id is not a number (or) is 0. (id = ${params['id']})`
        );
        this.router.navigate(['/not-found']);
        return;
      }

      this.service.getProduct(this.id).subscribe(
        (product: Product) => {
          console.log('Success! Get Product Successful!');
          this.product = product;
        },
        (error: any) => {
          console.log('Failed! Error occurred when getting product.', error);
        }
      );
    });
  }

  onDelete() {
    if (confirm('Are you sure?')) {
      this.service.deleteProduct(this.id).subscribe(
        () => {
          console.log('Success! Delete Product Successful!');
          this.router.navigate(['/products']);
        },
        (error: any) => {
          console.log('Failed! Error occurred when deleting product.', error);
        }
      );
    }
  }

  onEdit() {
    this.router.navigate(['/products', this.id, 'edit']);
  }
}

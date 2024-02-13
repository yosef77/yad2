import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private router: Router
    ) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(
      (data) => {this.products = data;},
      (error) => {console.error('Error fetching products', error);}
    );
  }

  sortProducts(property: string, order: string): void {
    this.productService.sortProducts(property, order).subscribe(
      sortedProducts => this.products = sortedProducts,
      error => console.error(`Error sorting products by ${property}`, error)
    );
  }
  

  showDetails(productId: number) {
    this.router.navigate(['/product', productId]);

  }

  purchase(productId: number) {
    this.deleteProduct(productId);
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(
      () => {this.products = this.products.filter(product => product.id !== id);},
      (error) => {console.error('Error deleting product', error);}
    );
  }

}

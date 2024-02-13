import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product?: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
  const productId = +this.route.snapshot.params['id']; 
  if (productId) {
    this.productService.getProducts().subscribe(
      (data) => {
        const product = data.find(p => p.id === productId);
        if (product) {this.product = product;} 
        else {console.error('Product not found'); }
      }
    );
  }
}


  purchase(product: Product) {
    
    this.productService.deleteProduct(product.id).subscribe(
      () => {
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Error purchasing product', error);
      }
    );
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}

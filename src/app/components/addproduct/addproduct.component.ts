import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {

  newProduct: Product = {
    id: 0, 
    name: '',
    description: '',
    imageUrl: '',
    price: 0,
    city: '',
    sellerPhone: '',
    publishDate: new Date().toISOString().split('T')[0]
  };

  constructor(private productService: ProductService, private router: Router) {}

  submitProduct() {
    this.productService.addProduct(this.newProduct).subscribe({
      next: (product) => {
        console.log('Product added', product);
        this.router.navigate(['/']); // ניווט חזרה לדף הבית או לרשימת המוצרים
      },
      error: (error) => {
        console.error('Error adding product', error);
      }
    });
  }
}
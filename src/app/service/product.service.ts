import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:3000/Product';

  constructor(private http: HttpClient) { }

  
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }

 
  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }


  sortProducts(property: string, order: string): Observable<Product[]> {
    let sortField = property;
    if (property === 'date') { sortField = 'publishDate';}

    const url = `${this.baseUrl}?_sort=${sortField}&_order=${order}`;
    return this.http.get<Product[]>(url);
  }
}

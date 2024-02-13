import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';

const appRoutes: Routes = [
  { path: 'home', component: ProductsListComponent },
  { path: 'product/:id', component: ProductDetailsComponent }, 
  { path: 'add-product', component: AddproductComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
 
]

export const router = RouterModule.forRoot(appRoutes);
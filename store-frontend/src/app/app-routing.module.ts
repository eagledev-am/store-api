import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowwarehousesComponent } from './warcomponents/showwarehouses/showwarehouses.component';
import { FormComponent } from './warcomponents/form/form.component';
import { ProductsComponent } from './warcomponents/products/products.component';
import { ShowwarproductsComponent } from './warcomponents/showwarproducts/showwarproducts.component';
import { StockformComponent } from './warcomponents/stockform/stockform.component';
import { ShowhistoriesComponent } from './warcomponents/showhistories/showhistories.component';
import { HomeproductsComponent } from './warcomponents/homeproducts/homeproducts.component';


const routes: Routes = [
  {path : 'warehouses' , component : ShowwarehousesComponent} , 
  {path : 'warehouses/create' , component : FormComponent},
  {path : 'warehouses/edit/:id' , component : FormComponent} ,
  {path : 'products' , component : ProductsComponent} ,
  {path : 'warehouses/:id/products' , component :  ShowwarproductsComponent} , 
  {path : 'warehouses/:id/products/stock' , component : ProductsComponent} ,
  {path : 'warehouses/:id/product/:prodId/stock' , component : StockformComponent},
  {path:'histories' , component:ShowhistoriesComponent} , 
  {path : 'home' , component: HomeproductsComponent} ,
  {path : '' , redirectTo : '/home' , pathMatch : 'full'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

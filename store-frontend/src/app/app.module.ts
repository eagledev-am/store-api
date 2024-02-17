import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowwarehousesComponent } from './warcomponents/showwarehouses/showwarehouses.component';
import { HeadersComponent } from './warcomponents/headers/headers.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './warcomponents/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from'@angular/forms';
import { FormComponent } from './warcomponents/form/form.component';
import { ProductsComponent } from './warcomponents/products/products.component';
import { StockformComponent } from './warcomponents/stockform/stockform.component';
import { ShowwarproductsComponent } from './warcomponents/showwarproducts/showwarproducts.component';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ShowhistoriesComponent } from './warcomponents/showhistories/showhistories.component';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { MessagesModule } from 'primeng/messages';
import {InputNumberModule} from 'primeng/inputnumber';
import { HomeproductsComponent } from './warcomponents/homeproducts/homeproducts.component';
import { DropdownModule } from 'primeng/dropdown';
import { DataViewModule } from 'primeng/dataview';


@NgModule({
  declarations: [
    AppComponent,
    ShowwarehousesComponent,
    HeadersComponent,
    FooterComponent,
    FormComponent,
    ProductsComponent,
    StockformComponent,
    ShowwarproductsComponent,
    ShowhistoriesComponent,
    HomeproductsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule ,
    HttpClientModule , 
    FormsModule , 
    TableModule ,
    CardModule , 
    InputTextModule , 
    ButtonModule ,
    DialogModule ,
    DynamicDialogModule , 
    MessagesModule ,
    InputNumberModule , 
    DataViewModule , 
    DropdownModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

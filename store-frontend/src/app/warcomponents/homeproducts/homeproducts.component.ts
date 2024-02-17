import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { Warehouse } from 'src/app/models/Warehouse';
import { WarehouseService } from 'src/app/services/warehouse.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { MessageService } from 'primeng/api';
import { Item } from 'src/app/models/Item';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-homeproducts',
  templateUrl: './homeproducts.component.html',
  styleUrls: ['./homeproducts.component.css'] ,
  providers: [MessageService]
})



export class HomeproductsComponent implements OnInit{
   
  products : Product[] = []
  warehouses !: Warehouse[] 
  faSearch = faSearch
  text:string = ""
  wishListProducts : Item[] = []
  selectetWarehouse !: number
  layout: string = 'list';
  warehouse !: Warehouse
  checkWarehouse : boolean = false

    constructor(private warehouseService : WarehouseService , private router : Router , private messageService: MessageService) {
      this.warehouseService.getAllWarehouses().subscribe((data) => {
        this.warehouses = data
      })

     }
  
    ngOnInit(): void {
      this.refreshProducts()
      this.refreshWarehouses()
    }

    refreshProducts(){
      this.warehouseService.getAllProducts().subscribe((data : any) => {
        this.products = data
      })
    };

    refreshWarehouses(){
      this.warehouseService.getAllWarehouses().subscribe((data) => {
        this.warehouses = data
      })
    }

    getProductsOfWarehouse(warehouseId : number){
      this.warehouseService.getWarehouseProducts(warehouseId).subscribe((data) => {
        this.products = data
      })
      this.selectetWarehouse = warehouseId
      this.checkWarehouse = true

    }

    addToWishList(product : Product){

      if(this.wishListProducts.find(item => item.productId === product.id)){
        return
      }

      let item : Item = {
        productId : product.id ,
        productName : product.name ,
        price : product.price ,
        quantity : 1 ,
        wareHouse : this.selectetWarehouse.toString()
      }

      this.wishListProducts.push(item)
      console.log(this.wishListProducts)
      console.log(item)
      alert("Product added to wish list")
    }

 


}

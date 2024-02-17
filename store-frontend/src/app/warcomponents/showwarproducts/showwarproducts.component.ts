import { Component, OnInit } from '@angular/core';
import { WarehouseService } from 'src/app/services/warehouse.service';
import { Router } from '@angular/router';
import { Inventory } from 'src/app/models/Inventory';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-showwarproducts',
  templateUrl: './showwarproducts.component.html',
  styleUrls: ['./showwarproducts.component.css']
})
export class ShowwarproductsComponent implements OnInit{

  inventories : Inventory[] = []
  text : string = ""
  warehouse_id !: number 
  faAdd = faAdd
  faSearch = faSearch
  selectedProduct !: Inventory

  constructor(private warehouseService : WarehouseService , private router : Router) { 
    
    this.warehouse_id = parseInt(this.router.url.split('/')[2]) 
     if(this.warehouse_id == undefined || this.warehouse_id == null){
       this.router.navigate(['/warehouses'])
     }
     this.router.navigate([`/warehouses/${this.warehouse_id}/products`])
  }

  ngOnInit(): void {
    this.refreshProductList();
  }

  refreshProductList(){
    this.warehouseService.getWarehouseInvetoeries(this.warehouse_id).subscribe((invenotries) => {
      this.inventories = invenotries
      console.log(invenotries)
    });
  }

  getSearchedProducts(){
    if(this.text == ""){
      this.refreshProductList();
    }else{
      this.inventories = this.inventories.filter((invenotry) =>
       !invenotry.id.toString().indexOf(this.text) ||
       !invenotry.product.name.toLocaleLowerCase().indexOf(this.text.toLocaleLowerCase()) || 
       !invenotry.product.categoryName.toLocaleLowerCase().indexOf(this.text.toLocaleLowerCase()) ||
       !invenotry.product.price.toString().indexOf(this.text)
      )
    }
    console.log(this.text)
  }

}

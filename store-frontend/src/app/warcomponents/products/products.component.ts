import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { WarehouseService } from 'src/app/services/warehouse.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Warehouse } from 'src/app/models/Warehouse';
import { faCubes } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  products : Product[] = []
  faSearch = faSearch
  faCubes = faCubes
  text : string = ""
  warehouse_id !: number
  quantity !: any
  product_id !: string
  selectedProduct!: Product;
  backWard = faArrowCircleLeft

  constructor(private warehouseService : WarehouseService , private router : Router){
    this.warehouse_id = parseInt(this.router.url.split('/')[2]);
  }

  ngOnInit(): void {
    this.refreshList(); 
  }
 
  refreshList(){
    this.warehouseService.getAllProducts().subscribe((products) => {
      this.products = products
      console.log(products)
    })
  }

  getSearchedProducts(){
    if(this.text == ""){
      this.refreshList();
    }else{
      this.products = this.products.filter((product) =>
       !product.id.toString().indexOf(this.text) || 
       !product.name.toLocaleLowerCase().indexOf(this.text.toLocaleLowerCase()) || 
       !product.categoryName.toLocaleLowerCase().indexOf(this.text.toLocaleLowerCase()) ||
       !product.price.toString().indexOf(this.text)
      )
    }
    console.log(this.text)
  }

  onStock(){
    console.log(this.product_id)
    console.log(this.quantity)
    console.log(this.warehouse_id)
  }

  goToWarehouseProducts(){
    if(this.checkRoute())
    {
      this.router.navigate(['/warehouses'])
      return
    }
    
    this.router.navigate([`/warehouses/${this.warehouse_id}/products`])
  }

  checkRoute(){
    return isNaN(this.warehouse_id)
  }
}

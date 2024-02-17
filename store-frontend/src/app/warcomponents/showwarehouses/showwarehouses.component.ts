import { Component, OnInit } from '@angular/core';
import { Warehouse } from 'src/app/models/Warehouse';
import { WarehouseService } from 'src/app/services/warehouse.service';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { faCubes } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showwarehouses',
  templateUrl: './showwarehouses.component.html',
  styleUrls: ['./showwarehouses.component.css']
})
export class ShowwarehousesComponent implements OnInit{
  
  warehouses : Warehouse[] = [
  ];

  faPen = faPen
  faTrash = faTrash
  faAdd = faAdd
  faCubes = faCubes
  selectedWarehouse!: Warehouse;

  constructor(private warehouseService : WarehouseService , private router : Router ){
   
  }

  ngOnInit(): void {
    this.refreshList();
  }

  
  refreshList(){
    this.warehouseService.getAllWarehouses().subscribe(warehouses => {
      this.warehouses = warehouses
      // console.log(this.warehouses)
      console.log(warehouses)
    })
  }

  deleteWarehouse(id : number){
    this.warehouseService.deleteWarehouse(id).subscribe(()=> this.warehouses = this.warehouses.filter((warehouse)=> warehouse.id != id))
    console.log(id)
  }

  showEditForm(id : number){
     this.router.navigate([`/warehouses/edit` , id])
  }
}

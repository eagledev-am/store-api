import { Component } from '@angular/core';
import { WarehouseService } from 'src/app/services/warehouse.service';
import { Router } from '@angular/router';
import { Warehouse } from 'src/app/models/Warehouse';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  name : string = ""
  address : string = ''
  location : string = ''
  date : string = ''
  isFieldEmpty : boolean = false
  isUpdateForm : boolean = false
  wareId : number = -1
 
  constructor(private warehouseService : WarehouseService ,private router : Router){
    if(router.url.includes('edit')){
      const id = router.url.split('/')[3]
      this.wareId = parseInt(id)
      console.log(id)
      this.warehouseService.getWarehouseById(id).subscribe((warehouse : Warehouse)=>{
        this.name = warehouse.name
        this.address = warehouse.address
        this.location = warehouse.location
        this.date = warehouse.date
      })
      this.isUpdateForm = true
    }
    
  }

//   onSubmitData(){

//     if(this.name == '' || this.address == '' || this.location == ''){
//       this.isFieldEmpty = true;
//       return
//     }


//     if(!this.isUpdateForm){
//       const warehouse = {
//         name : this.name , 
//         address : this.address , 
//         location : this.location
//       }

//       this.warehouseService.createWarehouse(warehouse).subscribe((warehouse : Warehouse)=> {
//         this.router.navigate(['/warehouses'])
//       })
//     }
//     else if(this.isUpdateForm && this.wareId !== -1){
//       const warehouse = {
//         name : this.name , 
//         address : this.address , 
//         location : this.location ,
//         id : this.wareId ,
//         date : this.date
//       }
      
//       this.warehouseService.updateWarehouse(warehouse).subscribe((warehouse : Warehouse)=> {
//         this.router.navigate(['/warehouses'])
//         this.isUpdateForm = false
//       })
//     } 
//  }

 saveWarehouse(){
  if(this.name == '' || this.address == '' || this.location == ''){
    this.isFieldEmpty = true;
    return
  }

  const warehouse = {
    name : this.name , 
    address : this.address , 
    location : this.location
  }

  this.warehouseService.createWarehouse(warehouse).subscribe((warehouse : Warehouse)=> {
    this.router.navigate(['/warehouses'])
  })

 }

 updateWarehouse(){
  if(this.name == '' || this.address == '' || this.location == ''){
    this.isFieldEmpty = true;
    return
  }

  const warehouse = {
    name : this.name , 
    address : this.address , 
    location : this.location ,
    id : this.wareId ,
    date : this.date
  }
  console.log(warehouse)

  this.warehouseService.updateWarehouse(warehouse).subscribe((warehouse : Warehouse)=> {
    console.log(warehouse)
    this.router.navigate(['/warehouses'])
    this.isUpdateForm = false
  })

 }

 checkRoute(){
    return this.router.url.includes('edit')
 }

}

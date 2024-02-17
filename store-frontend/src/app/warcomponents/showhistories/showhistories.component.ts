import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { History } from 'src/app/models/History';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-showhistories',
  templateUrl: './showhistories.component.html',
  styleUrls: ['./showhistories.component.css']
})
export class ShowhistoriesComponent implements OnInit{
  histories : History[] = []
  text !: string;
  constructor(private warehouseService : WarehouseService , private router : Router ){
   
  }
  ngOnInit(): void {
    this.refreshList();
  }

  refreshList(){
    this.warehouseService.gethistories().subscribe(histories => {
     this.histories = histories;
    })
  }

  getSerchedHistories(){
    if(this.text == ''){
      this.refreshList();
    }else{
      this.histories = this.histories.filter((history) =>
      !history.id.toString().indexOf(this.text) || 
      !history.warehouseName.toLocaleLowerCase().indexOf(this.text.toLocaleLowerCase()) ||
      !history.productName.toLocaleLowerCase().indexOf(this.text.toLocaleLowerCase()) ||
      !history.stockEnum.toLocaleLowerCase().indexOf(this.text.toLocaleLowerCase()) ||
      !history.time.toLocaleLowerCase().indexOf(this.text.toLocaleLowerCase()) ||
      !history.date.toLocaleLowerCase().indexOf(this.text.toLocaleLowerCase()) 
     )
    }


  }
}

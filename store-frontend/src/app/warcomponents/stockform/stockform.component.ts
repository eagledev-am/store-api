import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { faCubes , faClose } from '@fortawesome/free-solid-svg-icons';
import { WarehouseService } from 'src/app/services/warehouse.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-stockform',
  templateUrl: './stockform.component.html',
  styleUrls: ['./stockform.component.css'],
  providers : [MessageService]
})
export class StockformComponent implements OnInit{
  title = 'appBootstrap';
  faCubes = faCubes
  faClose = faClose
  modal : any
  @Input() ware_id !: number 
  @Input() product_id !: number
  quantity : string = ""

  closeResult !: string;

  

  constructor(private modalService: NgbModal , private warehouseService : WarehouseService , private router : Router)  {}
  ngOnInit(): void {
    
  }

    

  open(content : any) {

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {

      this.closeResult = `Closed with: ${result}`;

    }, (reason) => {

      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;

    });

  }

  

  private getDismissReason(reason: any): string {


    if (reason === ModalDismissReasons.ESC) {

      return 'by pressing ESC';

    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {

      return 'by clicking on a backdrop';

    } else {

      return  `with: ${reason}`;

    }

  }

  submit(modal: any){
    if(this.quantity == ""){
      alert("Please enter a quantity")
      return
    }
    console.log('w ' + this.ware_id)
    console.log('p ' + this.product_id)
    console.log('q ' + this.quantity)

    this.warehouseService.stockProduct(this.ware_id , this.product_id , parseInt(this.quantity)).subscribe((res) => {
      console.log(res)
    })
    this.quantity = ''
    alert("product added successfully")
    this.modalService.dismissAll()
  }

  checkRoute(){
    return isNaN(this.ware_id);
  }
  
}

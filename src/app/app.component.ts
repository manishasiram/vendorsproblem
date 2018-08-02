import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Vendors } from './app.model';
import { VendorserviceService } from './vendorservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  submitted:boolean;
  constructor(private vendorservice:VendorserviceService){
    
  }
  onSubmit(vendorform:NgForm){
    
    
    this.vendorservice.submit(vendorform); 
    this.submitted=this.vendorservice.getsubmit();
  }
  onReset(vendorform:NgForm){
    vendorform.reset();
  }
}

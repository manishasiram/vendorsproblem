import { Injectable } from '@angular/core';
import { Vendors } from './app.model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class VendorserviceService {
  submitted = false;
  f:NgForm;
  vendors:Vendors;
  constructor() { 
    this.vendors=new Vendors;
  }
  submit(vendorform:NgForm){
    this.submitted=true;
    this.f = vendorform;
    if(vendorform.value.tasks<=0 || vendorform.value.num_vendors <=0){
      alert("Please enter a value greater than zero")
        
      console.log(this.vendors);
      vendorform.reset();
      this.submitted=false;
    }
    else{
    console.log(vendorform.value.tasks)
    this.vendors.tasks=vendorform.value.tasks;
    this.vendors.num_vendors=vendorform.value.num_vendors;
    
    }
    // console.log(this.vendors);
  }
  getServices(){
    return this.vendors;
  }
  getsubmit(){
    return this.submitted;
  }
}

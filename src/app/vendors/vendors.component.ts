import { Component, OnInit } from '@angular/core';
import { Vendors } from '../app.model';
import { VendorserviceService } from '../vendorservice.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {
  constructor(private vendorservice:VendorserviceService) { }
  total_vendors:Vendors;
  sum:number=0;
  sum_tasks:number=0;
  Arr=Array;
  f:NgForm;
  Tasks:number[]=[];
  vendorsper;
  submitted=false;
  max_per:number=0;
  temp:string;
  ngOnInit() {
    this.total_vendors=this.vendorservice.getServices();
    console.log(this.total_vendors.num_vendors);
  }
  // submit method of vendor form
  Submit(perform:NgForm){
    this.sum=0;
    this.submitted=true;
    this.f = perform;
    this.vendorsper=perform.value.vendorper;
    // sum of given percentages
    
    
    for (let entry in this.Arr ) {
      this.sum += this.Arr[entry];
    }
    if (this.sum==100){
      for (let entry in this.Arr ) {
        if(this.max_per<this.Arr[entry]){
          this.max_per=this.Arr[entry];
          this.temp=entry;
        }
        this.Tasks.push(Math.floor((this.Arr[entry])*this.total_vendors.tasks/100));
      }
      // sum of tasks of each vendors
      for (let entry in this.Tasks) {
        this.sum_tasks += this.Tasks[entry];
      }
      if(this.sum_tasks==this.total_vendors.num_vendors){
        console.log("All tasks are distributed");
      }
      else{
        console.log("Remaining Tasks:" + (this.total_vendors.tasks-this.sum_tasks));
        // Adding remaining tasks to the person who have max
        this.Tasks[this.temp]+=this.total_vendors.tasks-this.sum_tasks;
      }
    console.log(this.Tasks);
    }
    else{
     
      alert("Sum of all percentages should be 100");
      // for (let entry in this.Arr) {
      //   console.log(this.Arr[entry]);
      // }
      
      perform.reset();
      this.submitted=false;
    } 
  }
}

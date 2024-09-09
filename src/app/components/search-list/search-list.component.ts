import { Component, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {

  productName: string='';
  constructor() { }

  ngOnInit(): void {
  }
  submit(form:NgForm){
      this.productName = form.value.product;
      console.log(this.productName)
    
  }
  handleCategoryChange(selectedProduct: any){
   if(selectedProduct === undefined || selectedProduct.target.value === undefined){
    this.productName = '';
   }
    this.productName = selectedProduct.target.value;
  }
}

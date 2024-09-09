import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
  categories:string[]=[];
  @Output() productChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(){
    this.productService.getCategories().subscribe((res:any)=>{
      return this.categories = res;
    })
  }
  handleClick(category: any){
    this.productChange.emit(category)
  }
  allClick() {
    this.productChange.emit(); 
  }
}

  import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
  import { ProductService } from 'src/app/service/product.service';

  @Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
  })
  export class ProductListComponent implements OnInit,OnChanges {
    products:any[] = [];
    filteredProducts:any[]=[];
    @Input() productName:string='';
    text:string='No search this Product .Plz searching Another product.'
    noProduct:boolean=false;

    constructor(private productService:ProductService) { }

    ngOnInit(): void {
      this.getProductCard()
    }
    ngOnChanges(changes: SimpleChanges): void {
      if (changes['productName']) {
        this.filterProducts();
      }
    }
    getProductCard(){
      this.productService.getProduct().subscribe((res:any)=>{
        this.products= res;
        this.filteredProducts = res;
        console.log( this.products)
      })
    } 
    filterProducts(){
      if (this.productName) {
        this.filteredProducts = this.products.filter(product =>
          product.title.toLowerCase().includes(this.productName.toLowerCase()) || product.category.toLowerCase().includes(this.productName.toLowerCase())
        )
        this.noProduct = this.filteredProducts.length === 0;
      }
      else {
        this.filteredProducts = this.products;
        this.noProduct = false;
      }
    }
  }

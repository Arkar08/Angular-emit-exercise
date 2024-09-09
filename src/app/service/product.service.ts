import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit{

  constructor(private http:HttpClient) { }


  ngOnInit(): void {
    this.getProduct()
    this.getCategories()
  }

  getProduct():Observable<any[]>{
    return this.http.get<any[]>('https://fakestoreapi.com/products')
  }

  getCategories():Observable<any[]>{
    return this.http.get<any[]>('https://fakestoreapi.com/products/categories')
  }
}

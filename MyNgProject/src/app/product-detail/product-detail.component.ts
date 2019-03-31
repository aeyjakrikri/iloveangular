import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() ProductData:any; 
  addProduct:any;
  constructor() { }
  
  ngOnInit() {
    console.log(this.ProductData);
  }
  pushToCard(p){
    this.addProduct = p;
    console.log(p);
  }

}
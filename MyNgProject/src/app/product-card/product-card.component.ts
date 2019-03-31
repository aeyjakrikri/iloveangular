import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  _addProduct: any ;
  @Input()  addProduct:any ;
  constructor() { }

  ngOnInit() {
  }

}

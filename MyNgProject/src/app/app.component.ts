import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyNgProject';
  name:string = "";
  score:number ;
  ProductData:any;
 productList = [
   { productID:"0001" , productName:"แปรงสีฟัน" , productCost:"50"} ,
   { productID:"0002" , productName:"ยาสีฟัน" , productCost:"50"} ,
   { productID:"0003" , productName:"แก้วน้ำ" , productCost:"50"}
 ]
  
  constructor(){

  }

  pushData(p){
    this.ProductData = p;
    console.log(this.ProductData);
    
  }
  

}

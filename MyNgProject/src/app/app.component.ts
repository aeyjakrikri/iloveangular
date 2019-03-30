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
  
  student = [
    { studentID:"5921608203",
       name:"กรองกาญจน์ ชัยคำ",
       weight:"50",
       height:"165"},
       { studentID:"5921608222",
       name:"กอบชัย ชัยคำ",
       weight:"90",
       height:"169"}
  ]
  
  constructor(){
    let student = "student in function";
    
  //  console.log(this.student);
    console.log(student);
    this.student.map((object,index)=>{
    let obj:any = object;
    obj.bmi = (obj.weight/((obj.height/100)*(obj.height/100))).toFixed(2);
    return obj;
    })

    console.log(this.student);
  }
  

}

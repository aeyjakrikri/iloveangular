import { Component } from '@angular/core';
import { CommonServiceService } from './common-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result:any;
  profile:any;
  detail:any;
  noteDetail:any;
  edit:any;
  request = {
    key1 : "" ,
    key2 : ""
  }
  request2 = {
    id : "" ,
    name : ""
  }
  request3 = {
    id : "5921608203" 
  }
  request4 = {
    id : "" ,
    noteId  : "" ,
    name : ""
  }
  constructor(private service:CommonServiceService){
    this.getData1();
  //  this.getUserDetail();
  }
  getData1(){
    this.service.getData(this.request).subscribe((Response:any) => {
      console.log("Response", Response);
      this.result = Response.result;

    });
  }
  getUserDetail(){

    this.service.getUserDetail(this.request3).subscribe((Response:any) => {
      this.detail = Response.user[0];
      this.noteDetail = Response.noteDetail[0].note_type;
      console.log(this.noteDetail)
    });
  }
  postCreateProfile(){
    
    this.service.postCreat(this.request2).subscribe((Response:any) => {
      this.profile = Response.result;

    });
  }
  editName(n){
    this.edit = JSON.parse(JSON.stringify(n));
    console.log(n);
  }
  postNoteDetail(){
    this.request4 = {
      id : this.detail.id ,
      noteId : this.edit.id ,
      name : this.edit.name
    }

    console.log(this.detail);
    this.service.postNoteName(this.request4).subscribe((Response:any) => {
      console.log("response",Response);

    });
  }

}

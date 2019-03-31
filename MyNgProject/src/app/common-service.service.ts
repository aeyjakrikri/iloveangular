import { Injectable } from '@angular/core';
import { TransferHttpService } from '@gorniv/ngx-transfer-http';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  private port = '3001';
  private rootPath = 'http://localhost:'+ this.port;
  private getDataPath = this.rootPath + '/test/getData';
  private postNoteNamePath = this.rootPath + '/user/updateNoteName';
  private getUserDataPath = this.rootPath + '/user/getDetail';
  private postCreatePath = this.rootPath + '/user/createProfile';
  parameter: any = {
    params: {},
    responsType: "json"
  }

  constructor(
    private http: TransferHttpService )
    { }
  
    getData(param){
    this.parameter.params = param;
    return this.http.get(this.getDataPath , this.parameter);
  }
    getUserDetail(param){
      this.parameter.params = param;
      return this.http.get(this.getUserDataPath , this.parameter);
    }
    postCreat(param){
      return this.http.post(this.postCreatePath , param);
    }
    postNoteName(param){
      
      return this.http.post(this.postNoteNamePath ,param);
    }
}

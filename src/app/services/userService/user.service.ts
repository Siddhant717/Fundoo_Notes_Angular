import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }
  signup(data: any) {
    console.log(data);

    let header = {
      header: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postService('https://localhost:44377/User/RegisterUser', data, false, header)
  }
  signin(data: any) {
    console.log(data);
    let header = {
      header: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postService('https://localhost:44377/User/LoginUser', data, false, header)
  }
}

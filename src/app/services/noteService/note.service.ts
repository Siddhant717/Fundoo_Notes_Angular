import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../httpService/http.service';


@Injectable({
  providedIn: 'root'
})
export class NoteService {
token:any;

  constructor(private http: HttpService) { 
    this.token = localStorage.getItem('token')
  }
  addNotes(data:any){

    console.log(data,this.token);
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer "+this.token 
      })
  }
  return this.http.postService('https://localhost:44377/Note/AddNote', data, true, header)
}
 getNotes(){
   console.log(this.token)
   let header = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization': "Bearer " + this.token
     })
   }
   return this.http.getService('https://localhost:44377/Note/GetAllNote',true,header)
 }
 updateNotes(data: any) {
  console.log(data,this.token);
  let header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer "+this.token 
    })
  }
  return this.http.putService(`https://localhost:44377/Note/UpdateNote/${data.NoteId}`, data, true, header)
}
Trashnote(data:any){
  console.log(data,this.token);
  let header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer "+this.token 
    })
  }
  return this.http.putService(`https://localhost:44377/Note/TrashNote/${data}`,data, true, header)
}

ArchiveNote(data: any){
  console.log(data,this.token);
  let header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer "+this.token 
    })
  }
  return this.http.putService(`https://localhost:44377/Note/ArchieveNote/${data}`, data, true, header)
}
UnArchiveNote(data:any){
  console.log(data,this.token);
  let header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer "+this.token 
    })
  }
  return this.http.putService(`https://localhost:44377/Note/ArchieveNote/${data}`, data, true, header)
}
notesColor(data: any){
  console.log(data,this.token);
  let header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer "+this.token 
    })
  }
  return this.http.putService(`https://localhost:44377/Note/UpdateColor/${data.NoteId}/${data.color}`, data, true, header)
}
DeleteForever(data:any){
  console.log(data,this.token);
  let header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer "+this.token 
    })
  }
  return this.http.DeleteService(`https://localhost:44377/Note/DeleteNote/${data}`, true, header)
}
}



import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';
@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.scss']
})
export class GetAllComponent implements OnInit {
  noteArray: any;
  constructor(private note: NoteService) { }

  ngOnInit(): void {
    this.getAllNotes();
  }
    getAllNotes() {
      this.note.getNotes().subscribe((result: any) => {
        console.log(result);
        this.noteArray = result.allnotes
        //this.noteArray =  result.allnotes.filter((data:any)=>{
         //console.log(this.noteArray)
         //return data.isArchieve == false && data.isTrash == false
       //})
       //this.noteArray.reverse();
  
    })
  
  }

  receiveMessage(e:any) {
    console.log(e)
    this.getAllNotes();
}
}
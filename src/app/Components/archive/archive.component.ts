import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  noteArray: any;
  constructor(private note: NoteService) { }

  ngOnInit(): void {
    this.getAllNotes
  }
   getAllNotes() {
     this.note.getNotes().subscribe((result: any) => {
       console.log(result);
     
       this.noteArray =  result.allnotes.filter((obj:any)=>{
       console.log(this.noteArray)
        return obj.isArchieve == true 
       })
        console.log(this.noteArray)
     })
  }

}

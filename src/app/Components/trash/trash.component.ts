import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
noteArray:any;

  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.getAllNotes()
  }
  getAllNotes() {
    this.note.getNotes().subscribe((result: any) => {
      console.log(result);
      this.noteArray =  result.allnotes.filter((obj:any)=>{
        return obj.isTrash == true
    })
   this.noteArray.reverse();

  })

}

}

import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';
@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  noteArray:any;
  isTrash:boolean=false;
  constructor(private note: NoteService) { }

  ngOnInit(): void {
    //this.getAllNotes();
  }
  // getAllNotes() {
  //   this.note.getNotes().subscribe((result: any) => {
  //     console.log(result);
  //     this.noteArray =  result.allnotes.filter((data:any)=>{
  //       console.log("notes")
  //       return data.isTrash == true
  //     })
  //     this.noteArray.reverse();
  //   })
  // }
  OnSubmit() :void{
    console.log(this.noteArray.allnotes)
    this.note.Trashnote(this.noteArray.allnotes.noteId).subscribe((result:any)=>console.log(result))
  }
  // OnDeleteForever(){
  //   console.log(this.noteArray)
  //   this.note.Deletenote(this.noteArray.allnotes.noteId).subscribe((result:any)=>console.log(result))
  // }

}

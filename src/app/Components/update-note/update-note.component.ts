import { Component, OnInit } from '@angular/core';
import {Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {
  title:any;
  description:any;
  constructor( public dialogRef: MatDialogRef<UpdateNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private note:NoteService) { }

  ngOnInit(): void {
    console.log(this.data)
     this.title=this.data.title;
     this.description=this.data.description;
  }
  onClose() {
    this.dialogRef.close();
    let data={
      title:this.title,
      description:this.description,
      color:'white',
      isPin: false,
      isReminder: false,
      isArchieve: false,
      isTrash: false,
      reminder: "2022-09-28T07:16:08.706Z",
      NoteId: this.data.noteId
    }
    this.note.updateNotes(data).subscribe((result: any) => console.log(result))
  }
  }



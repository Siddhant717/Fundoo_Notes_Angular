import {  Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<any>();
  title:any;
  description:any;
  color:any;

  constructor( public dialogRef: MatDialogRef<UpdateNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private note:NoteService) { }

  ngOnInit(): void {
    console.log(this.data)
     this.title=this.data.title;
     this.description=this.data.description;
     this.color=this.data.color
  console.log(this.color)
  }
  onClose() {
    this.dialogRef.close();
    let data={
      title:this.title,
      description:this.description,
      color:this.color,
      isPin: false,
      isReminder: false,
      isArchieve: false,
      isTrash: false,
      reminder: "2022-09-28T07:16:08.706Z",
      NoteId: this.data.noteId
    }
    this.note.updateNotes(data).subscribe((result: any) => {
    console.log(result)
    this.messageEvent.emit(result)
  })
}
 
}



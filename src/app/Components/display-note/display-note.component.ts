import {  Input, OnInit } from '@angular/core';
import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';
import { NoteService } from 'src/app/services/noteService/note.service';


@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
@Input() childMessage: any;
  constructor(private dialog: MatDialog,private note:NoteService) { }

  ngOnInit(): void {
  }
  openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdateNoteComponent, {
      width: '500px',
      data: note,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });
  }

}

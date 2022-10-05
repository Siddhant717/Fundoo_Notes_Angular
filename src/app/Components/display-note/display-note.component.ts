import {  Component, Output,OnInit, EventEmitter,Input } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';



@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
@Input() childMessage: any;
@Output() messageEvent = new EventEmitter<any>();
  constructor(private dialog: MatDialog) { }

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
  receiveMessage(e:any) {
    console.log(e)
    this.messageEvent.emit(e)
}

}

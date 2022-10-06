import { Component, Output, OnInit, EventEmitter, Input } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ArchiveComponent } from '../archive/archive.component';
import { TrashComponent } from '../trash/trash.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() childMessage: any;
  @Output() messageEvent = new EventEmitter<any>();
 
  isArchieve:boolean=false
  isTrash:boolean=false
  constructor(private note: NoteService , private route: ActivatedRoute) { }

  ngOnInit(): void {
    let comp = this.route.snapshot.component;

  if(comp==ArchiveComponent){
    this.isArchieve=true
  }
  if(comp==TrashComponent){
    this.isTrash=true
  }
  }
  OnDelete() {
    console.log(this.childMessage)
    this.note.Trashnote(this.childMessage.noteId).subscribe((result: any) => {
      console.log(result)
      this.messageEvent.emit(result)
    })
  }
  Onarchive() {
    console.log(this.childMessage)
    this.note.ArchiveNote(this.childMessage.noteId).subscribe((result: any) => {
      console.log(result)
      this.messageEvent.emit(result)
    })
  }
  Unarchive(){
    console.log(this.childMessage)
    this.note.UnArchiveNote(this.childMessage.noteId).subscribe((result: any) => {
      console.log(result)
      this.messageEvent.emit(result)
    })


  }
  colorArray = [
    { code: '#ADFF2F', name: 'greenyellow' },
    { code: '#FFE4C4', name: 'Bisque' },
    { code: '#ffffff', name: 'white' },
    { code: '#D3D3D3', name: 'grey' },
    { code: '#FF6347', name: 'Tomato' },
    { code: '#C0C0C0', name: 'Silver' },
    { code: '#FF4500', name: 'OrangeRed' },
    { code: '#FFFF00', name: 'yellow' },
    { code: '#BC8F8F', name: 'RosyBrown' },
    { code: '#EEE8AA', name: 'PaleGoldenRod' },
    { code: '#7FFFD4', name: 'Aquamarine' },
    { code: '#B0C4DE', name: 'LightSteelBlue' }

  ];
  selectColor(colors: any) {
    console.log(colors)
    
    let Data = {
      NoteId: this.childMessage.noteId,
      color: colors
      
     }
     console.log(Data.NoteId)
    this.note.notesColor(Data).subscribe((response: any) => {
      console.log(response)
      this.messageEvent.emit(response)

    })
  }
  Delete() {
    console.log(this.childMessage)
    this.note.DeleteForever(this.childMessage.noteId).subscribe((result: any) => {
      console.log(result)
      this.messageEvent.emit(result)
    })
  }

}

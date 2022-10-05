import { Component, Output,OnInit, EventEmitter,Input } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';


@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() childMessage: any;
  @Output() messageEvent = new EventEmitter<any>();
  constructor(private note: NoteService) { }

  ngOnInit(): void {
  }
  OnDelete() {
    console.log(this.childMessage)
    this.note.Trashnote(this.childMessage.noteId).subscribe((result:any)=>{
    console.log(result)
    this.messageEvent.emit(result)
  })
}
  Onarchive(){
     console.log(this.childMessage)
     this.note.ArchiveNote(this.childMessage.noteId).subscribe((result:any)=>
     console.log(result))
   }
   colorArray= [
    { code: '#ffffff', name: 'white' },
    { code: '#FF6347', name: 'Tomato' },
    { code: '#FF4500', name: 'OrangeRed'},
    { code: '#FFFF00', name: 'yellow' },
    { code: '#ADFF2F', name: 'greenyellow' },
    { code: '#B0C4DE', name: 'LightSteelBlue' },
    { code: '#EEE8AA', name: 'PaleGoldenRod' },
    { code: '#7FFFD4', name: 'Aquamarine' },
    { code: '#FFE4C4', name: 'Bisque' },
    { code: '#C0C0C0', name: 'Silver' },
    { code: '#BC8F8F', name: 'RosyBrown' },
    { code: '#D3D3D3', name: 'grey' }
  ];
  selectColor(colors:any){
    console.log(colors)
    let Data = {
      NoteId : this.childMessage.noteId,
      color : colors
   
    }
    this.note.notesColor(Data).subscribe((response:any) =>{
      console.log(response)
      this.messageEvent.emit(response)
      
    })
  }
}

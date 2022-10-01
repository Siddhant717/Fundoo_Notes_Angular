import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() childMessage: any;
  constructor(private not: NoteService) { }

  ngOnInit(): void {
  }
  OnDelete() {
    console.log(this.childMessage)
    this.not.Trashnote(this.childMessage.noteId).subscribe((result:any)=>
    console.log(result))
  }
  Onarchive(){
     console.log(this.childMessage)
     this.not.ArchiveNote(this.childMessage.noteId).subscribe((result:any)=>
     console.log(result))
   }

}

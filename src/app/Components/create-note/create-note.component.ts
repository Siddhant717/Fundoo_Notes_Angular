import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
isshow=false;
title: any;
description: any;
  constructor(private note: NoteService) { }

  ngOnInit(): void {
  }

  show(){
    this.isshow=true;
  }
  close(){
    this.isshow=false;
    console.log(this.title, this.description)
    let data={
      title:this.title,
      description:this.description,
      color:'Blue'
    }
    this.note.addNotes(data).subscribe((result: any) => console.log(result))
  }
  }


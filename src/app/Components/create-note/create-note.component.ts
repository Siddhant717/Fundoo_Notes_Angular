import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
isshow=false;
title:any;
desc:any;
  constructor() { }

  ngOnInit(): void {
  }

  show(){
    this.isshow=true;
  }
  close(){
    this.isshow=false;
  }
}

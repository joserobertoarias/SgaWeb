import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-base',
  templateUrl: './dialog-base.component.html',
  styles: [
  ]
})
export class DialogBaseComponent implements OnInit {

  content: string = "";
  title: string = "";
  btnOk: string= "";
  btnCancel: string= "";

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.content = data.content; 
    this.title = data.title;
    this.btnOk = data.btnOk;
    this.btnCancel = data.btnCancel;  
  }

  ngOnInit(): void {
  }

}

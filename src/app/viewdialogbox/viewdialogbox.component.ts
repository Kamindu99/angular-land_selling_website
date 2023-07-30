import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-viewdialogbox',
  templateUrl: './viewdialogbox.component.html',
  styleUrls: ['./viewdialogbox.component.css']
})
export class ViewdialogboxComponent implements OnInit {
    empForm: any;
  
    constructor( @Inject(MAT_DIALOG_DATA) public data: any) {}
    
    ngOnInit(): void {
      this.empForm = this.data;
    }
}

import { Component, OnInit } from '@angular/core';
import { BooknowComponent } from '../booknow/booknow.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  constructor(public dialog: MatDialog) {}

  openDialog(){
    const dialogRef = this.dialog.open(BooknowComponent,{
      width: '80rem'
    });
  
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifestyle',
  templateUrl: './lifestyle.component.html',
  styleUrls: ['./lifestyle.component.css']
})
export class LifestyleComponent  {
  show1:boolean=false
  show2:boolean=false
  show3:boolean=false
  show4:boolean=false
  constructor() { }
  toogleTag()
  {
    this.show1=!this.show1
    this.show2=false
    this.show3=false
    this.show4=false
  }
  toogleTag2()
  {
    this.show2=!this.show2
    this.show1=false
    this.show3=false
    this.show4=false
  }
  toogleTag3()
  {
    this.show3=!this.show3
    this.show2=false
    this.show1=false
    this.show4=false
  }
  toogleTag4()
  {
    this.show4=!this.show4
    this.show2=false
    this.show3=false
    this.show1=false
  }
}

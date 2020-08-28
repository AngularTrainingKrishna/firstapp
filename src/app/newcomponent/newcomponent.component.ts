import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-newcomponent',
  templateUrl: './newcomponent.component.html',
  styleUrls: ['./newcomponent.component.css']
})
export class NewcomponentComponent implements OnInit {
@Input('name') nameFromParent:string;
@Output() newItemEvent = new EventEmitter<string>();
numberC = 12345.6;
dateC=new Date();
  constructor() { }

  ngOnInit(): void {
  }

  TriggerChangeFromChild(value:string){
    this.newItemEvent.emit(value);
    console.log(value);
  }

}

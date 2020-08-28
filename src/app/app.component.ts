import { Component } from '@angular/core';
import {item} from './models/item';

@Component({
  selector: 'approot',
  templateUrl: './app.component.html',
  //template: `<div>{{title}}</div>`,
  styleUrls: ['./app.component.css']
  //styles: ['h1 { font-weight: normal; }']
})
export class AppComponent {
  title = 'firstapp test krishna';
numberC =123;
numberd = 1.324;
  dateC = new Date();
  testText='';

  //valueToChild='Hi, User';
//displayADom = false;
  // changeValue(value:string){
  //   this.valueToChild = value;
  //   console.log(value);
  // }
  
   items: item[] = [{name: 'One', val: 1}, {name: 'Two', val: 2}, {name: 'Three', val: 3}];  
  //   selectedValue: string= 'One';  

  // people: any[] = [
  //   {
  //     "name": "Douglas  Pace",
  //     "country": 'UK'
  //   },
  //   {
  //     "name": "Mcleod  Mueller",
  //     "country": 'USA'
  //   },
  //   {
  //     "name": "Day  Meyers",
  //     "country": 'HK'
  //   },
  //   {
  //     "name": "Aguirre  Ellis",
  //     "country": 'UK'
  //   },
  //   {
  //     "name": "Cook  Tyson",
  //     "country": 'USA'
  //   }
  // ];
filteredStatus = '';
  servers: any[]=[
    {
      "name": "server1",
      "status": "stable",
      "instanceType": "medium",
      "started":"9,8,2017"
    },
    {
      "name": "server2",
      "status": "offline",
      "instanceType": "small",
      "started":"4,11,2018"
    },
    {
      "name": "server3",
      "status": "stable",
      "instanceType": "large",
      "started":"10,8,2017"
    },
    {
      "name": "server4",
      "status": "offline",
      "instanceType": "medium",
      "started":"9,9,2017"
    }
  ]
  
}

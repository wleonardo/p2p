import { Component, 
	ViewEncapsulation,
	trigger,state,
  style,
  transition,
  animate 
} from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'my-app',
  templateUrl: 'page/index/index.component.html',
  styleUrls: ['page/index/index.scss'],
  encapsulation: ViewEncapsulation.None,
   animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'rotateX(70deg)'}),
        animate(500)
      ]),
      transition('* => void', [
        animate(1000, style({transform: 'rotateX(0)'}))
      ])
    ])
  ]
}) 
export class IndexComponent { 
	result = [];
	keyword = '';
  constructor(public http : Http) {
    this.http = http;
  }
	onClickMe() {
    this.search();
  }
  search() {
  	let number = parseInt(this.keyword, 10);
  	this.result = [];
    this.getData();
  }
  getData() {
    return this.http.post('http://localhost:3000/getData',JSON.stringify({
      keyword:this.keyword
    }))
    .subscribe(data => console.log(this.result = JSON.parse(data['_body']).data));;
  }
}
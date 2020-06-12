import { Component } from '@angular/core';
import {Quote} from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:string[];
  constructor(){
    this.quotes=['The pessimist sees difficuly in every opportunity','Dont let yesterday take up too much today','You learn more from failure than from success']
  }
}

import { Component } from '@angular/core';
import {Quote} from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[]=[
    {id:1, name:'The pessimist sees difficuly in every opportunity'},
    {id:2, name:'Dont let yesterday take up too much today'},
    {id:3, name:'You learn more from failure than from success'},
  ];
}

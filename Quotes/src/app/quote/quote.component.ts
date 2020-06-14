import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    new Quote(1,'The pessimist sees difficuly in every opportunity','terrible'),
    new Quote(2,'Dont let yesterday take up too much today','inspirational'),
    new Quote(3,'You learn more from failure than from success','terrible'),
  ];
    toggleDetails(index){
      this.quotes[index].showDescription= !this.quotes[index].showDescription;
    }
  constructor() { }

  ngOnInit() {
  }

}

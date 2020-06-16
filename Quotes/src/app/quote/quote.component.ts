import { Component, OnInit, Input, Output } from '@angular/core';
import { Quote } from '../quote';
import { EventEmitter } from 'protractor';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    new Quote(1,'The pessimist sees difficuly in every opportunity','terrible',new Date(2020,3,14)),
    new Quote(2,'Dont let yesterday take up too much today','inspirational',new Date(2019,6,9)),
    new Quote(3,'You learn more from failure than from success','terrible',new Date(2022,1,12)),
  ];
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm (`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
     }
    }
    toggleDetails(index){
      this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  addNewGoal(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.complete)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit() {
  }

}

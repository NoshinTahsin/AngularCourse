import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  @Input('is-favourite') isFavourite : boolean;
  @Output() change=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick($event){
    this.isFavourite=!this.isFavourite;
    this.change.emit(this.isFavourite);

  }
 

}

import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FavouriteComponent implements OnInit {
  @Input('is-fav') isFavourite : boolean;
  @Output() change = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isFavourite=!this.isFavourite;
    console.log("Clickeddddddddddddddddd"); 
    this.change.emit({newValue: this.isFavourite}); 
  }
 
}

export interface FavouriteChangedEventArgs{
  newValue:boolean
}


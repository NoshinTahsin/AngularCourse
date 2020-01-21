import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  post={
    title: 'Title',
    isFavourite: true
  }

  onFavouriteChanged(isFavourite){
    console.log("Favourite changed "+isFavourite);
  }
}
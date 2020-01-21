import { Component } from '@angular/core';
import {FavouriteChangedEventArgs} from './favourite/favourite.component';

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

  onFavouriteChanged(eventArgs: FavouriteChangedEventArgs){
    console.log("Favourite : ",eventArgs);
  }

  courses;

  viewmode='map';

  onAdd(){
    this.courses.push({id:4, name:"course 4"});
  }

  onRemove(course){
    let index=this.courses.indexOf(course);
    this.courses.splice(index,1);

  }

  loadCourses(){
    this.courses=[
      {id:1, name:"course 1"},
      {id:2, name:"course 2"},
      {id:3, name:"course 3"},
    ];
  }

  trackCourse(index, course){
    return course?course.id:undefined;
  }








}

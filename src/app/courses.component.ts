import { SummaryPipe } from './summary.pipe';
import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    templateUrl: './courses.component.html',
    
        
})
export class CoursesComponent{

    title="Courses list here";
    courses;
    isActive=false;
    email2="saaj@gmail.com";

    course={
        name: "The complete angular course",
        rating: 4.9898,
        students:"3457678",
        price: 12.345,
        release_date: new Date(2020, 1, 20)
    }

    longText=`
    Our dear Cafe's owner, JOE Miller, will soon take part in a new game TV-show "1 vs. n"!

    The game goes in rounds, where in each round the host asks JOE and his opponents a common question. All participants failing to answer are eliminated. The show ends when only JOE remains (we assume that JOE never answers a question wrong!).
    
    For each question JOE answers, if there are s (s>0) opponents remaining and t (0≤t≤s) of them make a mistake on it, JOE receives ts dollars, and consequently there will be s−t opponents left for the next question.
    
    JOE wonders what is the maximum possible reward he can receive in the best possible scenario. Yet he has little time before show starts, so can you help him answering it instead?
    `;

    constructor(service:CoursesService){
        //let service = new CoursesService();
        this.courses=service.getCourses();
    }

    getTitle(){
        return this.title;
    }

    onSave($event){
        $event.stopPropagation(); //stop event bubbling
        console.log("Button clicked, ", $event);
    }

    onDivClick(){
        console.log("Div clicked");
    }

    onKeyUp(email){
        console.log("Enter clicked"); //event filtering
        console.log("template var: "+ email);
    }

    onKeyUp2( ){
    
        console.log("two-way binding test : "+ this.email2);
    }

}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactMethods=[
    {id:1, name:"email"},
    {id:2, name:'phone'}
  ];

  constructor() { }

  ngOnInit() {
  }

  log(x){
    console.log(x);
  }

  submit(y){
    console.log(y);
  }

}

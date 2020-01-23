import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postArr; 
  private url='https://jsonplaceholder.typicode.com/posts';
  constructor(private http:HttpClient) { 
    http.get(this.url)
    .subscribe(response=>{
      this.postArr=response;
    });
  }

  ngOnInit() {
  }

  createPost(input: HTMLInputElement){
    let post= {title: input.value};

    this.http.post(this.url, JSON.stringify(post))
      .subscribe(response=>{
        post['id']=response;
        this.postArr.splice(0,0,post);
        console.log(response)
    });
  
  }

  updatePost(post){

    this.http.put(this.url + '/'+post.id, JSON.stringify(post))
      .subscribe(response=>{
          console.log(response);

      })

  }

  deletePost(post){

    this.http.delete(this.url + '/'+post.id)
      .subscribe(response=>{
          let index=this.postArr.findIndex(p=> p.id === post.id);
          this.postArr.splice(index,1);
          console.log(response);

      })

  }

}

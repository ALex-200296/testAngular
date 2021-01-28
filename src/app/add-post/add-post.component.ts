import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService, Post } from '../app-service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  title: string = ''
  text: string = ''
  id: string = `${(Math.round(Math.random() * (100000000000 - 100) + 100))}`
  error: boolean = false

  constructor(
    public AppService: AppService,
    private router: Router
    ) { }

  ngOnInit(): void {
    console.log(this.id)
  }

  addPost() {
    if(this.title.trim() && this.text.trim()) {
      this.AppService.addPosts({title: this.title, text: this.text, id: this.id })
      this.router.navigate(['/'])
    }else {
      this.error = true
      setTimeout( () => {
        this.error = false
      }, 3000)
    }
  }
}

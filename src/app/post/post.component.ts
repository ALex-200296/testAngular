import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AppService, Post } from '../app-service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post: Post

  constructor(
    public AppService: AppService, // Глобальный сервис
    private route: ActivatedRoute, // забираем параметр
    private router: Router // Навигация
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
        this.post = this.AppService.getPostById(params.id)!
        console.log(this.post)
    })
  }

  updatePost() {
      this.AppService.updatePosts(this.post)
      this.router.navigate(['/'])
  }

  resetPost() {
    const bol: boolean = confirm('Вы уверены?')
    if(bol) {
      this.AppService.resetPost(this.post.id)
      this.router.navigate(['/'])
    }
  }

}

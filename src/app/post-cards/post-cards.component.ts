import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app-service';

@Component({
  selector: 'app-post-cards',
  templateUrl: './post-cards.component.html',
  styleUrls: ['./post-cards.component.scss']
})
export class PostCardsComponent implements OnInit {

  constructor(
    public AppService: AppService, //Глобальный сервис
    private router: Router
    ) {

     }

  ngOnInit(): void {
  }
  addPostPage() {
    this.router.navigate(['/addpost'])
  }

}

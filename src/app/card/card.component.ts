import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../app-service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() post: Post

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  pushPost() {
    this.router.navigate(['/post', this.post.id])
  }

}

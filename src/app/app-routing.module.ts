import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { CardComponent } from './card/card.component';
import { ErrorComponent } from './error/error.component';
import { PostCardsComponent } from './post-cards/post-cards.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {path: '', component: PostCardsComponent},
  {path: 'post', component: PostComponent},
  {path: 'post/:id', component: PostComponent},
  {path: 'addpost', component: AddPostComponent},
  {path: 'error', component: ErrorComponent},
  {path: '**', redirectTo: '/error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

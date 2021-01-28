import { Injectable } from "@angular/core";

export interface Post {
  title: string
  text: string
  id: string
}

@Injectable({providedIn: 'root'})
export class AppService {
  posts: Post[] = [
    {
      title: 'AngularTest',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, veritatis!',
      id: '1'
    },
    {
      title: 'VueTest',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, veritatis!',
      id: '2'
    },
    {
      title: 'ReactTest',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, veritatis!',
      id: '3'
    },
  ]

  getPostById(id: string) {
    return this.posts.find( obj => obj.id === id)
  }

  addPosts(post: Post) {
    if(post) {
      this.posts.push(post)
    }
  }

  resetPost(id: string) {
    this.posts = this.posts.filter((post) => post.id !== id)
  }

  updatePosts(savePost: Post) {
    this.posts = this.posts.map(( post ) => {
      if(post.id === savePost.id) {
        return {
          ...post,
          savePost
        }
      }
      return {
        ...post
      }
    })
  }
}

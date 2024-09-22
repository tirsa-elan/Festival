import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reserve } from './reserve';

@Injectable({
  providedIn: 'root'
})
export class ReserveService {

  constructor(private https: HttpClient) { }

  get() {
    return this.https.get('http://localhost:3000/posts')
  }

  post(post: Reserve) {
    return this.https.post('http://localhost:3000/posts', post)
  }

  update(post: Reserve) {
    return this.https.put('http://localhost:3000/posts/' + post.id, post)
  }

  delete(id: string | undefined) {
    return this.https.delete("http://localhost:3000/posts/" + id)
  }


}

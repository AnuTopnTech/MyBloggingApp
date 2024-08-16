import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Blog } from '../interface/blog';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  http = inject(HttpClient)

  constructor() { }
  getFeaturedBlogs() {
    return this.http.get<Blog[]>(environment.apiUrl+"/api/Blog/featured");
  }
  getAllBlogs() {
    return this.http.get<Blog[]>(environment.apiUrl+"/api/Blog");
  }
  getBlogById(id: number) {
    return this.http.get<Blog>(environment.apiUrl+"/api/Blog/" + id);
  }
  deleteBlog(id: number) {

    return this.http.delete(environment.apiUrl + "/api/Blog/" + id);
  }
  addBlog(blog: Blog) {
    return this.http.post(environment.apiUrl + "/api/Blog", blog);
  }
  updateBlog(id: number, blog: Blog) {
    return this.http.put(environment.apiUrl + "/api/Blog/" + id, blog);
  }
}

import { Component, inject } from '@angular/core';
import { Blog } from '../../interface/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {
  allBlog!: Blog[];
  blogService = inject(BlogService);

  ngOnInit() {

    this.blogService.getAllBlogs().subscribe(result => { this.allBlog = result; })
  }
}

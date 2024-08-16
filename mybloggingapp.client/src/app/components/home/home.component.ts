import { Component, Input, inject, input } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../interface/blog';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  blogService = inject(BlogService);
  featuredBlogs!: Blog[];
  

  ngOnInit() {
    this.blogService.getFeaturedBlogs().subscribe(result => {
      this.featuredBlogs = result;
      console.log(this.featuredBlogs);
    })
    
  }
  
}

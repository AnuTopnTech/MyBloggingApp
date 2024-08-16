import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogComponent } from './components/blog/blog.component';
import { AboutComponent } from './components/about/about.component';
import { ManageBlogsComponent } from './admin/manage-blogs/manage-blogs.component';
import { BlogFormComponent } from './admin/blog-form/blog-form.component';
import { LoginComponent } from './admin/login/login.component';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "blogs", component: BlogsComponent
  },
  {
    path: "blog/:id", component: BlogComponent
  },
  {
    path: "about", component: AboutComponent
  },
  {
    path: "admin/blogs", component: ManageBlogsComponent,
    canActivate: [authGuard]

  },
  {
    path: "admin/blog/create", component: BlogFormComponent,
    canActivate: [authGuard]
  },
  {
    path: "admin/blog/update/:id", component: BlogFormComponent,
    canActivate: [authGuard]
  },
  {
    path: "login", component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

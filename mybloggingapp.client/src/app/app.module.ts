import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogComponent } from './components/blog/blog.component';
import { AboutComponent } from './components/about/about.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterLink, provideRouter } from '@angular/router';
import { MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ManageBlogsComponent } from './admin/manage-blogs/manage-blogs.component';
import { BlogFormComponent } from './admin/blog-form/blog-form.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { LoginComponent } from './admin/login/login.component';
import { FormsModule } from '@angular/forms';
import { tokenHttpInterceptor } from '../../tokenHttpInterceptor';


@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BlogsComponent,
    BlogComponent,
    AboutComponent,
    ManageBlogsComponent,
    BlogFormComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, MatToolbarModule,
    MatButtonModule, MatCardModule,
    RouterLink, MatTableModule,
    MatFormFieldModule, MatInputModule,
    MatPaginatorModule, MatSortModule,
    ReactiveFormsModule, MatCheckboxModule,
    MatSelectModule, FormsModule
  ],
  
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([tokenHttpInterceptor]))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

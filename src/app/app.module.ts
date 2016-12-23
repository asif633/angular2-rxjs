import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgSemanticModule } from 'ng-semantic';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from "./home.component";
import { YoutubeSearchComponent } from './youtubesearch/youtubesearch.component';
import { GithubSearchComponent } from './githubsearch/githubsearch.component';
import { GithubSearchOptimizedComponent } from './githubsearch/githubsearchoptimized.component';
import { UserComponent } from './githubsearch/user.component';
import { RepoComponent } from './githubsearch/repo.component';
import { GithubService } from './githubsearch/github.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    YoutubeSearchComponent,
    RepoComponent,
    UserComponent,
    GithubSearchComponent,
    GithubSearchOptimizedComponent 
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    NgSemanticModule,
    routing
  ],
  providers: [GithubService],
  bootstrap: [HomeComponent],
  schemas:   [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

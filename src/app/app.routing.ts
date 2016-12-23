import { RouterModule, Routes } from '@angular/router';

import { GithubSearchComponent } from './githubsearch/githubsearch.component';
import { GithubSearchOptimizedComponent } from './githubsearch/githubsearchoptimized.component';
import { YoutubeSearchComponent } from './youtubesearch/youtubesearch.component';
import { AppComponent } from './app.component';


const APP_ROUTES: Routes = [
  {path: 'youtube-search', component: YoutubeSearchComponent},
  {path: 'github-search-simple', component: GithubSearchComponent},
  {path: 'github-search-optimized', component: GithubSearchOptimizedComponent},
  {path: '', component: AppComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
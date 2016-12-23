import { Component, OnInit } from '@angular/core';

import { GithubService } from './github.service';

@Component({
    moduleId: module.id.toString(),
    selector: 'github-search-simple',
    templateUrl: 'githubsearch.component.html'
})
export class GithubSearchComponent implements OnInit {
    user:any;
    repos:any[];
    username: string;

    constructor(private _githubservice: GithubService) { 
        this.user = false;
     }

    searchUser(){
        
        this._githubservice.updateUser(this.username);
        
        this._githubservice.getUser(this.username).subscribe(user => {
            this.user = user;
        });
        
        this._githubservice.getRepos(this.username).subscribe(repos => {
            this.repos = repos;
        });
    }

    ngOnInit() { 
     
    }
}
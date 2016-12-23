import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { GithubService } from './github.service';


@Component({
    moduleId: module.id.toString(),
    selector: 'github-search-optimized',
    templateUrl: 'githubsearchoptimized.component.html'
})
export class GithubSearchOptimizedComponent implements OnInit {
    
   // user:any;
   // repos:any[];
    searchForm: any;
    results$: Observable<any>; 
     term = new FormControl();

    constructor(private _formBuilder: FormBuilder) { 
     //   this.user = false;
       
        this.results$ = this.term.valueChanges // <- Observable Form
            .map(search => console.log(search));
                //  .debounceTime(400)
                //  .distinctUntilChanged()
                //  .switchMap(term => this.githubserv.getUser(term));
    }

    ngOnInit() { 
        
        

       
        
        // this.githubserv.getRepos(this.user).subscribe(repos => {
        //     this.repos = repos;
        // });
    }
}
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Http} from '@angular/http';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
    moduleId: 'module.id',
    selector: 'youtube-search',
    templateUrl: 'youtubesearch.component.html'
})
export class YoutubeSearchComponent implements OnInit {
    
    searchForm: any;
    results$: Observable<any>;

    constructor(private _formBuilder: FormBuilder, private _http: Http) {

        this.searchForm = this._formBuilder.group({
            'search': ['', Validators.required]
        });

           const API_URL = 'https://www.googleapis.com/youtube/v3/search';
        const API_KEY = 'AIzaSyD9tetV3JOLIAiXOdRUJDAt2cAMpQmJGn0';
        const API_SECRET = '48ae0b9c2e78bff984db28a403697e8317879152'; 
        this.results$ = this.searchForm.controls.search.valueChanges // <- Observable Form
            // .subscribe(value => console.log(value));
             .debounceTime(500)
             .switchMap(query => this._http.get(`${API_URL}?q=${query}&key=${API_KEY}&part=snippet`))  // <-- Observable Http
             .map(res => res.json())
             .map(res => res.items);
            // .map(res => console.log(res));
    
    }

    
    ngOnInit() {}
             
}
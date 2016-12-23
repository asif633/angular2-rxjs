import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id.toString(),
    selector: 'repo-search',
    templateUrl: 'repo.component.html'
})
export class RepoComponent implements OnInit {
    
    @Input() repos: any[];
    
    constructor() { }

    ngOnInit() { }
}
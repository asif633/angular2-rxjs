import { Component, OnInit, Input } from '@angular/core';

import { Dimmers } from '../utils/dimmer';

@Component({
    moduleId: module.id.toString(),
    selector: 'user-search',
    templateUrl: 'user.component.html'
})
export class UserComponent implements OnInit {
    
    @Input() user: any;

    constructor() { }

    dimOnHover(){
         let dimmer = new Dimmers();
         dimmer.dimOnHover('.special.cards .image');
    }

    ngOnInit() {       
    }
}
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GithubService {

    private username: string;
    private client_id = '0f0e359cf8157b35036a';
    private client_secret = '48ae0b9c2e78bff984db28a403697e8317879152';

    constructor(private _http:Http) {
        this.username = 'asif633';
     }

     getUser(username:string){
        return this._http.get('http://api.github.com/users/'+username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }
    
    getRepos(username:string){
        return this._http.get('http://api.github.com/users/'+username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }
    
    updateUser(username:string){
        this.username = username;
        return this.username;
    }

}
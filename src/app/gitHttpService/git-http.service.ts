import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'
import { resolve, reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class GitHttpService {
  
  constructor(private http:HttpClient) { }
  
//helps in searching for a user name only.
  searchGit(searchSome:string){
    let searchUser="https://api.github.com/users/"+searchSome+"?access_token="+environment.apiUrl;

    let promise = new Promise((resolve, reject)=>{
      this.http.get(searchUser).toPromise().then(
        (results)=>{
          console.log(results);
          resolve()
        },(error)=>{
          console.log(error)
          reject()        
        }
      )
    })
    return promise;
  }
  
}

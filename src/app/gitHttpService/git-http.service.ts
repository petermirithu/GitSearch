import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'
import {User} from '../user';
import {Repository} from '../repository';
import { resolve } from 'path';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class GitHttpService {

  user:User;
  repositories:Repository[]=[];

  constructor(private http:HttpClient) { 
    this.user = new User("","","",0,new Date(),0,"");
  }
  
  
//helps in searching for a user name only.
  searchGit(searchSome:string){
    interface ApiResponse{
      login:string;
      avatar_url:string;
      location:string;
      public_repos:number;
      created_at:Date;
      followers:number;
      bio:string;
    }
    //link with input as searchSome
    let searchUser="https://api.github.com/users/"+searchSome+"?access_token="+environment.apiUrl;
    //promise
    let promise = new Promise((resolve, reject)=>{
      this.http.get<ApiResponse>(searchUser).toPromise().then(
        (results)=>{
          this.user =results;

          resolve()
        },(error)=>{
          console.log(error)
          reject()        
        }
      )
    })
    return promise;
  }
  getRepos(searchSome){
    interface ApiResponse{
      name:string;
      createdOn:Date;
      description:string;
      html_url:string;
    }
    let searchrepos="https://api.github.com/users/"+searchSome+"?access_token="+environment.apiUrl;
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse[]>(searchrepos).toPromise().then(
        (gitreposresults)=>{
          this.repositories =[];


          // for (let i =0;i < gitreposresults.length;i++){
            gitreposresults.forEach(myfunc);
            function myfunc(index){
            let repository =new Repository(gitreposresults[index].name,gitreposresults[index].createdOn,gitreposresults[index].description,gitreposresults[index].html_url);
            //pushing new repo results in repository property
            this.repositories.push(repository);
          }
          resolve()
        },
        (error)=>{
          reject();
        }
      );
    });
    return promise;
  }
  
}

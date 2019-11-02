import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'
import {User} from '../user';
import {Repository} from '../repository';


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
          alert("User Name Cannot be found")
          reject()        
        }
      )
    })
    return promise;
  }
//function receiving event and getting data from the url
  getRepos(searchSome){
    interface ApiResponse{
      name:string;      
      html_url:string;
      description:string;
      created_at:Date;
      updated_at:Date;
      pushed_at:Date;
    }

    let searchrepos="https://api.github.com/users/"+searchSome+"/repos?access_token="+environment.apiUrl;
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse[]>(searchrepos).toPromise().then(
        (gitreposresults)=>{

          this.repositories =[];

           for (let index =0;index < gitreposresults.length;index++){
            let repository =new Repository(gitreposresults[index].name,gitreposresults[index].html_url,gitreposresults[index].description,gitreposresults[index].created_at,gitreposresults[index].updated_at,gitreposresults[index].updated_at);
            //pushing new repo results in repository property
            this.repositories.push(repository);            
          }
          resolve()
        },
        (error)=>{
          alert("Repositories Cannot be found")
          reject();
        }
      );
    });
    return promise;
  }
  
}

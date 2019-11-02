import { Component, OnInit } from '@angular/core';
import {GitHttpService} from "../gitHttpService/git-http.service";
import{User} from '../user';
import {Repository} from '../repository';


@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {

  gitUsers: User;
  repositories:Repository[]=[];

  constructor(public gitHttpService:GitHttpService) { }

  ngOnInit() {
    this.searchGit("petermirithu")
    this.repoSearch("petermirithu")
  }
  //searching for users
  searchGit(searchSome){
  this.gitHttpService.searchGit(searchSome).then(
    (success)=>{
      this.gitUsers=this.gitHttpService.user;
    },
    (error)=>{
      console.log (error)
    }
  );
  }

 //searching for repositories
  repoSearch(searchSome){
    this.gitHttpService.getRepos(searchSome).then(
      (success)=>{      
        this.repositories=this.gitHttpService.repositories
        console.log(this.repositories)
        
      },
      (error)=>{
        console.log(error)
      }
    );
  }

  
}

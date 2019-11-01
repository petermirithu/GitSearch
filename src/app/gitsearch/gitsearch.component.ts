import { Component, OnInit } from '@angular/core';
import {GitHttpService} from "../gitHttpService/git-http.service";
import{User} from '../user';

@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {

  gitUsers: User;

  constructor(public gitHttpService:GitHttpService) { }

  ngOnInit() {
    this.searchGit("petermirithu")
  }

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


}

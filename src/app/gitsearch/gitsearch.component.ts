import { Component, OnInit } from '@angular/core';
import {GitHttpService} from "../gitHttpService/git-http.service";

@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {

  constructor(public gitHttpService:GitHttpService) { }

  ngOnInit() {
  }

  searchGit(searchSome){
  this.gitHttpService.searchGit(searchSome)
  }


}

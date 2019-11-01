import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-git-form',
  templateUrl: './git-form.component.html',
  styleUrls: ['./git-form.component.css']
})
export class GitFormComponent implements OnInit {

  searchSome:string
  @Output() issearch= new EventEmitter<any>()

  @Output() isrepossearch = new EventEmitter<any>()

  search(){    
    this.issearch.emit(this.searchSome);
  }

  reposSearch(){
    this.isrepossearch.emit(this.searchSome);
  }
  constructor() { }

  ngOnInit() {
  }

}

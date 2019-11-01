import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GitHttpService {


  searchGit(searchSome:string){
  console.log(searchSome)
  }
  
  constructor() { }
}

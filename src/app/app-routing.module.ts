import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GitHomeComponent} from './git-home/git-home.component';
import {GitsearchComponent} from './gitsearch/gitsearch.component';
import {ReposHereComponent} from './repos-here/repos-here.component';
import {NotFoundComponent} from './not-found/not-found.component';


const routes: Routes = [
  { path:'home', component: GitHomeComponent},
  { path:'search', component:GitsearchComponent},
  { path:'repos',component:ReposHereComponent},
  { path: '',redirectTo:"/home",pathMatch:"full"},
  { path: '**',component:NotFoundComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

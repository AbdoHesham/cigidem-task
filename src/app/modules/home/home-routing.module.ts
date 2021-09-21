import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LikeAndDislikeComponent } from './components/like-and-dislike/like-and-dislike.component';
import { TodolistComponent } from './components/todolist/todolist.component';

const routes: Routes = [
  { path: '', redirectTo:'home',pathMatch:'full' },

  { path: 'home', component: HomeComponent },
    { path: 'likedislike', component: LikeAndDislikeComponent },
  { path: 'todolist', component: TodolistComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

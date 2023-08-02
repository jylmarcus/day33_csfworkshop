import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './todo/home/home.component';
import { EditComponent } from './todo/edit/edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'todo/home', pathMatch:'full' },
  { path: 'todo/home', component: HomeComponent },
  { path: 'todo/edit', component: EditComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UploadComponent } from './upload/upload.component';
import { ViewGroupComponent } from './view-group/view-group.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'view', component: ViewComponent},
  {path: 'view/group', component: ViewGroupComponent},
  {path: 'view/user', component: ViewUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

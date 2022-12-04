import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UploadComponent } from './upload/upload.component';
import { ViewAllGroupComponent } from './view-allgroup/view-allgroup.component';
import { ViewAllUserComponent } from './view-alluser/view-alluser.component';
import { ViewGroupComponent } from './view-group/view-group.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'view', component: ViewComponent},
  { path: 'view/group', component: ViewAllGroupComponent},
  { path: 'view/user', component: ViewAllUserComponent},
  { path: 'view/user/:id', component: ViewUserComponent},
  { path: 'view/group/:id', component: ViewGroupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

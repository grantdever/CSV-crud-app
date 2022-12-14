import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UploadComponent } from './upload/upload.component';
import { ViewComponent } from './view/view.component';
import { ViewGroupComponent } from './view-group/view-group.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewAllUserComponent } from './view-alluser/view-alluser.component';
import { ViewAllGroupComponent } from './view-allgroup/view-allgroup.component';
import { NgxCsvParserModule } from 'ngx-csv-parser';
import { UploadGroupComponent } from './upload-group/upload-group.component';
import { UploadUserComponent } from './upload-user/upload-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UploadComponent,
    ViewComponent,
    ViewGroupComponent,
    ViewUserComponent,
    ViewAllUserComponent,
    ViewAllGroupComponent,
    UploadGroupComponent,
    UploadUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgxCsvParserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

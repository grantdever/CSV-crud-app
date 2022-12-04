import { Component, OnInit } from '@angular/core';
import { ViewAllUserService } from './view-alluser.service';

@Component({
  selector: 'app-view-alluser',
  templateUrl: './view-alluser.component.html',
  styleUrls: ['./view-alluser.component.css']
})
export class ViewAllUserComponent implements OnInit {

  users$: any;

  constructor(private viewAllUserService: ViewAllUserService) { }

  ngOnInit(): void {
    this.viewAllUserService.getUsers().subscribe((data) => {
      this.users$ = data;
    })
  }

  linkToGroup(id: string){
    let mainLink = 'http://localhost:4200/view/group/';
    window.open(mainLink+id);
  }

  linkToUser(id: string){
    let mainLink = 'http://localhost:4200/view/user/';
    window.open(mainLink+id);
  }

}

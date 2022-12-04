import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewUserService } from './view-user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  user: any;
  userNumber: any;

  constructor( private route: ActivatedRoute, private viewUserService: ViewUserService ) {}

  ngOnInit(): void {
    this.userNumber =  this.route.snapshot.params['id'];
    this.viewUserService.getUser(this.userNumber).subscribe((data) => {
      this.user = data;
    })
  }
  linkToGroup(id: string) {
    let mainLink = 'http://localhost:4200/view/group/';
    window.open(mainLink+id);
  }
}

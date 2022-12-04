import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewGroupService } from './view-group.service';

@Component({
  selector: 'app-view-group',
  templateUrl: './view-group.component.html',
  styleUrls: ['./view-group.component.css']
})
export class ViewGroupComponent implements OnInit {
  group: any;
  groupNumber: any;

  constructor(private route: ActivatedRoute, private viewGroupService: ViewGroupService ) { }

  ngOnInit(): void {
    this.groupNumber = this.route.snapshot.params['id'];
    (this.viewGroupService.getGroup(this.groupNumber)).subscribe((data) => {
      this.group = data;
    })
  }

  linkToUser(id: string){
    let mainLink = 'http://localhost:4200/view/user/';
    window.open(mainLink+id);
  }
}

import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ViewAllGroupService } from './view-allgroup.service';

@Component({
  selector: 'app-view-allgroup',
  templateUrl: './view-allgroup.component.html',
  styleUrls: ['./view-allgroup.component.css']
})
export class ViewAllGroupComponent implements OnInit {

  groups$: any;

  constructor(private viewAllGroupService: ViewAllGroupService) { }

  ngOnInit(): void {
    this.viewAllGroupService.getGroups().subscribe((data) => {
      this.groups$ = data;
    })

  }

  linkToGroup(id: string) {
    let mainLink = 'http://localhost:4200/view/group/';
    window.open(mainLink+id);
  }

}

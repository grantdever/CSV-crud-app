import { Component, OnInit } from '@angular/core';
import { ViewService } from './view.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  users$: any;

  constructor(private viewService: ViewService ) {}

  ngOnInit(): void {
    this.viewService.getUsers().subscribe((users) => {
      this.users$ = users;
    })
  }

}

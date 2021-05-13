import { Component, OnInit } from '@angular/core';
// Receive Parameter
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {

  data: any;
  folder: string

  constructor(public route: ActivatedRoute,private router: Router) {
    this.data = this.router.getCurrentNavigation().extras.state.goToMembers.queryParams.data;
    this.folder = this.router.getCurrentNavigation().extras.state.goToMembers.queryParams.folder
    }

  ngOnInit() {
    //console.log(this.data);
  }



}

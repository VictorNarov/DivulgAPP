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

  constructor(public route: ActivatedRoute,private router: Router) {
    this.data = this.router.getCurrentNavigation().extras.state.goToMembers.queryParams.data;
    }

  ngOnInit() {
    //console.log(this.data);
  }



}

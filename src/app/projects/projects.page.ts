import { Component, OnInit, ViewChild } from '@angular/core';
// Receive Parameter
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {
  
  data: any;

  constructor(public route: ActivatedRoute,private router: Router) {
    this.data = this.router.getCurrentNavigation().extras.state.goToMembers.queryParams.data;
   }

  ngOnInit() {

  }

  visibility(id){
    if(document.getElementById(id).style.visibility == "hidden"){
      document.getElementById(id).style.visibility="visible";
      document.getElementById(id).style.position="static";
      document.getElementById(id+"-hr").style.visibility="visible";
      document.getElementById(id+"-hr").style.position="static";
    }else{
      document.getElementById(id).style.visibility="hidden";
      document.getElementById(id).style.position="absolute";
      document.getElementById(id+"-hr").style.visibility="hidden";
      document.getElementById(id+"-hr").style.position="absolute";
    }
  }



}

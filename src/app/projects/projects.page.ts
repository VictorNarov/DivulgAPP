import { Component, OnInit, SecurityContext, ViewChild,Pipe, PipeTransform } from '@angular/core';
// Receive Parameter
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})

@Pipe({ name: 'safe' })

export class ProjectsPage implements OnInit {
  
  data: any
  folder: string
  url: string = "http://www.divulgapp.tk"

  constructor(public route: ActivatedRoute,private router: Router,public sanitizer: DomSanitizer) {
    this.data = this.router.getCurrentNavigation().extras.state.goToMembers.queryParams.data;
    this.folder = this.router.getCurrentNavigation().extras.state.goToMembers.queryParams.folder
   }

  ngOnInit() {

  }

  visibility(id){
    if(document.getElementById(id).style.visibility == "hidden"){
      document.getElementById(id).style.visibility="visible";
      document.getElementById(id).style.position="static";
      document.getElementById(id+"-icon").setAttribute("name","chevron-down-outline")
    }else{
      document.getElementById(id).style.visibility="hidden";
      document.getElementById(id).style.position="absolute";
      document.getElementById(id+"-icon").setAttribute("name","chevron-forward-outline")
    }
  }

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}

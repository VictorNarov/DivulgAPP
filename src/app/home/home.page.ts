import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';  
import { Observable } from 'rxjs';
import { Router, NavigationStart, NavigationExtras, } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  appstate$: Observable<object>;
  datos: any;

  constructor(private http: HttpClient, private router: Router, public sanitizer: DomSanitizer) {

  }

  ngOnInit(){
    this.getData().subscribe(res=>{
      this.datos = res;
    
    }
    )


    
      this.appstate$ = this.router.events.pipe(
        filter(e => e instanceof NavigationStart),
        map(() => {
          const currentState = this.router.getCurrentNavigation();
          return currentState.extras.state;
        })
      );
    
  }

  getData(){
    return this.http
    .get("assets/group_info_(json)/info.json")
  }

  navigate(page, dataP) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: dataP
      }
    };
    this.router.navigate([page], { 
      state: { goToMembers:  navigationExtras}
    });
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

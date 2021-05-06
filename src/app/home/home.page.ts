import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';  
import { Observable } from 'rxjs';
import { Router, NavigationStart, NavigationExtras, } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  appstate$: Observable<object>;
  datos: any;

  constructor(private http: HttpClient, private router: Router) {

  }

  ngOnInit(){
    this.getData().subscribe(res=>{
      this.datos = res;
      if(this.datos["Group background"]["type"] == "img"){
        document.getElementById("group_info").style.backgroundImage = "url(../../assets/images/group_info_background.png)";
        document.getElementById("group_info").style.backgroundRepeat = "no-repeat";
        document.getElementById("group_info").style.backgroundSize = "cover";
        document.getElementById("group_info").style.backgroundPosition = "center";
        document.getElementById("group_info").style.color = this.datos["Group background"]["text color"];
      }else{
        document.getElementById("group_info").style.backgroundColor = this.datos["Group background"]["color"];
        document.getElementById("group_info").style.color = this.datos["Group background"]["text color"];
      }
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
}

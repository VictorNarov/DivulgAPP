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

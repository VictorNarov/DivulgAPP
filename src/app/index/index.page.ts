import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';  
import { Observable } from 'rxjs';
import { Router, NavigationStart, NavigationExtras, } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  appstate$: Observable<object>;
  data: JSON[] = [];
  constructor(private http: HttpClient, private router: Router, public sanitizer: DomSanitizer) {

  }

  ngOnInit(){
    this.getDirectories().subscribe(res=>{

      this.getData(res);
    
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
  getDirectories(){
    return this.http
    .get("assets/index.json")
  }

  getData(directories){
    console.log(directories.data)
    for(let i in directories.data){
      let directory = directories.data[i]
      console.log(directory)
      this.http.get("assets/"+directory+"/"+directory+".json").subscribe((res: JSON) => {
        this.data.push(res);
        console.log(this.data);
      });

      
    }
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

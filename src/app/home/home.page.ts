import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';  


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  datos: any;

  constructor(private http: HttpClient) {

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
  }

  getData(){
    return this.http
    .get("assets/group_info_(json)/info.json")
  }

}

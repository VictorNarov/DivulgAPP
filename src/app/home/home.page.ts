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
    this.getData().subscribe(res=>
        this.datos = res
      )
  }

  getData(){
    return this.http
    .get("assets/group_info_(json)/info.json")
  }

}

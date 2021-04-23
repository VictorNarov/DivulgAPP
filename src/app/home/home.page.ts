import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  grupos: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log("DATOS");
    this.getGrupos().subscribe(res => {
      console.log("RESPUESTA", res);
      this.grupos = res[0];
      console.log(this.grupos.integrantes);
    });
  }

  getGrupos(){
    return this.http
    .get("assets/grupos/plantilla.json")
    .pipe(
      map((res:any) => {
        return res.data;
      })
    )
  }

}

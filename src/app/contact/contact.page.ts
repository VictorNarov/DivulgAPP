import { Component, OnInit } from '@angular/core';
// Receive Parameter
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';
import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/images/marker-icon-2x.png";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

   data: any;
   map: Map


  constructor(public route: ActivatedRoute,private router: Router) {
    this.data = this.router.getCurrentNavigation().extras.state.goToMembers.queryParams.data;
    }


  ngOnInit() {
    if(this.data.map.visible){
      setTimeout(() =>  {
        this.map = new Map('map').setView([0,0], 8);
  
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 18
        }).addTo(this.map);
  
        this.map.setView(latLng(this.data.map.lat, this.data.map.lon),16);
        marker([this.data.map.lat, this.data.map.lon]).addTo(this.map);
        
      }, 50);
    }
    
  }

  loadMap(){

  }


}

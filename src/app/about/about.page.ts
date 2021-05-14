import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  url: string = "https://divulgapp.tk"

  constructor() { }

  ngOnInit() {
  }

}

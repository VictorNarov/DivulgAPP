import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Proyectos', url: '/projects', icon: 'newspaper' },
    { title: 'Acerca de', url: '/about', icon: 'people-circle' },
    { title: 'Contacto', url: '/contact', icon: 'mail' },
  ];
  constructor() {}
}

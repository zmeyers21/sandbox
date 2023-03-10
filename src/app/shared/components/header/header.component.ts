import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  tabs$: any[] = [];
  menuActive$: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.initTabs();
  }

  initTabs() {
    this.tabs$ = [
      {
        title: 'HOME',
        route: 'dashboard'
      },
      {
        title: 'ABOUT US',
        route: 'about'
      },
      {
        title: 'DOWNLOAD',
        route: 'download'
      },
      {
        title: 'CONTACT US',
        route: 'contact'
      }
    ]
  }

  toggleMenu() {
    this.menuActive$ = !this.menuActive$;
  }

  navigate(route: string) {
    this.router.navigate([route]);
    this.toggleMenu();
  }

}

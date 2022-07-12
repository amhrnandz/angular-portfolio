import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinkListenerService {
  activeNavItemSubject$: Subject<string>;
  public navItems: any;

  constructor() {
    this.activeNavItemSubject$ = new Subject();
    this.navItems = {
      "/": {
        name: "Home",
        link: "/",
        icon: ""
      },
      "/about-me": {
        name: "About Me",
        link: "/about-me",
        icon:""
      },
      "/contact-me": {
        name: "Contact Me",
        link: "/contact-me",
        icon:""
      },

    };

    Object.keys(this.navItems).forEach(
      (key) => {
        console.log(key);
      }
    );

  }

  setNavItem(newItem: any){
    this.activeNavItemSubject$.next(newItem);
    console.log(newItem);
  }
}

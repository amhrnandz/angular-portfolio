import { Component } from '@angular/core';
import { LinkListenerService } from './link-listener.service';
import { Router } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  navItems: any;
  navItemsArray: any;

  constructor(
    private linkService: LinkListenerService,
    private router: Router
  ) {
    this.navItems = this.linkService.navItems;
    this.navItemsArray=[];
    Object.keys(this.navItems).forEach(
      (key) => {
        this.navItemsArray.push(this.navItems[key])
      }
    )
  }


  linkClick(item: any) {
    this.router.navigate([item['link']]);
    this.linkService.setNavItem(item);
  }
}
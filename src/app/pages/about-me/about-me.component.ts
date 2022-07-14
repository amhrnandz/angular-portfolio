import { Component, OnInit } from '@angular/core';
import { LinkListenerService } from 'src/app/link-listener.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  linkSubscription: any;
  navItem: any;
  selectedAboutList: "hobbies" | "skills";

  constructor(
    private linkService: LinkListenerService,
    private router: Router
  ) {
      this.navItem = {
        link: "",
        name: "",
        icon: "",
      },

      this.selectedAboutList = "hobbies";

      this.linkSubscription = this.linkService.activeNavItemSubject$.subscribe({
        next: (newItem: any) => {
          this.navItem = newItem;
        }
      });

      this.linkService.setNavItem(
        this.linkService.navItems[this.router.url]
      );
  }

  ngOnInit(): void {
  }

  changeAboutList(type: "hobbies" | "skills") : void {
    this.selectedAboutList = type;
  }
}

import { Component, OnInit } from '@angular/core';
import { LinkListenerService } from 'src/app/link-listener.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
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
        next: (newItem) => {
          this.navItem = newItem;
        }
      })

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

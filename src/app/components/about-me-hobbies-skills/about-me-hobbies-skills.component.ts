import { Component, Input, OnInit } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-about-me-hobbies-skills',
  templateUrl: './about-me-hobbies-skills.component.html',
  styleUrls: ['./about-me-hobbies-skills.component.scss']
})
export class AboutMeHobbiesSkillsComponent implements OnInit {
  @Input() selectedList: "hobbies" | "skills";
  hobbies: Item[];
  skills: Item[];

  constructor() {
    this.selectedList = "hobbies";
    this.hobbies = [
      new Item ("Listening to music", "headphone"),
      new Item ("Watching Anime", "television"),
      new Item ("Reading Manga", "book")
    ]
    this.skills = [
      new Item ("Programming", "computer"),
      new Item ("Digital Art", "brush")
    ]
  }

  ngOnInit(): void {
  }

}

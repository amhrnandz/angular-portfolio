import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-about-me-hobbies-skills',
  templateUrl: './about-me-hobbies-skills.component.html',
  styleUrls: ['./about-me-hobbies-skills.component.scss']
})
export class AboutMeHobbiesSkillsComponent implements OnInit {
  @Input() selectedList: "hobbies" | "skills";
  hobbies: string[];
  skills: string[];

  constructor() {
    this.selectedList = "hobbies";
    this.hobbies = [
      "Listening to music",
      "Watching Anime",
      "Reading Manga"
    ]
    this.skills = [
      "Programming",
      "Digital Drawing",
      "Play ukulele",
    ]
  }

  ngOnInit(): void {
  }

}

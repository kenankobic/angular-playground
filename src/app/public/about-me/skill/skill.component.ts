import { Component, Input, OnInit } from '@angular/core';
import { fadeInOutAnimation } from 'src/app/shared/animations/fadeInOut';
import { Skill } from '../models/skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
  animations: [fadeInOutAnimation]
})
export class SkillComponent implements OnInit {
  @Input() skill!: Skill;
  progress: number = 0;
  showProgressPercentage: boolean = false;
  interval!: any;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (this.skill.level < 0) this.skill.level = 0;
    else if (this.skill.level > 100) this.skill.level = 100;

    this.manageProgress();
    this.interval = setInterval(() => {
      this.manageProgress();
    }, 45)
    setTimeout(() => {
      this.showProgressPercentage = true;
    }, 1200);
  }

  manageProgress() {
    if (this.progress >= this.skill.level || this.progress > 15) {
      this.progress = this.skill.level;
      clearInterval(this.interval);
    } else {
      this.progress++;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { fadeInOutAnimation } from 'src/app/shared/animations/fadeInOut';
import { Experience } from '../models/experience';
import { Project } from '../models/project';
import { Skill } from '../models/skill';
import { ExperiencesService } from '../services/experiences.service';
import { ProjectsService } from '../services/projects.service';
import { SkillsService } from '../services/skills.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  animations: [fadeInOutAnimation]
})
export class AboutMeComponent implements OnInit {
  experiences: Observable<Experience[]> = new Observable<Experience[]>();
  skills: Observable<Skill[]> = new Observable<Skill[]>();
  projects: Observable<Project[]> = new Observable<Project[]>();

  constructor(
    private experiencesService: ExperiencesService,
    private skillsService: SkillsService,
    private projectsService: ProjectsService,
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.experiences = this.experiencesService.getExperiences();
    this.skills = this.skillsService.getSkills();
    this.projects = this.projectsService.getProjects();
  }
}

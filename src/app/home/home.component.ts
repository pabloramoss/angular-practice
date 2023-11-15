import { Component } from '@angular/core';
import { projects } from '../utils/projects';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  projects =  projects;
}

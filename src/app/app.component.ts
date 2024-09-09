import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ToDoEntryFormComponent } from './components/to-do-entry-form/to-do-entry-form.component';
import { TaskListWrapperComponent } from "./components/task-list-wrapper/task-list-wrapper.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, ToDoEntryFormComponent, TaskListWrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}

import { Component, inject } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-entry-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './to-do-entry-form.component.html',
  styleUrl: './to-do-entry-form.component.scss'
})
export class ToDoEntryFormComponent {

  private readonly taskService: TaskService = inject(TaskService)
  todos$ = this.taskService.todo$
  title: string = ""

  addTask() {
    if (!this.title) return
    this.taskService.addTask({
      title: this.title,
      isCompleted: false
    })
    this.title = ""
  }

}

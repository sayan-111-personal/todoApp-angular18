import { Component, inject } from '@angular/core';
import { TaskInfoTagComponent } from '../task-info-tag/task-info-tag.component';
import { TaskListComponent } from "../task-list/task-list.component";
import { TaskEmptyListComponent } from "../task-empty-list/task-empty-list.component";
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from "../task-item/task-item.component";

@Component({
  selector: 'app-task-list-wrapper',
  standalone: true,
  imports: [CommonModule, TaskInfoTagComponent, TaskEmptyListComponent, TaskItemComponent],
  templateUrl: './task-list-wrapper.component.html',
  styleUrl: './task-list-wrapper.component.scss',
})
export class TaskListWrapperComponent {

  total = 0
  completed = 0
  taskService = inject(TaskService)
  todos$ = this.taskService.todo$

  $total = this.taskService.completedTodos$.subscribe(
    (v) => (this.completed = v.length)
  )

  $completed = this.todos$.subscribe(
    (v) => (this.total = v.length)
  )

}

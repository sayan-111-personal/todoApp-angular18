import { Component, inject, Input } from '@angular/core';
import { TaskInterface } from '../../interfaces/task.interface';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent {

  private readonly taskService: TaskService = inject(TaskService)
  @Input({ required: true }) task: TaskInterface | undefined

  checkTask() {
    if (this.task) {
      // this.task.isCompleted =!this.task.isCompleted;
      this.taskService.toggleTaskCompletion(this.task.id)
    }
  }

  deleteTask(id?: number) {
    if (!id) return
    this.taskService.deleteTask(id)
  }

}

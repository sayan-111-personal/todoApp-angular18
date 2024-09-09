import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-info-tag',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-info-tag.component.html',
  styleUrl: './task-info-tag.component.scss'
})
export class TaskInfoTagComponent {

  @Input({required: true}) isBoth = false
  @Input({required: true}) total = 0
  @Input() completed = 0

}

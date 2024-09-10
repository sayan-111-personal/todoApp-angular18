import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { TaskInterface } from '../interfaces/task.interface';
import { TaskPayloadInterface } from '../interfaces/task-payload.interface';
import { tasks } from '../utils/tasks.utils';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  todos: TaskInterface[] = tasks
  private todoSubject: BehaviorSubject<TaskInterface[]> = new BehaviorSubject<TaskInterface[]>(this.todos)
  public todo$ = this.todoSubject.asObservable()

  public completedTodos$: Observable<TaskInterface[]> = this.todo$.pipe(
    map((todos) => todos.filter((todo) => todo.isCompleted))
  )

  constructor() { }

  addTask(task: TaskPayloadInterface) {
    const newTask: TaskInterface = {
      id: this.todos.length + 1,
      ...task
    }
    this.todos.unshift(newTask)
    this.todoSubject.next(this.todos)
    // console.log(this.todos)
  }
  
  deleteTask(id: number) {
    const todo = this.todos.find(t => t.id === id)
    // console.log(todo)
    if (todo) {
      this.todos = this.todos.filter(t => t.id!== id)
      this.todoSubject.next(this.todos)
    }
  }

  toggleTaskCompletion(id: number) {
    const todo = this.todos.find(t => t.id === id)
    if (todo) {
      todo.isCompleted =!todo.isCompleted
      this.todoSubject.next(this.todos)
    }
  }

  editTask(id: number) {
    const todo = this.todos.find(t => t.id === id)
    console.log(todo)
    if (todo) {
      
    }
  }

}

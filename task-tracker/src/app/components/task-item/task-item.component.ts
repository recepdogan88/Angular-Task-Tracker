import { Component, EventEmitter, Input ,Output} from '@angular/core';
import {Task} from "../../Task"


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})

export class TaskItemComponent {
  @Input() task: Task | any;
  @Output () onDeleteTask: EventEmitter<Task> =new EventEmitter

  constructor(){

  }

  onDelete(task: any){
    this.onDeleteTask.emit(task);
  }
}

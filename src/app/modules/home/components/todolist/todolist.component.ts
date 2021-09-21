import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../../models/todoitem';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  name: string = '';
  items: Array<TodoItem> = [];
  TodoItem:any
  isDone:boolean=false
  newTodo:any
  result: number=0;
  constructor() { }

  ngOnInit(): void {

    
  }

  

   getRemainingCount() {
    this.result = this.items.filter(item => !item.isDone).length;
     console.log(this.result)
    return this.result;
  }

   add() {
    if (this.newTodo == '') {
    }
    else {
          this.TodoItem ={
      newTodo: this.name,
      isDone: false
    }
        this.items.push(this.TodoItem);
        this.newTodo = '';

    }
  
  }

   toggleItem(item: TodoItem) {
    item.isDone = !item.isDone;
  }

}

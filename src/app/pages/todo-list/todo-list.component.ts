import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  taskIsDone = false;
  constructor() {}

  ngOnInit(): void {}
  taskDone(e: any) {
    let item = e.target.parentElement.parentElement.children[0];
    item.innerHTML = `<del>${item.innerHTML}</del>`;
  }
  taskDelete(e: any) {
    let item = e.target.parentElement.parentElement;
    item.innerHTML = '';
  }
}

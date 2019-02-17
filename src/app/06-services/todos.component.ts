
import { TodoService } from './todos.service';
import { Todo } from './todo.model';

export class TodosComponent { 
  todos: Todo[] = [];
  message; 

  constructor(private service: TodoService) {}

  ngOnInit() { 
    //this.service.getTodos().subscribe(t:Todo[] => this.todos = t);
  }

  add() { 
    var newTodo:Todo;
    newTodo = new Todo(2,'asdf');
    this.service.add(newTodo).subscribe(
      t => this.todos.push(newTodo),
      err => this.message = err);
  }

  delete(id) {
    if (confirm('Are you sure?'))
      this.service.delete(id).subscribe();
  }  
}

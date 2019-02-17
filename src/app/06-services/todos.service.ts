
import { HttpClient } from '@angular/common/http';
//import 'rxjs/operators/map';
import {map} from 'rxjs/operators';
import { Todo } from './todo.model';
export class TodoService{

    constructor(private http:HttpClient){

    }

    add(todo:Todo){
        return this.http.post('...',todo).pipe(map(r=>r));
    }

    getTodos(){
        return this.http.get('...').pipe(map(r=>r));
    }

    delete(id) {
        return this.http.delete('...').pipe(map(r=>r));
    }
}

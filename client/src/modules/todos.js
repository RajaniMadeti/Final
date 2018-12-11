import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { Todo } from '../resources/data/todo-object'

@inject(Router, Todo)
export class Todos {
    constructor(router, todos) {
        this.router = router;
        this.todos = todos;
        this.message = 'Todos';
        this.showTodoEditForm = false;
    }

    newTodo() {
        this.todo = {
            todo: "",
            priotity: "High",
            done: false

        }
        // this.showTodoEditForm();
        this.openEditForm();
    }


    // async activate() {
    //     await this.todos.getTodos();
    // }

    // async getTodos() {
    //     await this.todos.getTodos();
    // }

    async activate() {
        await this.getTodos();
    }

    async getTodos() {
        await this.todos.getTodos();
    }

    back() {
        this.showTodoEditForm = false;
    }

    attached() {
        feather.replace()
    }

    editTodo(todo) {
        this.todo = todo;
        this.openEditForm();
        // this.showTodoEditForm();
    }


    async delete() {
        if (this.todo) {
            await this.todos.delete(this.todo);
            await this.getTodos();
            this.back();
        }
    }

    async saveTodo() {
        if (this.todo && this.todo.todo && this.todo.priotity ) {
            await this.todos.saveTodo(this.todo);
            await this.getTodos();
            this.back();
        }
    }


    changeActive(todo){
        this.todo = todo;
        this.saveTodo();
        }
        
    logout() {
        this.router.navigate('home');
    }

    openEditForm() {
        this.showTodoEditForm = true;
        setTimeout(() => { $("#todo") .focus(); }, 500   );
    }
}

import { Injectable, OnInit } from '@angular/core';
import { STATUS, Todo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private readonly TODO_STORAGE_KEY: string = "todos";

  private todos: Todo[] = [];

  constructor() {
    let todosFromStorage = localStorage.getItem(this.TODO_STORAGE_KEY);
    // A la premiere visite sur l'app,
    // l'user n'a pas de todos dans son navigateur
    //Il faut créer l'item dans le storage
    //OU recuperer les todos stockés ( string) et les convertir en Todo[]
    console.log(todosFromStorage);
    if (todosFromStorage) {
      this.todos = JSON.parse(todosFromStorage);
      console.log(this.todos)
    } else {
      localStorage.setItem(this.TODO_STORAGE_KEY, "[]");
      this.todos = [];
    }
   }


  //Fourni les todos aux composants
  getTodos(): Todo[] {
    return this.todos;
  }

  //Sauvegarder en localStorage après la validation du formulaire
  saveTodo(todo: Todo) {
    //Ajouter le nouveau Todo a this.todos en premier ( unshift )
    this.todos.unshift(todo);
    //Je convertis mon tableau de Todo avec les nouvelles datas en "JSON" ( string )
    const todosJSON = JSON.stringify(this.todos);
    //Mise a jour du localStorage
    localStorage.setItem(this.TODO_STORAGE_KEY, todosJSON);
  }

  deleteTodo(todoId: string) {
    //Recuperer le Todo avec l'id fourni dans this.todos
    const todoToDelete = this.todos.find((todo:Todo)=>todo.id === todoId);
    //Si un element est trouvé
    if(todoToDelete){
      //On cherche son index dans le tableau
      const index = this.todos.indexOf(todoToDelete);
      //Suppression de l'element avec splice
      this.todos.splice(index,1);
      //Je convertis mon tableau de Todo avec les nouvelles datas en "JSON" ( string )
      const todosJSON = JSON.stringify(this.todos);
      //Mise a jour du localStorage
      localStorage.setItem(this.TODO_STORAGE_KEY, todosJSON);
    }
  }


  getOptions(): { label: string, value: number }[] {
    return Object.entries(STATUS)
      .filter(([key, value]) => typeof value === 'number') // évite les doublons inversés
      .map(([key, value]) => ({
        label: key.replace('_', ' '), // remplacement des _ par un espace
        value: value as number
      }));
  }

  getIds(): number[] {
    return Object.entries(STATUS)
      .filter(([key, value]) => typeof value === 'number')
      .map(([key, value]) => ( value as number ));
  }
}

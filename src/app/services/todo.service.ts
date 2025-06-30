import { Injectable } from '@angular/core';
import { STATUS, Todo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  //Fourni les todos aux composants
  getTodos():Todo[] {
    return [
      {
        id: 1,
        title: "Finir tp todo",
        content: 'vite vite',
        deadline: new Date('2025/06/25 17:00:00'),
        status: STATUS.BUG,
      },
      {
        id: 2,
        title: "Trouver coupable",
        content: '',
        deadline: new Date('2025/06/30 17:00:00'),
        status: STATUS.IN_PROGRESS,
      },
      {
        id: 3,
        title: "Test",
        content: '',
        deadline: new Date('2025/06/25 17:00:00'),
        status: STATUS.TODO,
      }
    ];
  }

  //Sauvegarder en localStorage après la validation du formulaire
  saveTodo(todo: Todo) {
  }

  deleteTodo(todoId: number) {
  }


  getOptions(){
    return Object.entries(STATUS)
    .filter(([key, value]) => typeof value === 'number') // évite les doublons inversés
    .map(([key, value]) => ({
      label: key.replace('_', ' '), // remplacement des _ par un espace
      value: value as number
  }));
  }
}

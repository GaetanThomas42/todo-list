import { ChangeDetectionStrategy, Component } from '@angular/core';
import { STATUS, Todo } from '../../models/todo.interface';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatChipsModule, MatButtonModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  // Nécessaire pour Angular Material
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {

  todos:Todo[] = [
    {
      id: 1,
      title:"Finir tp todo",
      content: 'vite vite',
      deadline: new Date('2025/06/25 17:00:00'),
      status: STATUS.BUG,
    },
    {
      id: 2,
      title:"Trouver coupable",
      content: '',
      deadline: new Date('2025/06/30 17:00:00'),
      status: STATUS.IN_PROGRESS,
    },
    {
      id: 3,
      title:"Test",
      content: '',
      deadline: new Date('2025/06/25 17:00:00'),
      status: STATUS.TODO,
    }
  ];

  //Créer un tableau contenant un label et une value pour avoir un option pour chaque STATUS
  // Nous bouclerons ce tableau dans le html
  statusOptions:{label:string,value:number}[] = Object.entries(STATUS)
    .filter(([key, value]) => typeof value === 'number') // évite les doublons inversés
    .map(([key, value]) => ({
      label: key.replace('_', ' '), // remplacement des _ par un espace
      value: value as number
  }));

}

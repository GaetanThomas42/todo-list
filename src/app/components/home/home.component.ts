import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { STATUS, Todo } from '../../models/todo.interface';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatChipsModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
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
      id: 1,
      title:"Finir tp todo",
      content: 'vite vite',
      deadline: new Date('2025/06/25 17:00:00'),
      status: STATUS.TODO,
    },
        {
      id: 1,
      title:"Finir tp todo",
      content: 'vite vite',
      deadline: new Date('2025/06/25 17:00:00'),
      status: STATUS.TODO,
    },
        {
      id: 1,
      title:"Finir tp todo",
      content: 'vite vite',
      deadline: new Date('2025/06/25 17:00:00'),
      status: STATUS.TODO,
    },
        {
      id: 1,
      title:"Finir tp todo",
      content: 'vite vite',
      deadline: new Date('2025/06/25 17:00:00'),
      status: STATUS.TODO,
    }
  ];

    statusOptions:{label:string,value:number}[] = Object.entries(STATUS)
    .filter(([key, value]) => typeof value === 'number') // évite les doublons inversés
    .map(([key, value]) => ({
      label: key.replace('_', ' '), // remplacement des _ par un espace
      value: value as number
    }));

}

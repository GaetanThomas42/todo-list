import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { STATUS, Todo } from '../../models/todo.interface';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../services/todo.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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

  private todoSevice: TodoService = inject(TodoService);

  todos:Todo[] = this.todoSevice.getTodos();

}

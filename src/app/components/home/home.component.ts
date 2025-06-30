import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.interface';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../services/todo.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatChipsModule, MatButtonModule, CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  // Nécessaire pour Angular Material
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {

  private todoSevice: TodoService = inject(TodoService);
  private formBuilder: FormBuilder = inject(FormBuilder);

  todoForm: FormGroup;
  todos: Todo[] = this.todoSevice.getTodos();
  //Recuperer les options possibles  LABEL value
  statusOptions = this.todoSevice.getOptions();

  constructor() {
    //Création du formGroup qui contient les formControls
    this.todoForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      content: ['', []],
      status: ['', [Validators.required]],
      deadline: ['', [Validators.required]],
    });
  }

  submitTodo() {
    console.log('FORM SUBMIT.');
    console.log(this.todoForm.value);

  }

}

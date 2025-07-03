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

  private todoService: TodoService = inject(TodoService);
  private formBuilder: FormBuilder = inject(FormBuilder);

  isSubmitted: boolean = false;
  isLoading: boolean = false;
  todoForm: FormGroup;
  todos: Todo[] = this.todoService.getTodos();
  //Recuperer les options possibles  LABEL value
  statusOptions = this.todoService.getOptions();

  constructor() {
    //Création du formGroup qui contient les formControls
    this.todoForm = this.formBuilder.group({
      title: ['test title', [Validators.required]],
      content: ['test content', []],
      status: ['', [Validators.required]],
      deadline: ['', [Validators.required]],
    });
  }

  submitTodo() {
    this.isSubmitted = true;

    if (this.todoForm.valid) {
      console.log("FORM VALID");

      //Créer un Todo avec les datas du form
      const newTodo:Todo = this.todoForm.value;
      // TODO ajouter un id au todo créé
      //Trouve rune solution pour generer un id unique ( uuid )
      console.log(newTodo);
      //Appel de la methode du Service pour ajouter le todo au storage
      this.todoService.saveTodo(newTodo);
    }

  }





}

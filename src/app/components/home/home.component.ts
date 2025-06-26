import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { STATUS, Todo } from '../../models/todo.interface';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule, MatCardModule, MatIconModule, MatChipsModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class HomeComponent {

  isSubmitted:boolean = false;
  todoForm: FormGroup;
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
      title:"Finir tp todo",
      content: 'vite vite',
      deadline: new Date('2025/06/25 17:00:00'),
      status: STATUS.TODO,
    },
    {
      id: 3,
      title:"Finir tp todo",
      content: 'vite vite',
      deadline: new Date('2025/06/25 17:00:00'),
      status: STATUS.TODO,
    },
    {
      id: 4,
      title:"Finir tp todo",
      content: 'vite vite',
      deadline: new Date('2025/06/25 17:00:00'),
      status: STATUS.TODO,
    },
        {
      id: 5,
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

  constructor(private fb: FormBuilder) {
    console.log(this.statusOptions)
    //Création du form
    this.todoForm = this.fb.group({

      title: ['', [Validators.required, Validators.minLength(2)]],
      content: ['', [Validators.required]],
      status: ['', [Validators.required]],
      deadline: ['', [Validators.required]],


    });
  }


  onSubmit() {
     console.log('SUBMIT');
    this.isSubmitted = true;
    if(this.todoForm.valid === false){


    }

  }

  isFieldInvalid(fieldName: string): boolean {
  const field = this.todoForm.get(fieldName);
  // Retourne true si TOUTES ces conditions sont vraies :
  //    champ existe ET champ invalide ET (champ dirty OU touched OU formulaire est soumis)
  return Boolean(field && field.invalid && (field.dirty || field.touched || this.isSubmitted));
			// Boolean() créer un booléen d'après une donnée flasy ou truthy
}

  getFieldError(fieldName: string): any{

    const field = this.todoForm.get(fieldName);
    // Vérifier si le champ existe et a des erreurs
    if (field && field.errors) {
      // field.errors est un objet avec les types d'erreurs comme clés
      // Ex: { required: true, email: true, minlength: { requiredLength: 6, actualLength: 3 } }
      if (field.errors['required']) return `${fieldName} est obligatoire`;
      if (field.errors['email']) return 'Format email invalide';
      if (field.errors['minlength']) {
        // L'erreur minlength contient des infos détaillées
        return `Minimum ${field.errors['minlength'].requiredLength} caractères`;
      }
  }

}

}

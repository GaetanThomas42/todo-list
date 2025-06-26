# Application TODO LIST

- Config initial ✅
  - SCSS ✅
  - ng add angular material ✅
  - bootstrap ✅ ( npm et import dan style.scss)

- Création dossier 
    app/components app/services app/pipes app/models

- app/models/todo.interface.ts ✅
  
  interface Todo {
    id: number,
    title: string,
    content: string,
    status: number 
    date échéance: Date
  } ✅

  ENUM  ✅
    TODO = 1
    IN_PROGRESS = 2
    DONE = 3
    BUG = 4

- Création composants  home, about ✅

- Affichage de app-home dans app.component.html ✅

- Création Todo[] en dur dans home.component ✅

- Affichage des todo colonne de card ✅
  - Affichage formatage des datas avec les pipes ✅
  - Prévoir les boutons d'actions ✅
  - Création d'un pipe perso qui prend en param un nombre ( enum STATUS ) et renvoie selon le status un émoji et le statu en texte 

- Création du formulaire dans home.component.html

- ngSubmit coté HTML du form sur submitTodo() 
- Méthode submitTodo() dans le ts
  - Récupération data ( console.log )
  - Test du formulaire en cas d'erreurs ( retirer validation HTML via inspecteur )
  - Affichage erreur et 
- Création d'un Todo avec les datas


- Création du TodoService qui sera en charge de la gestion des Todos stockés en localStorage 

- loadData() 
  localStorage.getItem("todos")
  Si inéxistant créer un tableau vide et le renvoyer
  Sinon convertion data et renvoie Todo[]

- saveData(todo: Todo) 
  - ajout au todos existants
  - appel de la méthode du service pour update du storage

- deleteData(todoId: number) 
  - recherche dans le tableau avec l'id  ( array.find() ) et le delete
  - mettre a jour datas
  
- Navbar lien App (Todo) et lien About (présentation...)


- Routes /home et /about ->app.routes.ts
- Navbar routeLink

- Affichage des todos par catégorie



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.20.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

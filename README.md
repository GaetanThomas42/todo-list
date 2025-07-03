# Application TODO LIST
✅ Fait
⭐ Bonus
## Création projet ✅

- Config initial 
- ng new todo-list 
  - SCSS 
- ng add angular material 
- bootstrap  ( npm et import dans style.scss)

- Création dossiers 
    app/components app/services app/pipes app/models

## Représentation des datas ✅
- Créer le fichier app/models/todo.interface.ts 
- Créer à l'intérieur l'interface correspsondante a vos datas
- Par exemple:  
  interface Todo {
    id: number,
    title: string,
    content: string,
    status: number 
    date échéance: Date
  } 
- Bonus enumération des statut pour plus de clarté et éviter la gestion de chaine de caractères
  ENUM  
    TODO = 1
    IN_PROGRESS = 2
    DONE = 3
    BUG = 4


## Le but et de créer un tableau de Todos en "dur" dans un composant afin de tester notre interface et commencer a créer un affichage pour nos todos ✅
### Création du composant et des données en "dur"
- Création composant home 
  - ng g c components/home
- Affichage du composant dans l'appli
  - Appel du selecteur app-home dans app.component.html 
- Création Todo[] en dur dans home.component.ts 
  - todos: Todo[] = [ /** VOS DATAS **/]

### Affichage des datas ✅
- Affichage des todo dans le HTML avec @for 
  - Affichage formatage des datas avec les pipes ( todo.deadline | date : "EEEE dd MMMM YYYY" 
  - Prévoir un bouton delete 
  - Création d'un pipe perso qui prend en param un nombre ( enum STATUS ) et renvoie selon le status un émoji et le status en texte  

## Création du service et de la méthode pour récupérer les Todos ✅
- ng g s services/todoservice
- Créer une méthode getTodos()
- Couper le tableau de Todos dans home.component et le return dans la méthode getTodos()

### Injection et appel de la méthode depuis le composant home ✅
- Dans home.component.ts, injecter via le constructeur OU avec inject() le TodoService
- Appel de la méthode avec this.todoService.getTodos()
- Test de l'affichage
- Il est essentiel de charger les data dans ngOnInit et non dans le code à la volée, cela sera très utile pour assurer les opérations asynchrone
 - implementation de OnInit au composant et initialisation des datas dans la méthode
  
## Formulaire
### Setup HTML
- Création du formulaire HTML  d'ajout de Todo dans home.component.html ✅
  - value par defaut NOW deadline et rendre date optionnelle ⭐
### Setup Form ANGULAR coté TS
- Ajout dans imports de ReactiveFormsModule ( utile pour les directives des forms  HTML) ✅
- Créer une propriété de type FormGroup qui représentera le formulaire ( todoForm: FormGroup)✅
- Il faut utiliser la méthode .group() de la classe FormBuilder de Angular pour créer les groupes✅
- Injection de FormBuilder dans le composant  ✅
- Ajouter un constructeur vide ✅
### Création du FormGroup et des FormControl
- créer votre FormGroup dans le constructeur✅
  - todoForm = this.formBuilder.group({})✅
  - Ajouter vos FormControl ✅
  - Exemple: 
  - this.todoForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      content: ['', []],
      status: ['', [Validators.required]],
      deadline: ['', [Validators.required]],
    }); 

### Lien avec le HTML 
- coté HTML relier le formGroup TS avec votre form HTML✅
- Utilisation de la directive Angular [formGroup] et la propriété qui représente votre form todoForm, exemple: 
  - <form [formGroup]="todoForm"> ✅
- ajout de la propriété formControlName sur les champs de votre formulaire en renseignat en valeur la formControl à associé✅
- Exemple pour le formControl title:     
  - <input name="title" formControlName="title" ....>  , cela va lié l'input au formControl TS ( valeur, états, erreur)✅

### Soumission du formulaire avec Angular  
- Méthode submitTodo() dans le home.component.ts, qui console.log("SUBMIT") ✅
- Ajout de la directive (ngSubmit) coté HTML du form sur submitTodo() ✅
    (ngSubmit)="submitTodo()"
- Cela va lance rnotre méthode à la soumission du formulaire✅
- La combinaison avec [formControl] évite le comportement natif du formulaire ( rechargement ...) et permet le bon fonctionnement de notre ✅
- IL faudra cependant penser à vider le formulaire en cas de besoin gérer les erreurs dynamiquement etc. ✅
### Récupération état du form / champs, valeurs, erreurs
  - console log état du form avec todoForm.valid   ou  todoForm.invalid   ✅
  - console log data du form dans  todoForm.value✅
  - Récuperer un formControl précis avec todoForm.get() dans une autre variable✅
  - Ex: todoForm.get("title") todoForm.get("content")✅
  - Récuperer un seul champ permet de connaitre sa validité, ses erreurs, value ....✅
  - console log des erreur du champ title avec  todoForm.get("title").?errors    (? obligatoire car null possible) ✅
  
### Validation du form
  - Ajouter un if qui vérifie sur le formGroup est valide ✅
    - Si valide
      - Récupération des datas dans une variable typée Todo ✅
      - Push de la variable en premier dans le tableau todos 
      - Vérifier que le nouveau Todo est affiché

### Problème, quel ID possède les nouveaux todos ? ⭐
- Nous devons définir un ID réel et unique afin d'assurer le bon fonctionnement des features delete, update et le tracking des boucles for      
- Gestion par UUID
- https://www.uuidgenerator.net/dev-corner/javascript
- Modifier l'interface Todo id number en string
- Entre la création du Todo et le push dans les datas, assigner un uuid a todo.id
- 
### Gestion des erreurs
  - Test du formulaire en cas d'erreurs, rien n'est ajouté au tableau
  - Ajout d'une propriété isSubmitted = false au composant
  - Dans la méthode de submit ( première ligne ) passer le booléen a true 
  - Cela permettra de ne pas afficher les erreurs constamment, seulement si l'on a validé le form
  - Récuperer méthodes getFieldError() et isFieldInvalid() dans le cours, copié et corrigé au besoin
  - Récupérer le code HTML associé aux appels de ces méthodes et l'ajouter sous chaque champ 
  - Ces méthodes permettent de simplifier la gestion des erreurs ave cune base de code facilement scalable
  - Mettre en place le système


### Stockage des données dans le localStorage

- Logique de fonctionnement
- Création des méthodes dans TodoService
  -
  -
  -


### Routing
- Navbar lien App (Todo) et lien About (présentation...)
- Composant about avec une explication projet, technos, auteur....
- Setup routing /home et /about 
- Navbar avec les liens

### UPGRADE + EDIT
- Refonte affichage TODO par statut par colonne order by deadline
- Formulaire d'edit

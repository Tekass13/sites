# Auto-Évaluation JavaScript

## Infos de l'étudiant-e

Kévin Carmon
BRE03

## Évaluation

Pour chaque question placez un `x` dans la case correspondant à votre situation : 

> Exemple :            
> J'aime la galette savez-vous comment ?      
> `[x] Quand elle est bien faite avec du beurre dedans`

Placez-ensuite un exemple de code dans la partie dédiée.

> Une fois que vous avez rempli le fichier envoyez-moi une copie sur Discord 

### Les variables et les types

#### Je sais déclarer une variable mutable

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    let variableMutable = 1; // variable modifiable
```

#### Je sais déclarer une variable constante

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    const variableConstante = 1; // variable non-modifiable
```

#### Je sais déclarer une variable globale

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    const variableConstante = 1;
    function helloWorld() {
        renvoi console.log(variableConstante) // renvoi 1
    }
```

#### Je sais modifier la valeur d'une variable

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    let maVariable = 'un premier texte';
    maVariable = 'un nouveau texte qui remplace le précédent'; 
```

#### Je sais déclarer un booleen

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    let toggle = false;
```

#### Je sais déclarer une String

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    let string = 'je suis une chaîne de caractères modifiable';
```

#### Je sais déclarer un Number

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    let number = 1;
```

#### Je sais incrémenter une variable

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    let maVariable = 0;
    maVariable++; // Incrémente maVariable de 1
```

#### Je sais décrémenter une variable

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    let maVariable = 0;
    maVariable--; // Décrémente maVariable de 1
```

### Les boucles, comparaisons et conditions

#### Je sais comparer une variable et une valeur

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    let value = 10;
    if (value < 10) { // renvoi false car value n'est pas inferieur à 10
        return true;
    } else {
        return false;
    }
```

#### Je sais comparer deux variables

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    let a = 1;
    let b = 2;
    if (a === b) { // renvoi false car a n'est pas égale à b
        return true;
    } else {
        return false;
    }
```

#### Je sais faire une condition simple (si / sinon)

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    let a = 1;
    let b = 2;
    if (a === b) { // renvoi false car a n'est pas égale à b
        return true;
    } else {
        return false;
    }
```

#### Je sais faire une condition complexe (si /sinon si / sinon)

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    let a = 1;
    let b = 2;
    if (a === b) {
        console.log(a, b);
    } else if (a < b) { // renvoi a et b car a est inférieur à b
        console.log(a, b);
    } else {
        return false;
    }
```

#### Je sais enchainer plusieurs conditions avec un ET logique

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    let a = 1;
    let b = 2;
    let c = 3;
    if (a === b) {
        console.log(a, b);
    } else if ((a < b) && ((b < c))) { // renvoi a, b et c car LES DEUX conditions de cette ligne sont respecté
        console.log(a, b, c);
    } else {
        return false;
    }
```

#### Je sais enchainer plusieurs conditions avec un OU logique

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    let a = 1;
    let b = 2;
    let maVariable3 = 3;
    if (a === b) {
        console.log(a, b);
    } else if ((a > b) || (b < c)) {
        console.log(a, b, c);
    } else {
        return false;
    }
```

#### Je sais utiliser une boucle while

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    let value = 0;
    while (value < 100) {
        value++;
    }
```

#### Je sais utiliser une boucle for avec incrémentation

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    let value = {
        name: 'kevin',
        age: 34,
    };
    for (let i = 0; i < value.length; i++) {

    }
```

#### Je sais utiliser une boucle for avec une variable temporaire

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    let value = 10;
    for (let i = 0; i < 5; i++) {
        let newValue = i * Math.PI;
        value += newValue
    }
```

### Les tableaux

#### Je sais créer un tableau

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    let table = [];
```

#### Je sais ajouter un élément dans un tableau

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    let table = [];
    let value = 0;
    table.push(value);
```

#### Je sais modifier un élément dans un tableau

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    let table = [0, 1, 2, 3];
    table[2] = 8;
    
```

#### Je sais supprimer un élément dans un tableau

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    let table = [0, 1, 2, 3];
    table.splice(2, 1);
```

#### Je sais afficher un élément dans un tableau

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    let table = [0, 1, 2, 3];
    console.log(table[1]);
```

#### Je sais parcourir un tableau

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    let table = [0, 1, 2, 3];
    table.forEach(element => {
        console.log(element);
    });
```

#### Je sais parcourir un tableau dans un tableau

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    let table = [
    [1, 2, 3],
    [4, 5, 6],
    ];
    table.forEach(element => {
        element.forEach(value => {
            console.log(value);
        });
        console.log(element);
    });
```

### Les objets

#### Je sais créer un objet

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    let object = {
        name: 'kévin',
        age: 34,
    }
```

#### Je sais ajouter un élément dans un objet

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    let object = {
        name: 'kévin',
        age: 34,
    }
    object.job = 'developpeur';
```

#### Je sais modifier un élément dans un objet

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    let object = {
        name: 'kévin',
        age: 34,
        job: 'developpeur',
    }
    object.age = 35;
```

#### Je sais afficher un élément dans un objet

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    let object = {
        name: 'kévin',
        age: 34,
        job: 'developpeur',
    }
    console.log(object.name);
```

#### Je sais parcourir un tableau d'objets

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    let object = {
        name: 'kévin',
        age: 34,
        job: 'developpeur',
    }
    for (let key in object) {
        console.log(key);
    }
```

#### Je sais parcourir un tableau dans un objet

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    let object = {
        length: 5,
        value: [1, 2, 3, 4, 5],
    }
    object.value.forEach(element => {
        console.log(element);
    });
```

### Les fonctions

#### Je sais créer une fonction sans paramètres ni retour

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    let a = 1;
    let b = 1;
    function myFunction() {
        if (a === b) {
            a += b
        }
    }
```

#### Je sais appeler une fonction sans paramètres ni retour

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    myFunction()
```

#### Je sais créer une fonction avec des paramètres

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    function myFunction(a, b) {
        if (a === b) {
            a += b
        }
    }
```

#### Je sais appeler une fonction avec des paramètres

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    let a = 1;
    let b = 1;
    myFunction(a, b);
```

#### Je sais créer une fonction avec une valeur de retour

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    function myFunction(a, b) {
        let c = a + b;
        return c
    }
```

#### Je sais appeler une fonction avec une valeur de retour

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    let result = myFunction(1, 1);
```

#### Je sais créer une fonction avec un paramètre par défaut

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    function myFunction(a = 0, b = 2) {
        let c = a += b
        return c
    }
```

#### Je sais appeler une fonction avec un paramètre par défaut

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    myFunction();
```

### Manipulation du DOM

#### Je sais sélectionner des éléments avec leur balise

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    let body = document.querySelector('body');
```

#### Je sais sélectionner des éléments avec leur classe

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    let container = document.querySelector('.container'); 
```

#### Je sais sélectionner un élément avec son id

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    let container = document.querySelector('#container');
```

#### Je sais sélectionner un élément avec un sélecteur CSS

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    body {

    }
```

#### Je sais sélectionner des éléments avec un sélecteur CSS

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    h1,
    h2,
    h3 {

    }
```

#### Je sais écouter un évènement sur un élément

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    document.addEventListener('click', (event) => {

    });
```

#### Je sais retrouver quel élément a déclenché un évènement

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    document.addEventListener('click', (event) => {
        let element = event.target;
    });
```

#### Je sais empêcher le comportement par défaut d'un évènement

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    document.addEventListener('click', (event) => {
        event.preventDefault();
    });
```

#### Je sais créer un élément HTML

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    let div = document.createElement('div');
```

#### Je sais l'ajouter à la fin d'un autre

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    let div = document.createElement('div');
    let body = document.createElement('body');

    body.appendChild(div)
```

#### Je sais l'ajouter avant un autre

- [ ] Je sais le faire seul-e
- [x] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    let div = document.createElement('div');
    let container = document.querySelector('#container');
    let body = document.querySelector('body');

    body.insertBefore(div, container);
```

#### Je sais créer un élément de texte

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    let paragraphe = document.createElement('p');
    let text = document.createTextNode('Ajout du texte dans le paragraphe');
    paragraphe.appendChild(text);
```

#### Je sais modifier les classes d'un élément

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    let div = document.querySelector('div');
    div.classList.add('container');
    div.classList.remove('container');
    div.classList.toggle('container');
```

#### Je sais modifier les attributs d'un élément

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    let img = document.querySelector('img');
    img.setAttribute('src', 'images/bg.png');
```

#### Je sais modifier le style d'un élément

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    let title = document.querySelector('h1');
    title.style.color = 'white';
```

#### Je sais récupérer la valeur d'un champ de formulaire

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    let form = document.querySelector('form');
    let value = form.value;
```

#### Je sais modifier la valeur d'un champ de formulaire

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    let form = document.querySelector('form');
    let value = form.value;
    value = 'Je change la valeur';
```

### fetch et asynchrone

#### Je sais déclarer une fonction asynchrone

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    async myFunction() {
        return
    }
```

#### Je sais attendre la résolution d'une Promise

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    myFunction().then(() => {

    });
```

#### Je sais utiliser fetch pour récupérer des données

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    let url = "https://maridoucet.sites.3wa.io/user-api/create-user";
    fetch(url)
        .then(response => response.json())
        .then(data => myFunction(data))
        .catch(err => console.error(err))
```

#### Je sais utiliser fetch pour envoyer des données

- [ ] Je sais le faire seul-e
- [x] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    let url = "https://maridoucet.sites.3wa.io/user-api/create-user";
    let formData = new FormData();
    formData.append('username', "tek");
    let body = {
        method: 'POST',
        body: formData
    };
    
    let response = await fetch(url, body);
    let data = await response.json();

    fetch(url)
        .then(response => response.json())
        .then(data => myFunction(data))
        .catch(err => console.error(err))

```

### JSON et WebStorage

#### Je sais transformer du JS en JSON

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    let data = {
        name: 'kevin',
        age: '34',
    }
    let dataString = JSON.stringify(data);
```

#### Je sais transformer du JSON en JS

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    fetch('data.json')
        .then(response => response.json())
        .then(data => JSON.parse(data))
        .catch(err => console.error(err))
```

#### Je sais écrire dans le WebStorage (session ou local)

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    localStorage.setItem('name', 'kevin');
    sessionStorage.setItem('name', 'kevin');
```

#### Je sais lire dans le WebStorage (session ou local)

- [x] Je sais le faire seul-e
- [ ] J'ai besoin de m'aider de la doc
- [ ] Je ne sais pas faire
- [ ] Je ne sais pas ce que c'est

```js
    localStorage.getItem('name');
    sessionStorage.getItem('name');
```

> C'est le moment de m'envoyer une copie du fichier rempli !


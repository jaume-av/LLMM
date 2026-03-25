## 6. Funcions

Fins ara hem escrit codi que s’executa de manera seqüencial.

Però moltes vegades necessitem:

* Reutilitzar un mateix bloc de codi
* Organitzar millor el programa
* Executar una acció només quan la necessitem

Per a això utilitzem les **funcions**.

Una funció és un bloc de codi reutilitzable que realitza una tasca concreta.

---

## Declaració d’una funció

La forma més habitual de definir una funció és utilitzant la paraula clau `function`.

```javascript
function saludar() {
    console.log("Hola!");
}
```

En este cas:

* `saludar` és el nom de la funció
* El codi dins de les claus és el que s’executarà

Per executar-la:

```javascript
saludar();
```

```javascript
// Eixida:
Hola!
```

---

### Diferència: definir vs executar

És molt important entendre que **definir una funció no és el mateix que executar-la**.

```javascript
function saludar() {
    console.log("Hola!");
}

// Açò NO executa la funció
console.log(saludar);

// Açò SÍ executa la funció
saludar();
```

```javascript
// Eixida:
[Function: saludar]
Hola!
```

En este exemple:

* `saludar` → és la funció (el codi guardat)
* `saludar()` → executa la funció

Quan fem `console.log(saludar)`:

* estem mostrant la funció
* no s’executa el seu codi

---

## Funcions amb paràmetres

Les funcions poden rebre informació a través de **paràmetres**.

```javascript
function saludar(nom) {
    console.log("Hola, " + nom + "!");
}

saludar("Anna");
```

```javascript
// Eixida:
Hola, Anna!
```

Els paràmetres permeten que una mateixa funció treballe amb valors diferents.

---

### Paràmetre vs argument

```javascript
function saludar(nom) { // nom → paràmetre
    console.log("Hola, " + nom);
}

saludar("Marc"); // "Marc" → argument
```

* **Paràmetre** → variable definida dins de la funció
* **Argument** → valor real que passem en executar-la

---

### Exemple amb diversos paràmetres

```javascript
function mostrarInfo(nom, edat) {
    console.log(nom + " té " + edat + " anys");
}

mostrarInfo("Laura", 25);
```

```javascript
// Eixida:
Laura té 25 anys
```

---

## Retornar un valor

Les funcions poden retornar un resultat utilitzant la paraula clau `return`.

```javascript
function suma(a, b) {
    return a + b;
}

const resultat = suma(5, 3);
console.log(resultat);
```

```javascript
// Eixida:
8
```

En este cas:

* la funció calcula un valor
* `return` envia el resultat cap a fora
* el valor es guarda en la variable `resultat`

Sense `return`, no podem utilitzar el resultat fora de la funció.

---

## Important: funció sense return

En JavaScript, totes les funcions retornen un valor.

Si no utilitzem `return`, la funció retorna automàticament `undefined`.

```javascript
function suma(a, b) {
    console.log(a + b); // es calcula i es mostra
}

const resultat = suma(2, 3);
console.log(resultat);
```

```javascript
// Eixida:
5
undefined
```

En este cas:

* `console.log(a + b)` → mostra `5`
* però la funció **no retorna el valor**
* per això `resultat` és `undefined`

---

### Comparació clara

```javascript
function suma(a, b) {
    return a + b;
}

const resultat = suma(2, 3);
console.log(resultat);
```

```javascript
// Eixida:
5
```

Ara:

* la funció sí retorna el valor
* podem utilitzar-lo fora

---

### Idea clau

* Mostrar un valor (`console.log`) **no és el mateix que retornar-lo**
* Si no hi ha `return`, el resultat serà `undefined`

---

### Funcions que no necessiten return

Hi ha funcions que només executen accions i no necessiten retornar res.

```javascript
function mostrarMissatge() {
    console.log("Operació correcta");
}

const resultat = mostrarMissatge();
console.log(resultat);
```

```javascript
// Eixida:
Operació correcta
undefined
```

En estos casos:

* la funció fa una acció
* el valor retornat (`undefined`) no s’utilitza

---

### Exemple combinat

```javascript
function calcularPreu(preu, iva) {
    return preu + (preu * iva);
}

const total = calcularPreu(100, 0.21);
console.log(total);
```

```javascript
// Eixida:
121
```

En este cas:

* sí utilitzem `return`
* perquè necessitem el resultat

---

## Funcions com a valors

En JavaScript, les funcions són valors.

Això significa que podem:

* guardar-les en variables
* passar-les com a paràmetres

---

### Expressió de funció (funció anònima)

```javascript
const saludar = function(nom) {
    console.log("Hola, " + nom + "!");
};

saludar("Marc");
```

```javascript
// Eixida:
Hola, Marc!
```

En este cas:

* la funció no té nom propi
* està guardada dins de la variable

---

## Funcions com a paràmetres

Podem passar una funció a una altra funció.

```javascript
function operacio(a, b, func) {
    return func(a, b);
}

const sumar = function(x, y) {
    return x + y;
};

const multiplicar = function(x, y) {
    return x * y;
};

const resultat1 = operacio(2, 3, sumar);
const resultat2 = operacio(2, 3, multiplicar);

console.log(resultat1);
console.log(resultat2);
```

```javascript
// Eixida:
5
6
```

---

### Idea clau

```javascript
operacio(2, 3, sumar);
```

* estem passant la funció
* no posem `sumar()` perquè això l’executaria

---

### Exemple pràctic

```javascript
function aplicarDescompte(preu, func) {
    return func(preu);
}

const descompte10 = function(preu) {
    return preu * 0.9;
};

console.log(aplicarDescompte(100, descompte10));
```

```javascript
// Eixida:
90
```

---

## Funcions de fletxa (Arrow Functions)

JavaScript modern permet definir funcions de forma més curta amb `=>`.

```javascript
const suma = (a, b) => {
    return a + b;
};

console.log(suma(2, 3));
```

```javascript
// Eixida:
5
```

---

### Forma reduïda

```javascript
const quadrat = num => num * num;

console.log(quadrat(4));
```

```javascript
// Eixida:
16
```

---

### Sense paràmetres

```javascript
const saludar = () => {
    console.log("Hola món");
};

saludar();
```

```javascript
// Eixida:
Hola món
```

---

### Exemple amb arrays

```javascript
const numeros = [1, 2, 3];

numeros.forEach(num => {
    console.log(num);
});
```

```javascript
// Eixida:
1
2
3
```

* Les arrow functions s’utilitzen molt en funcions curtes i callbacks

---

## Relació amb el DOM

Quan treballem amb esdeveniments, passem una funció que s’executarà després.

```javascript
const boto = document.querySelector("button");

boto.addEventListener("click", function() {
    console.log("Has fet clic");
});
```

---

### Amb arrow function

```javascript
boto.addEventListener("click", () => {
    console.log("Has fet clic");
});
```

---

### Idea clau

```javascript
boto.addEventListener("click", () => {
    console.log("Has fet clic");
});
```

* no executem la funció en eixe moment
* la passem com a paràmetre
* el navegador la cridarà quan passe l’esdeveniment

---

### Error molt habitual

```javascript
boto.addEventListener("click", saludar());
```

Això és incorrecte perquè:

* la funció s’executa immediatament
* no s’espera al clic

Forma correcta:

```javascript
boto.addEventListener("click", saludar);
```

---

## Resum

* Una funció és un bloc de codi reutilitzable
* `function nom() {}` → defineix
* `nom()` → executa
* Els paràmetres reben dades
* `return` permet retornar resultats
* Sense `return` → retorna `undefined`
* Les funcions es poden guardar i passar com a valors
* Les arrow functions són una forma més curta
* En el DOM, passem funcions sense executar-les

```javascript
function exemple(x) {
    return x * 2;
}

console.log(exemple(5));
```

```javascript
// Eixida:
10
```

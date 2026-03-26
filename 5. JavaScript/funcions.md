

## 6. Funcions

Fins ara hem escrit codi que s’executa de manera seqüencial.

Però moltes vegades necessitem:

* Reutilitzar un mateix bloc de codi
* Organitzar millor el programa
* Executar una acció només quan la necessitem

Per a això utilitzem les **funcions**.

Una funció és un bloc de codi reutilitzable que realitza una tasca concreta.

---

### Declaració d’una funció

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

// NO executa la funció
console.log(saludar);

// SÍ executa la funció
saludar();
```

```javascript
// Eixida:
[Function: saludar]
Hola!
```

On:

* `saludar` → és la funció (el codi guardat)
* `saludar()` → executa la funció

---

### Funcions amb paràmetres

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

---

### Paràmetre vs argument

```javascript
function saludar(nom) { // paràmetre
    console.log("Hola, " + nom);
}

saludar("Marc"); // argument
```

* **Paràmetre** → variable dins de la funció
* **Argument** → valor que passem en executar-la

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

### Retornar un valor (return)

Les funcions poden retornar un resultat utilitzant `return`.

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

On:

* `return` envia el resultat fora de la funció
* permet utilitzar-lo després

---

### Diferència: return vs console.log

```javascript
function suma1(a, b) {
    console.log(a + b);
}

function suma2(a, b) {
    return a + b;
}

const r1 = suma1(2, 3);
const r2 = suma2(2, 3);

console.log(r1);
console.log(r2);
```

```javascript
// Eixida:
5
undefined
5
```

On:

* `console.log()` → només mostra
* `return` → retorna el valor

---

### Important: funció sense return

Si no utilitzem `return`, la funció retorna `undefined`.

```javascript
function suma(a, b) {
    console.log(a + b);
}

const resultat = suma(2, 3);
console.log(resultat);
```

```javascript
// Eixida:
5
undefined
```

---

### Error  habitual

```javascript
function doble(num) {
    console.log(num * 2);
}

const resultat = doble(5) + 10;

console.log(resultat);
```

```javascript
// Eixida:
10
NaN
```

### Explicació

* la funció retorna `undefined`
* `undefined + 10` → `NaN`

Correcte:

```javascript
function doble(num) {
    return num * 2;
}
```
## Funcions com a valors

En JavaScript, les funcions són valors.

Això significa que podem:

* guardar-les en variables
* passar-les com a paràmetres

Es a dir, **“una funció és un valor igual que un número”**

---

### Funcions anònimes (Function Expression)

Una funció anònima és una funció **sense nom** que es guarda dins d’una variable.

---

### Com es crea

```javascript
const saludar = function(nom) {
    console.log("Hola, " + nom + "!");
};
```

En este cas:

* `function(nom) { ... }` crea una funció
* la funció no té nom
* es guarda dins de la variable `saludar`

---

### Què hi ha dins de la variable

```javascript
console.log(saludar);
```

```javascript
// Eixida:
[Function]
```

Açò indica que:

* `saludar` conté una funció
* encara no s’ha executat res

---

### Ús

```javascript
saludar("Marc");
```

```javascript
// Eixida:
Hola, Marc!
```

---

### Què està passant pas a pas

Quan fem:

```javascript
saludar("Marc");
```

1. JavaScript busca la variable `saludar`
2. dins de `saludar` hi ha una funció
3. els parèntesis `()` fan que la funció s’execute
4. `"Marc"` es passa com a valor del paràmetre `nom`
5. s’executa `console.log(...)`

---

### Idea clau

* `saludar` → és la funció guardada
* `saludar()` → executa la funció

---

### Comparació

```javascript
// Funció normal
function saludar(nom) {
    console.log("Hola, " + nom);
}

// Funció anònima
const saludar2 = function(nom) {
    console.log("Hola, " + nom);
};

saludar("Anna");
saludar2("Anna");
```

```javascript
// Eixida:
Hola, Anna
Hola, Anna
```

Les dues:

* fan el mateix
* s’executen igual

Només canvia la forma de crear-les.

---

## Funcions com a paràmetres

Podem passar una funció a una altra funció.

---

### Exemple

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

console.log(operacio(2, 3, sumar));
console.log(operacio(2, 3, multiplicar));
```

```javascript
// Eixida:
5
6
```


> **Estem passant la funció, no executant-la**
---

### Què està passant pas a pas

```javascript
operacio(2, 3, sumar);
```

1. `sumar` és una funció
2. NO hi ha `()`, per tant NO s’executa
3. es passa com a valor a la funció `operacio`

Dins de `operacio`:

```javascript
function operacio(a, b, func) {
    return func(a, b);
}
```

4. `func` conté la funció `sumar`
5. `func(a, b)` és equivalent a escriure:

```javascript
sumar(2, 3);
```

6. `sumar(2, 3)` retorna `5`
7. `operacio` retorna `5`

---

### Idea clau

* `sumar` → passem la funció
* `sumar()` → executaríem la funció

---

### Error habitual

```javascript
function operacio(a, b, func) {
    return func(a, b);
}

const sumar = function(x, y) {
    return x + y;
};

console.log(operacio(2, 3, sumar()));
```

```javascript
// Eixida:
Error (func no és una funció)
```

---

### Què està passant en l’error

```javascript
operacio(2, 3, sumar());
```

1. `sumar()` s’executa immediatament
2. `sumar(2, 3)` retorna `5`
3. realment s’està fent:

```javascript
operacio(2, 3, 5);
```

4. dins de `operacio`, `func` val `5`
5. `func(a, b)` intenta fer `5(2, 3)`
6. això provoca un error

---

### Funcions de fletxa (Arrow Functions)

Les **arrow functions** són una forma més curta d’escriure funcions.

---

### Comparativa amb funció normal

```javascript
// Funció normal
const suma1 = function(a, b) {
    return a + b;
};

// Arrow function
const suma2 = (a, b) => {
    return a + b;
};

console.log(suma1(2, 3));
console.log(suma2(2, 3));
```

```javascript
// Eixida:
5
5
```

Les dues funcions:

* fan el mateix
* tenen el mateix comportament

Només canvia la sintaxi.

---

### Forma reduïda

```javascript
const suma = (a, b) => a + b;

console.log(suma(2, 3));
```

```javascript
// Eixida:
5
```

---

### Què està passant

En este cas:

```javascript
(a, b) => a + b
```

és equivalent a:

```javascript
function(a, b) {
    return a + b;
}
```

---

### Un sol paràmetre

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

### Explicació clara

* `=>` substitueix `function`
* si hi ha una sola línia → no cal `return`
* retorna automàticament el resultat

---

## Exemple amb arrays

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

---

### Què està passant

```javascript
numeros.forEach(num => {
    console.log(num);
});
```

1. `forEach` recorre l’array
2. en cada iteració, crida la funció
3. `num` pren cada valor:

```javascript
num = 1 → es mostra 1  
num = 2 → es mostra 2  
num = 3 → es mostra 3  
```

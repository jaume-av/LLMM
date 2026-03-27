---

title: 3.- Fetch i JSON
parent: 5.- JavaScript
layout: default
nav_order: 30
has_children: true

---




# Fetch i JSON

Fins ara hem treballat amb dades dins del codi:

```javascript
const noms = ["Anna", "Marc", "Pau"];
```

I hem aprés a utilitzar el DOM per convertir estes dades en HTML.

Ara farem un canvi important:

**les dades no estaran dins del codi, sinó en un fitxer extern**

Per a obtindre estes dades utilitzem **fetch**.

---

## JSON com a font de dades

Un fitxer JSON conté dades.

Per exemple, `dades.json`:

```json
[
    { "nom": "Anna", "edat": 17 },
    { "nom": "Marc", "edat": 18 },
    { "nom": "Pau", "edat": 16 }
]
```

Este fitxer:

* no és JavaScript
* però JavaScript el pot llegir
* es convertirà en un array d’objectes

---

## Exemple bàsic amb fetch

```javascript
fetch("dades.json")
    .then(resposta => resposta.json())
    .then(dades => {
        console.log(dades);
    });
```

```javascript
// Eixida:
[
  { nom: "Anna", edat: 17 },
  { nom: "Marc", edat: 18 },
  { nom: "Pau", edat: 16 }
]
```

---

## Què retorna fetch

```javascript
const resultat = fetch("dades.json");
console.log(resultat);
```

```javascript
// Eixida:
Promise { <pending> }
```

`fetch` retorna una **Promise**, no les dades directament.

Això significa que:

* la petició està en procés
* encara no tenim les dades

---

## Procés d’execució

### 1. Fer la petició

```javascript
fetch("dades.json");
```

* Demanem el fitxer `dades.json`
* Esta operació tarda un temps

---

### 2. Rebre la resposta

```javascript
.then(resposta => resposta.json())
```

* `resposta` és el que torna el servidor
* Encara no són les dades finals
* `.json()` transforma la resposta en un objecte JavaScript

---

### 3. Treballar amb les dades

```javascript
.then(dades => {
    console.log(dades);
});
```

* `dades` conté el contingut del JSON
* Ara sí podem treballar amb arrays i objectes

---

## Seqüència del procés

Fetch → resposta → JSON → objecte JavaScript

---

## Execució asíncrona

```javascript
fetch("dades.json")
    .then(res => res.json())
    .then(dades => {
        console.log(dades);
    });

console.log("Fi del programa");
```

```javascript
// Eixida:
Fi del programa
[... dades ...]
```

1. JavaScript comença a executar el codi
2. Fa `fetch`, però la resposta tarda
3. El programa continua executant-se
4. Es mostra `"Fi del programa"`
5. Quan arriben les dades, s’executa el `.then()`

Fetch és asíncron: el programa no espera la resposta.

---

## Error habitual

```javascript
const dades = fetch("dades.json");
console.log(dades);
```

```javascript
// Eixida:
Promise { <pending> }
```

---

## Error molt habitual

```javascript
let dades;

fetch("dades.json")
    .then(res => res.json())
    .then(resultat => {
        dades = resultat;
    });

console.log(dades);
```

```javascript
// Eixida:
undefined
```

1. `fetch` comença la petició
2. El programa continua executant-se
3. `console.log(dades)` s’executa abans que arriben les dades
4. `dades` encara no té valor

---

## Forma correcta

```javascript
fetch("dades.json")
    .then(res => res.json())
    .then(dades => {
        console.log(dades);
    });
```

Les dades només estan disponibles dins del `.then()`.

---

## Utilitzar les dades en el DOM

Ara fem el mateix que abans amb arrays, però amb dades externes.

---

### HTML

```html
<ul id="llista"></ul>
```

---

### JavaScript

```javascript
fetch("dades.json")
    .then(res => res.json())
    .then(dades => {

        const llista = document.querySelector("#llista");

        dades.forEach(alumne => {
            const li = document.createElement("li");
            li.textContent = alumne.nom + " té " + alumne.edat + " anys";
            llista.appendChild(li);
        });

    });
```

---

### Resultat en la pàgina

```html
<li>Anna té 17 anys</li>
<li>Marc té 18 anys</li>
<li>Pau té 16 anys</li>
```

---

## Procés complet amb DOM

1. Obtenim dades amb fetch
2. Les convertim a JSON
3. Seleccionem el `<ul>`
4. Recorrem les dades amb `forEach`
5. En cada iteració:

   * creem un `<li>`
   * assignem el text
   * l’afegim al DOM

El codi és el mateix que abans, només hem canviat d’on venen les dades.

---

## Exemple amb array simple

Fitxer `noms.json`:

```json
["Anna", "Marc", "Pau"]
```

JavaScript:

```javascript
fetch("noms.json")
    .then(res => res.json())
    .then(noms => {

        const llista = document.querySelector("#llista");

        noms.forEach(nom => {
            const li = document.createElement("li");
            li.textContent = nom;
            llista.appendChild(li);
        });

    });
```

---

## Relació amb el que ja sabem

Abans:

```javascript
const noms = ["Anna", "Marc", "Pau"];
```

Ara:

```javascript
fetch("noms.json")
```

Només canvia d’on venen les dades.

---

## Connexió amb Alpine

Fins ara:

* seleccionem elements
* creem elements
* afegim elements manualment

Amb Alpine:

* no utilitzarem `createElement`
* no utilitzarem `appendChild`
* treballarem amb dades i HTML declaratiu

---

## Resum

* `fetch()` obté dades externes
* retorna una Promise (no les dades directament)
* `.json()` transforma la resposta
* `.then()` s’executa quan arriben les dades
* el codi no espera (asincronia)
* només podem usar les dades dins del `.then()`
* podem generar HTML a partir de dades JSON

---

Este és el pas previ per treballar amb dades reals i simplificar el procés amb Alpine.

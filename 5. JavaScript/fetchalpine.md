

## 8. Fetch i JSON

Fins ara hem treballat amb dades dins del codi:

```javascript
const noms = ["Anna", "Marc", "Pau"];
```

I hem aprés a utilitzar el DOM per convertir estes dades en HTML.

Ara farem un canvi important:

**les dades no estaran dins del codi, sinó en un fitxer extern**

Per a obtindre estes dades utilitzem **fetch**.

---

### Idea clau

**Amb fetch podem obtindre dades externes (normalment en format JSON).**

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

👉 Este fitxer no és JavaScript, però JavaScript el pot llegir.

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

## Què està passant pas a pas

### 1. Fer la petició

```javascript
fetch("dades.json");
```

* Demanem el fitxer `dades.json`
* Esta operació tarda un temps (no és immediata)

---

### 2. Rebre la resposta

```javascript
.then(resposta => resposta.json())
```

* `resposta` és el que torna el servidor
* Encara **no són les dades**
* `.json()` transforma la resposta en un objecte JavaScript

---

### 3. Treballar amb les dades

```javascript
.then(dades => {
    console.log(dades);
});
```

* `dades` conté el contingut del JSON
* Ara sí podem treballar amb elles com amb arrays o objectes

---

### Idea clau del procés

**Fetch → resposta → JSON → objecte JavaScript**

---

## Important: el codi no és immediat

Este és el punt més difícil del tema.

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

---

### Què està passant

1. JavaScript comença a executar el codi
2. Fa `fetch`, però la resposta tarda
3. El programa continua executant-se
4. Es mostra `"Fi del programa"`
5. Quan arriben les dades, s’executa el `.then()`

---

### Idea clau

**Fetch és asíncron: el programa no espera la resposta**

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

### Què significa això

* `fetch` retorna una **Promise**
* No retorna directament les dades
* Les dades encara no han arribat

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

---

### Què està passant pas a pas

1. `fetch` comença la petició
2. El programa continua executant-se
3. `console.log(dades)` s’executa abans que arriben les dades
4. `dades` encara no té valor

---

### Forma correcta

```javascript
fetch("dades.json")
    .then(res => res.json())
    .then(dades => {
        console.log(dades);
    });
```

---

### Idea clau

**Només podem utilitzar les dades dins del `.then()`**

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

### Què està passant pas a pas

1. Obtenim dades amb fetch
2. Les convertim a JSON
3. Seleccionem el `<ul>`
4. Recorrem les dades amb `forEach`
5. En cada iteració:

   * creem un `<li>`
   * assignem el text
   * l’afegim al DOM

---

### Idea clau

**El codi és el mateix que abans, només canvia l’origen de les dades**

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

👉 Només canvia d’on venen les dades

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

### Idea final del tema

**Fetch ens permet separar dades i codi**

* dades → JSON
* codi → JavaScript

Este és el pas necessari abans d’utilitzar Alpine.

---

## Resum

* `fetch()` obté dades externes
* `.json()` transforma la resposta
* `.then()` s’executa quan arriben les dades
* el codi no espera (asincronia)
* només podem usar les dades dins del `.then()`
* podem generar HTML a partir de dades JSON

---

Este és el pas previ per treballar amb dades reals i simplificar el procés amb Alpine.







## 9. Introducció a Alpine.js

Fins ara hem fet tot el procés manualment:

* obtenim dades (arrays o JSON amb fetch)
* recorrem les dades amb `forEach`
* creem elements amb `createElement`
* els afegim amb `appendChild`

Això funciona, però implica molt de codi.

Ara farem un canvi important:

**deixar que el HTML es genere a partir de les dades**

Per a això utilitzem **Alpine.js**.

---

### Idea clau

**Amb Alpine, el HTML es genera automàticament a partir de les dades.**

---

## Afegir Alpine al projecte

Per utilitzar Alpine, hem d’incloure la llibreria.

```html
<script src="https://unpkg.com/alpinejs" defer></script>
```

---

### Què està passant

* carreguem Alpine des d’internet
* `defer` fa que s’execute després de carregar el HTML

---

## x-data → definir dades

Amb Alpine, les dades es definixen dins del HTML.

---

### Exemple bàsic

```html
<div x-data="{ missatge: 'Hola món' }">
    <p x-text="missatge"></p>
</div>
```

---

### Resultat en la pàgina

```text
Hola món
```

---

### Què està passant pas a pas

1. `x-data` crea un espai de dades
2. definim una propietat: `missatge`
3. `x-text="missatge"` mostra el valor
4. el `<p>` es genera automàticament amb el text

---

### Idea clau

**x-data guarda les dades, x-text les mostra**

---

## Treballar amb arrays

Podem fer el mateix que fèiem amb `forEach`, però sense JavaScript manual.

---

### Exemple

```html
<ul x-data="{ noms: ['Anna', 'Marc', 'Pau'] }">
    <template x-for="nom in noms">
        <li x-text="nom"></li>
    </template>
</ul>
```

---

### Resultat en la pàgina

```html
<li>Anna</li>
<li>Marc</li>
<li>Pau</li>
```

---

### Què està passant pas a pas

1. `x-data` conté un array
2. `x-for` recorre l’array
3. per cada element:

   * crea un `<li>`
   * mostra el valor amb `x-text`

---

### Comparació amb DOM

Abans:

```javascript
noms.forEach(nom => {
    const li = document.createElement("li");
    li.textContent = nom;
    llista.appendChild(li);
});
```

Ara:

```html
<template x-for="nom in noms">
    <li x-text="nom"></li>
</template>
```

---

### Idea clau

**Alpine elimina la necessitat de crear elements manualment**

---

## Treballar amb objectes

També podem usar objectes.

---

### Exemple

```html
<div x-data="{ alumne: { nom: 'Anna', edat: 17 } }">
    <p x-text="alumne.nom"></p>
    <p x-text="alumne.edat"></p>
</div>
```

---

### Resultat

```text
Anna
17
```

---

### Què està passant

* `alumne` és un objecte
* accedim a propietats amb `.`
* Alpine mostra els valors

---

## Esdeveniments amb Alpine

També podem gestionar accions de l’usuari.

---

### Exemple

```html
<div x-data="{ comptador: 0 }">
    <button x-on:click="comptador++">Sumar</button>
    <p x-text="comptador"></p>
</div>
```

---

### Resultat

Cada clic incrementa el valor.

---

### Què està passant

1. `comptador` comença en 0
2. `x-on:click` executa codi quan fem clic
3. `comptador++` incrementa el valor
4. `x-text` actualitza el contingut

---

### Forma reduïda

```html
<button @click="comptador++">Sumar</button>
```

---

### Idea clau

**Alpine connecta dades i esdeveniments directament en el HTML**

---

## Connexió amb fetch

Podem combinar Alpine amb dades externes.

---

### Exemple bàsic

```html
<div x-data="{ noms: [] }" x-init="
    fetch('noms.json')
        .then(res => res.json())
        .then(dades => noms = dades)
">
    <template x-for="nom in noms">
        <p x-text="nom"></p>
    </template>
</div>
```

---

### Què està passant pas a pas

1. `x-data` crea un array buit
2. `x-init` s’executa en carregar la pàgina
3. `fetch` obté les dades
4. assignem `noms = dades`
5. Alpine actualitza el HTML automàticament

---

### Idea clau

**Quan canvien les dades, Alpine actualitza el HTML automàticament**

---

## Canvi mental important

Fins ara:

* JavaScript creava el HTML

Ara:

* el HTML depén de les dades

---

### Abans (DOM)

```javascript
const li = document.createElement("li");
li.textContent = nom;
```

---

### Ara (Alpine)

```html
<li x-text="nom"></li>
```

---

## Resum

* `x-data` → definix dades
* `x-text` → mostra dades
* `x-for` → recorre arrays
* `x-on` / `@click` → esdeveniments
* `x-init` → executar codi inicial
* Alpine elimina la manipulació manual del DOM

---

## Idea final del tema

Amb Alpine:

* deixem de crear HTML amb JavaScript
* definim dades i el HTML es genera automàticament

---

Este és el pas final del procés:

**HTML → DOM → JS → fetch → Alpine**

A partir d’ací, el treball es centra en:

* dades
* estructura HTML
* no en manipulació manual del DOM


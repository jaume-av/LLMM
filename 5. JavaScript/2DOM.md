---

title: 2.- Document Object Model (DOM)
parent: 5.- JavaScript
layout: default
nav_order: 20
has_children: true

---

# Document Object Model

Les sigles **DOM** signifiquen *Document Object Model*, o el que és el mateix, l'estructura del document HTML.

- El DOM és una **API de W3C** que permet que els programes i els scripts d’una pàgina web actualitzen i accedisquen tant als continguts, els estils i l’estructura d’un document **HTML** o **XML**. 

- Per tant, **el DOM ens permet accedir dinàmicament a les pàgines web**, interactuar i respondre a les accions dels usuaris (com prémer un botó, moure el ratolí, fer clic en una part del document, escriure un text, etc.), sense haver de **recarregar** la pàgina.

Una pàgina **HTML** està formada per múltiples etiquetes **HTML**, anidades una dins de l'altra, formant un arbre d'etiquetes relacionades entre si, que es denomina **arbre DOM** (o simplement **DOM**).

![alt text](imatges/esquemaDom.webp)


Quan ens referim al **DOM**, ens referim a **aquesta estructura d'arbre**, que ens permet accedir i modificar els elements de l'**HTML** des de **JavaScript**, afegint noves etiquetes, modificant o eliminant altres, canviant els seus atributs **HTML**, afegint classes, canviant el contingut de text, etc.

En **JavaScript**, la forma d'accedir al **DOM** és a través d'un objecte anomenat `document`, que representa l'arbre **DOM** de la pàgina. En el seu interior poden existir diversos tipus d'elements, però principalment seran **ELEMENT** o **NODE**.

---

## Principals Conceptes del DOM

### Document
El **document** és l'objecte principal del **DOM**, que representa tot el document **HTML** o **XML** carregat al navegador. És el punt d'entrada principal per accedir als altres elements del **DOM**.

```javascript
// Accedim a l'objecte document
const doc = document;
// Podem utilitzar-lo per accedir a altres elements
const titol = doc.getElementById('titol');
```
A l’exemple, accedim a l'objecte `document`, que representa el document **HTML** actual. Després, utilitzem el mètode `getElementById` per obtenir una referència al títol de la pàgina utilitzant el seu identificador `"titol"`.

### Node
En el **DOM**, cada element, atribut o text del document és considerat un **node**. Això inclou no només els elements **HTML**, sinó també els nodes de text i els atributs associats amb els elements.

```javascript
// Accedim a un node de text
const textNode = document.createTextNode('Este és un text');
// Creem un element
const element = document.createElement('div');
// Afegim el node de text com a fill de l'element
element.appendChild(textNode);
```

### Element
Els **elements** són un tipus especial de **node** que representa les etiquetes **HTML** com `<div>`, `<p>`, `<span>`, etc. Cada element pot tindre atributs i contingut de text associat.

```javascript
// Creem un nou element div
const divElement = document.createElement('div');
// Afegim un atribut a l'element
divElement.setAttribute('id', 'nouDiv');
// Afegim contingut de text a l'element
divElement.textContent = 'Aquest és un nou div';
// Afegim l'element al document
document.body.appendChild(divElement);
```

A l'exemple anterior, creem un nou`div` utilitzant el mètode **createElement**. Després, afegim l'atribut `id`al nou `div` amb `setAtrribute`. Assignem contingut de text a l'element utilitzant la propietat `textContent` i finalment, afegim el text al cos del document amb `appendChild`


### Atribut
Un **atribut** és una característica específica d'un element **HTML**, com l'atribut `id` o `class`. Els atributs proporcionen informació addicional sobre l'element i poden ser utilitzats per identificar o estilitzar l'element.

```javascript
// Accedim a un element pel seu id
const element = document.getElementById('meuElement');
// Canviem un atribut de l'element
element.setAttribute('alt', 'Nova descripció');
```
A  l'exemple anterior, accedim a un element utilitzant el seu `id` amb **getElementById**. A continuació, utilitzem **setAttribute** per canviar
l'atribut `alt` de l'element a "Nova descripció"

### Nivell d'Element
El **nivell d'element** fa referència a la relació jeràrquica entre els elements del document, que es representa com un arbre en el **DOM**. Cada element té un **pare** (excepte el `document`), i pot tindre **fills** i **germans**.

```javascript
// Accedim al pare d'un element
const fill = document.getElementById('fill');
const pare = fill.parentNode;
console.log('El pare de l\'element fill és:', pare.tagName);
```

En este cas, accedim a l'element **fill** amb l'id "fill". A continuació, utilitzem la propietat **parentNode** per obtenir una
referència al pare de l'element. Finalment, mostrem el **tag name** del pare amb tagName.


### Selecció d'Elements
La **selecció d'elements** és la capacitat de trobar i accedir als elements del **DOM** utilitzant mètodes com `getElementById`, `getElementsByClassName`, `getElementsByTagName`, `querySelector` i `querySelectorAll`.
Estos mètodes permeten
seleccionar elements específics segons els seus identificadors, classes, noms d'etiqueta, etc.

```javascript
// Seleccionem un element per id
const elementId = document.getElementById('idElement');
// Seleccionem elements per classe
const elementsClasse = document.getElementsByClassName('classeElement');
// Seleccionem elements per etiqueta
const elementsEtiqueta = document.getElementsByTagName('p');
// Utilitzem selectors CSS
const elementSelector = document.querySelector('.selectorClasse');
const elementsSelector = document.querySelectorAll('p');
```
A l'anterior exemple, es mostren diferents mètodes per seleccionar elements.
- **getElementById** selecciona un únic element per l'ID especificat.
- **getElementsByClassName** selecciona tots els elements amb la classe especificada.
- **getElementsByTagName** selecciona tots els elements amb l'etiqueta especificada.
- **querySelector** selecciona el primer element que coincideix amb el selector CSS especificat.
- **querySelectorAll** selecciona tots els elements que coincideixen amb el selector CSS especificat

### Manipulació del DOM
La **manipulació del DOM** és la capacitat de modificar l'estructura, l'estil i el contingut del document, afegint o eliminant elements, canviant atributs i text, modificant estils **CSS**, i altres canvis que poden afectar la representació visual o la funcionalitat de la pàgina web.

```javascript
// Creem un nou element
const nouElement = document.createElement('div');
// Afegim el nou element com a fill d'un altre element
pare.appendChild(nouElement);
// Eliminem un element
pare.removeChild(fill);
```

En este cas, estem creant un nou element  utilitzant `createElement` i l'afegim com a fill d'un altre element utilitzant `appendChild`. Després, eliminem un element del seu pare utilitzant removeChild.

### Esdeveniments del DOM
Els **esdeveniments** són accions que es produeixen en el navegador, com clics de ratolí, premses de tecles o càrregues de pàgines.

```js
// Quan fem clic en un element, es mostra un missatge
document.getElementById('meuElement').addEventListener('click', function() {
    alert('S\'ha clicat l\'element!');
});
```

Altres exemples d'esdeveniments:

```js
// Quan passem el ratolí per damunt
document.getElementById('meuElement').addEventListener('mouseenter', function() {
    this.style.backgroundColor = 'yellow';
});

// Quan escrivim en un input
document.getElementById('campText').addEventListener('keyup', function() {
    console.log('Has escrit: ' + this.value);
});
```
---


## Exemple Complet:

Ací tens l'exemple separat en **tres fitxers**:  

- `index.html` → Conté l'estructura HTML de la pàgina.  
- `styles.css` → Conté els estils CSS per a donar format a la llista de tasques.  
- `script.js` → Conté el codi JavaScript per a gestionar les tasques i manipular el DOM.  

---

### HTML
```html
<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Llista de Tasques</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <h2>Llista de Tasques</h2>
    <input type="text" id="novaTasca" placeholder="Escriu una tasca">
    <button id="afegir">Afegir Tasca</button>
    <ul id="llistaTasques"></ul>

    <script src="script.js"></script>

</body>
</html>
```

---

### CSS
```css
body {
    font-family: Arial, sans-serif;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    display: flex;
    justify-content: space-between;
    background: #f4f4f4;
    margin: 5px 0;
    padding: 10px;
    border-radius: 5px;
}

.completed {
    text-decoration: line-through;
    color: gray;
}

button {
    margin-left: 10px;
    cursor: pointer;
    border: none;
    padding: 5px 10px;
    border-radius: 3px;
}

button:hover {
    opacity: 0.7;
}
```

---

### JavaScript
```js
// Seleccionem els elements principals
const inputTasca = document.getElementById('novaTasca');
const botoAfegir = document.getElementById('afegir');
const llistaTasques = document.getElementById('llistaTasques');

// Funció per afegir una nova tasca
function afegirTasca() {
    const text = inputTasca.value.trim(); // Eliminem espais en blanc

    if (text === "") return; // Evitem afegir tasques buides

    // Creem un nou element <li>
    const novaTasca = document.createElement('li');
    novaTasca.textContent = text;

    // Creem botó de completar
    const botoCompletar = document.createElement('button');
    botoCompletar.textContent = '✔';
    botoCompletar.onclick = function() {
        novaTasca.classList.toggle('completed'); // Marca/desmarca com a completada
    };

    // Creem botó d'eliminar
    const botoEliminar = document.createElement('button');
    botoEliminar.textContent = '🗑';
    botoEliminar.onclick = function() {
        llistaTasques.removeChild(novaTasca); // Eliminem la tasca
    };

    // Afegim els botons al <li>
    novaTasca.appendChild(botoCompletar);
    novaTasca.appendChild(botoEliminar);

    // Afegim la tasca a la llista
    llistaTasques.appendChild(novaTasca);

    // Buidem l'input
    inputTasca.value = "";
}

// Afegim esdeveniment al botó "Afegir"
botoAfegir.addEventListener('click', afegirTasca);

// També afegim la tasca si premem "Enter"
inputTasca.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        afegirTasca();
    }
});
```

```

En este exemple, afegim un gestor d'esdeveniments de clic a l'element amb l'id **"meuElement"**. Quan aquest element siga clicat, es mostrarà un missatge d'alerta que indica que s'ha clicat l'element.

---

**A l'exemple anterior:**


- **`index.html`** conté l'estructura de la pàgina, amb un camp `<input>` per a introduir tasques, un `<button>` per afegir-les i una llista `<ul>` on es mostraran.
- **`styles.css`** defineix els estils, incloent un aspecte diferenciat per a les tasques completades (`.completed`).
- **`script.js`** conté la lògica per a afegir, marcar i eliminar tasques:
  - Selecciona elements del DOM (`getElementById`).
  - Afig elements nous (`createElement`, `appendChild`).
  - Modifica atributs (`classList.toggle`).
  - Gestió d’esdeveniments (`addEventListener` per a clics i tecla `Enter`).

## **Per què usarem jQuery?**
Encara que en **JavaScript** podem manipular el DOM, la sintaxi pot ser **llarga i complexa**.  
Per això, en les pròximes classes treballarem amb **jQuery**, que simplifica molt aquestes tasques.

## Amb jQuery:
- La selecció d’elements és més curta i clara:

  ```js
  $("#meuElement").click(function() {
      alert("S'ha clicat l'element!");
  });
  ```

- La manipulació del DOM és més eficient.
- Els esdeveniments són més fàcils de gestionar.

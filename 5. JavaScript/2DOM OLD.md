

{: .text-center }
![alt text](imatges/DOM.png)

Les sigles **DOM** signifiquen *Document Object Model*, o el que és el mateix, la manera com el navegador representa l'estructura d’un document **HTML** (o **XML**) en forma d’objectes.

- El DOM és una **API definida per estàndards** (W3C) que permet que els programes i els scripts d’una pàgina web **accedisquen** i **actualitzen** els continguts, els estils i l’estructura d’un document **HTML** o **XML**.

- Per tant, **el DOM ens permet accedir dinàmicament a les pàgines web**, interactuar i respondre a les accions dels usuaris (com prémer un botó, moure el ratolí, fer clic en una part del document, escriure un text, etc.), sense haver de **recarregar** la pàgina.

Una pàgina **HTML** està formada per múltiples etiquetes **HTML**, anidades una dins de l'altra, formant un arbre d’etiquetes relacionades entre si, que es denomina **arbre DOM** (o simplement **DOM**).

![alt text](imatges/esquemaDom.webp)

Quan ens referim al **DOM**, ens referim a **aquesta estructura d'arbre**, que ens permet accedir i modificar els elements de l'**HTML** des de **JavaScript**. Per exemple:

- Afegir noves etiquetes.
- Modificar o eliminar etiquetes existents.
- Canviar atributs HTML.
- Afegir o llevar classes.
- Canviar contingut de text.
- Respondre a esdeveniments de l’usuari.

En **JavaScript**, la forma d'accedir al **DOM** és a través d'un objecte anomenat `document`, que representa l'arbre **DOM** de la pàgina.

En el DOM hi ha molts tipus de nodes, però els dos conceptes més importants per començar són:

- **Node**: qualsevol peça del DOM (elements, text, etc.).
- **Element**: un node que és una etiqueta HTML (com `<div>`, `<p>`, `<input>`, etc.).

---

## Principals conceptes del DOM

### Document

El **document** és l'objecte principal del **DOM**, que representa tot el document **HTML** (o **XML**) carregat al navegador. És el punt d'entrada principal per accedir als altres elements del **DOM**.

```javascript
// Accedim a l'objecte document
const doc = document;

// Podem utilitzar-lo per accedir a altres elements
const titol = doc.getElementById('titol');
````

A l’exemple, accedim a l'objecte `document`, que representa el document **HTML** actual. Després, utilitzem el mètode `getElementById` per obtindre una referència al títol de la pàgina utilitzant el seu identificador `"titol"`.

Nota important:

* `getElementById` és un mètode molt utilitzat i funciona bé.
* En JavaScript modern també utilitzarem sovint `querySelector`, perquè ens permet usar selectors CSS (ho veurem més avall).

---

### Node

En el **DOM**, cada element, atribut o text del document és considerat un **node**. Açò inclou no només els elements **HTML**, sinó també els nodes de text i altres nodes interns.

En un HTML, fins i tot els espais i salts de línia poden generar nodes de text. Per això, quan treballem amb el DOM, és normal trobar diferències entre “tots els nodes” i “tots els elements”.

```javascript
// Accedim a un node de text
const textNode = document.createTextNode('Este és un text');

// Creem un element
const element = document.createElement('div');

// Afegim el node de text com a fill de l'element
element.appendChild(textNode);
```

En este exemple:

* `createTextNode` crea un node de text.
* `createElement` crea un element (que també és un node).
* `appendChild` inserix el node de text dins de l’element com a fill.

---

### Element

Els **elements** són un tipus especial de **node** que representa les etiquetes **HTML** com `<div>`, `<p>`, `<span>`, etc. Cada element pot tindre atributs i contingut associat.

```javascript
// Creem un nou element div
const divElement = document.createElement('div');

// Afegim un atribut a l'element
divElement.setAttribute('id', 'div');

// Afegim contingut de text a l'element
divElement.textContent = 'Aquest és un nou div';

// Afegim l'element al document
document.body.appendChild(divElement);
```

A l'exemple anterior:

* Creem un nou `div` utilitzant el mètode `createElement`.
* Afegim l'atribut `id` amb `setAttribute`.
* Assignem text amb `textContent`.
* Finalment, afegim l’element al cos del document amb `appendChild`.

Nota important:

* `textContent` és la forma recomanada per posar text.
* `innerHTML` també existix i permet inserir HTML, però cal usar-lo amb cura (ho comentarem en l’apartat de manipulació).

---

### Atribut

Un **atribut** és una característica específica d'un element **HTML**, com `id`, `class`, `src`, `href`, `alt`, etc. Els atributs proporcionen informació addicional i poden ser utilitzats per identificar, configurar o donar estil a l'element.

```javascript
// Accedim a un element pel seu id
const element = document.getElementById('meuElement');

// Canviem un atribut de l'element
element.setAttribute('alt', 'Nova descripció');
```

A l'exemple anterior:

* Accedim a un element utilitzant el seu `id` amb `getElementById`.
* Utilitzem `setAttribute` per canviar l'atribut `alt` a "Nova descripció".

Nota important:

* `setAttribute` funciona per a qualsevol atribut.
* També existixen propietats directes com `element.id`, `element.href`, `element.value`, etc. En esta introducció ens centrarem en `setAttribute` perquè és general i fàcil d’entendre.

---

### Nivell d'element (relació jeràrquica)

El **nivell d'element** fa referència a la relació jeràrquica entre els elements del document, representada com un arbre.

Cada element té:

* Un **pare** (excepte l’arrel del document).
* Pot tindre **fills**.
* Pot tindre **germans** (altres elements que compartixen el mateix pare).

```javascript
// Accedim al pare d'un element
const fill = document.getElementById('fill');
const pare = fill.parentNode;

console.log('El pare de l\'element fill és:', pare.tagName);
```

En este cas:

* Accedim a l'element `fill` amb l'id `"fill"`.
* Utilitzem `parentNode` per obtindre una referència al pare.
* Mostrem el nom de l’etiqueta del pare amb `tagName`.

Nota important:

* `parentNode` retorna el pare com a node.
* En molts casos també podem usar `parentElement`, que retorna el pare com a element (quan el pare és una etiqueta HTML).

---

## Selecció d'elements

La **selecció d'elements** és la capacitat de trobar i accedir als elements del **DOM**.

Hi ha diverses formes de seleccionar elements:

* `getElementById`
* `getElementsByClassName`
* `getElementsByTagName`
* `querySelector`
* `querySelectorAll`

```javascript
// Seleccionem un element per id
const elementId = document.getElementById('idElement');

// Seleccionem elements per classe
const elementsClasse = document.getElementsByClassName('classeElement');

// Seleccionem elements per etiqueta
const elementsEtiqueta = document.getElementsByTagName('p');

// Utilitzem selectors CSS (forma moderna i molt habitual)
const elementSelector = document.querySelector('.selectorClasse');
const elementsSelector = document.querySelectorAll('p');
```

A l'exemple anterior:

* `getElementById` selecciona un únic element per l'ID especificat.
* `getElementsByClassName` selecciona tots els elements amb la classe especificada.
* `getElementsByTagName` selecciona tots els elements amb l'etiqueta especificada.
* `querySelector` selecciona el primer element que coincideix amb el selector CSS especificat.
* `querySelectorAll` selecciona tots els elements que coincideixen amb el selector CSS especificat.

Nota important:

* `getElementsByClassName` i `getElementsByTagName` retornen col·leccions d’elements.
* `querySelectorAll` retorna una llista d’elements que podem recórrer, per exemple, amb `forEach`.

Exemple de recorregut amb `querySelectorAll`:

```javascript
const paragrafs = document.querySelectorAll('p');

paragrafs.forEach(function(p) {
    console.log(p.textContent);
});
```

---

## Manipulació del DOM

La **manipulació del DOM** és la capacitat de modificar l'estructura, l'estil i el contingut del document.

Algunes accions típiques són:

* Afegir o eliminar elements.
* Canviar text.
* Canviar atributs.
* Afegir o llevar classes.
* Modificar estils CSS des de JavaScript.

```javascript
// Creem un nou element
const nouElement = document.createElement('div');

// Afegim el nou element com a fill d'un altre element
pare.appendChild(nouElement);

// Eliminem un element (forma clàssica)
pare.removeChild(fill);
```

En este cas:

* Creem un element amb `createElement`.
* L’afegim com a fill amb `appendChild`.
* Eliminem un element utilitzant `removeChild`.

Nota moderna:

* En JavaScript actual també podem eliminar un element directament amb `remove()`:

```javascript
// Eliminem un element (forma moderna)
fill.remove();
```

Les dos formes són correctes. En esta introducció convé conéixer les dos, perquè en materials i exemples reals poden aparéixer ambdues.

---

### Contingut de text i HTML

Quan volem canviar contingut, les propietats més habituals són:

* `textContent` per a text.
* `innerHTML` quan volem inserir HTML.

Exemples:

```javascript
const titol = document.querySelector('#titol');

// Canviem text de manera segura
titol.textContent = 'Nou títol';
```

```javascript
const contenidor = document.querySelector('#contenidor');

// Inserim HTML (cal usar-ho amb cura)
contenidor.innerHTML = '<strong>Text en negreta</strong>';
```

En general, per a una introducció:

* Preferim `textContent` quan només és text.
* Reservem `innerHTML` quan realment necessitem inserir etiquetes.

---

### Classes i estils

Una pràctica molt habitual és afegir o llevar classes CSS, perquè així el CSS continua controlant l’estil.

```javascript
const caixa = document.querySelector('#caixa');

caixa.classList.add('activa');
caixa.classList.remove('activa');
caixa.classList.toggle('activa');
```

També podem canviar estils directament des de JavaScript:

```javascript
const caixa = document.querySelector('#caixa');
caixa.style.backgroundColor = 'yellow';
```

Però, com a norma general:

* És millor controlar l’estil amb classes (`classList`) i deixar el CSS fer la seua feina.
* Els estils directes s’utilitzen per a canvis puntuals o proves ràpides.

---

## Esdeveniments del DOM

Els **esdeveniments** són accions que es produeixen en el navegador, com clics de ratolí, premses de tecles o càrregues de pàgines.

La forma moderna i recomanada de gestionar esdeveniments és amb `addEventListener`.

```javascript
// Quan fem clic en un element, es mostra un missatge
document.getElementById('meuElement').addEventListener('click', function() {
    alert('S\'ha clicat l\'element!');
});
```

Altres exemples d'esdeveniments:

```javascript
// Quan passem el ratolí per damunt
document.getElementById('meuElement').addEventListener('mouseenter', function() {
    this.style.backgroundColor = 'yellow';
});
```

```javascript
// Quan escrivim en un input
document.getElementById('campText').addEventListener('keyup', function() {
    console.log('Has escrit: ' + this.value);
});
```

Nota moderna:

* En molts casos també podem usar l’esdeveniment `input` per detectar canvis mentre escrivim:

```javascript
document.getElementById('campText').addEventListener('input', function() {
    console.log('Valor actual: ' + this.value);
});
```

En esta introducció ens quedem amb `click` i `keyup/input`, que són els més habituals al principi.

---

## Exemple complet

Ací tens l'exemple separat en **tres fitxers**:

* `index.html` conté l'estructura HTML de la pàgina.
* `styles.css` conté els estils CSS per donar format a la llista de tasques.
* `script.js` conté el codi JavaScript per gestionar les tasques i manipular el DOM.

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

```javascript
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
    botoCompletar.textContent = 'Fet';

    // Gestionem l'esdeveniment amb addEventListener (forma moderna)
    botoCompletar.addEventListener('click', function() {
        novaTasca.classList.toggle('completed'); // Marca/desmarca com a completada
    });

    // Creem botó d'eliminar
    const botoEliminar = document.createElement('button');
    botoEliminar.textContent = 'Eliminar';

    // Gestionem l'esdeveniment amb addEventListener (forma moderna)
    botoEliminar.addEventListener('click', function() {
        // Podem eliminar el <li> de dues formes
        // Forma clàssica (compatibilitat amb exemples antics):
        llistaTasques.removeChild(novaTasca);

        // Forma moderna (si es vol usar):
        // novaTasca.remove();
    });

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

En este exemple:

* Seleccionem elements del DOM (`getElementById`).
* Afegim elements nous (`createElement`, `appendChild`).
* Modifiquem classes (`classList.toggle`).
* Gestionem esdeveniments (`addEventListener` per a clics i tecla `Enter`).
* Eliminem elements (`removeChild`, i es mostra també l’alternativa moderna `remove()` com a comentari).

---

## Per què usarem jQuery

Encara que en **JavaScript** podem manipular el DOM, la sintaxi pot resultar més llarga, sobretot quan estem començant i encara no tenim agilitat amb selectors, esdeveniments i manipulació.

Per això, en el tema següent treballarem amb **jQuery**, que oferix una sintaxi més curta per a:

* Selecció d’elements.
* Manipulació del DOM.
* Gestió d’esdeveniments.

Exemple amb jQuery:

```javascript
$("#meuElement").click(function() {
    alert("S'ha clicat l'element!");
});
```

Nota important:

* Ací només presentem jQuery com a pas següent.
* En este tema ens hem centrat en entendre bé el DOM i la forma de treballar amb JavaScript.


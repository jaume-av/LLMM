## El DOM (Document Object Model)

Fins ara hem treballat amb dos parts separades:

* **HTML**, que ens permet crear l’estructura de la pàgina
* **JavaScript**, que ens permet treballar amb dades i amb lògica

Ara necessitem unir estes dos parts.

Hem de saber com accedir als elements HTML des de JavaScript per poder:

* llegir-los
* modificar-los
* crear-ne de nous
* eliminar-los
* reaccionar a les accions de l’usuari

Per a això utilitzem el **DOM**.

Una manera senzilla d’entendre-ho és esta:

**el DOM és el HTML convertit en objectes que JavaScript pot utilitzar**

Quan el navegador llig un document HTML, no treballa amb el text del fitxer tal com l’hem escrit nosaltres. El que fa és construir una estructura interna del document. Esta estructura és la que JavaScript pot manipular.

---

## Què és el DOM

Si tenim este HTML:

```html
<h1 id="titol">Hola</h1>
<p>Benvinguts</p>
```

el navegador no guarda simplement “una línia amb un h1 i una línia amb un p”.

El que fa és crear una representació interna dels elements:

* un element `h1`
* un element `p`
* els seus atributs
* el seu text

Això és el **DOM**.

Per tant, quan treballem amb el DOM, no treballem amb el text del fitxer HTML, sinó amb **objectes** que representen els elements de la pàgina.

---

## Idea clau del tema

Hem de tindre clara esta idea des del principi:

**JavaScript no modifica el fitxer HTML original. JavaScript modifica el DOM que el navegador ha construït a partir del HTML.**

Això ens permet canviar la pàgina mentre està oberta en el navegador.

---

## `document`: punt d’entrada al DOM

Quan treballem amb el DOM, quasi sempre comencem amb esta paraula:

```javascript
document
```

### Què és `document`

**`document` és un objecte que representa tota la pàgina web.**

És el punt d’entrada al DOM.

Això vol dir que, a partir de `document`, podem:

* buscar elements
* crear elements
* modificar parts del document

### Exemple

```javascript
console.log(document);
```

```javascript
// Eixida:
#document
```

### Què hem de tindre clar

* `document` ja existix
* no l’hem de crear nosaltres
* representa tota la pàgina
* des d’ell podem accedir als elements HTML

### Idea clau

**Tot el treball amb el DOM comença des de `document`.**

---

## Seleccionar elements

Si volem modificar un element, primer l’hem de seleccionar.

És a dir, hem de dir-li a JavaScript quin element volem utilitzar.

---

## `querySelector()`

La forma més habitual de seleccionar un element és:

```javascript
document.querySelector(...)
```

### Exemple

HTML:

```html
<h1 id="titol">Hola</h1>
```

JavaScript:

```javascript
const titol = document.querySelector("#titol");
console.log(titol);
```

```javascript
// Eixida:
<h1 id="titol">Hola</h1>
```

### Què està passant pas a pas

1. `document` representa tota la pàgina
2. `querySelector("#titol")` busca l’element amb id `titol`
3. el resultat es guarda en la variable `titol`

### Què és `titol` realment

Ací hi ha un punt molt important.

**`titol` no és el text “Hola”**

**`titol` no és un string**

**`titol` és un objecte del DOM que representa l’element `<h1>`**

Per això després podem fer coses com:

```javascript
titol.textContent
```

o:

```javascript
titol.innerHTML
```

### Altres exemples

```javascript
const primerTitol = document.querySelector("h1");
const caixa = document.querySelector("#caixa");
const destacat = document.querySelector(".destacat");
```

En estos casos:

* `"h1"` selecciona el primer `h1`
* `"#caixa"` selecciona l’element amb eixe id
* `".destacat"` selecciona el primer element amb eixa classe

### Idea clau

**`querySelector()` retorna un element del DOM.**

---

## `querySelectorAll()`

Si volem seleccionar diversos elements, utilitzem:

```javascript
document.querySelectorAll(...)
```

### Exemple

HTML:

```html
<ul>
    <li>València</li>
    <li>Alacant</li>
    <li>Castelló</li>
</ul>
```

JavaScript:

```javascript
const elements = document.querySelectorAll("li");
console.log(elements);
```

```javascript
// Eixida:
NodeList(3) [...]
```

### Què està passant

* JavaScript busca tots els `li`
* retorna una col·lecció amb tots ells

### Diferència important

* `querySelector()` retorna **un** element
* `querySelectorAll()` retorna **diversos** elements

---

## Llegir i modificar text amb `textContent`

Una vegada hem seleccionat un element, podem llegir el seu text o canviar-lo.

### Exemple per llegir el text

HTML:

```html
<h1 id="titol">Hola</h1>
```

JavaScript:

```javascript
const titol = document.querySelector("#titol");
console.log(titol.textContent);
```

```javascript
// Eixida:
Hola
```

### Què està passant

* `titol` és l’element
* `.textContent` accedix al text de dins

### Exemple per modificar el text

```javascript
const titol = document.querySelector("#titol");
titol.textContent = "Benvinguts";
console.log(titol.textContent);
```

```javascript
// Eixida:
Benvinguts
```

Ara el contingut de l’element ja no és `Hola`, sinó `Benvinguts`.

### Idea clau

**`textContent` treballa amb text.**

Ens permet:

* llegir el text
* modificar el text

---

## Inserir HTML amb `innerHTML`

A vegades no volem posar només text. Volem inserir HTML.

Per a això utilitzem `innerHTML`.

### Exemple

HTML:

```html
<div id="caixa"></div>
```

JavaScript:

```javascript
const caixa = document.querySelector("#caixa");
caixa.innerHTML = "<p>Hola món</p>";
```

Resultat en la pàgina:

```html
<div id="caixa">
    <p>Hola món</p>
</div>
```

### Diferència entre `textContent` i `innerHTML`

```javascript
const caixa = document.querySelector("#caixa");
caixa.textContent = "<p>Hola</p>";
```

Resultat visual:

```text
<p>Hola</p>
```

Ara:

```javascript
const caixa = document.querySelector("#caixa");
caixa.innerHTML = "<p>Hola</p>";
```

Resultat visual:

un paràgraf real amb el text `Hola`.

### Què hem de tindre clar

* `textContent` tracta el contingut com a text literal
* `innerHTML` interpreta el contingut com a HTML

### Idea clau

**`textContent` mostra text. `innerHTML` crea HTML.**

---

## Modificar atributs

Els elements HTML tenen atributs. Per exemple:

* `src`
* `alt`
* `href`
* `id`

Des de JavaScript podem llegir-los i modificar-los.

### Exemple amb una imatge

HTML:

```html
<img id="foto" src="inicial.jpg" alt="Imatge inicial">
```

JavaScript:

```javascript
const foto = document.querySelector("#foto");

console.log(foto.src);
console.log(foto.alt);

foto.src = "nova.jpg";
foto.alt = "Imatge nova";
```

```javascript
// Eixida:
[URL completa de la imatge inicial]
Imatge inicial
```

### Què està passant

1. seleccionem la imatge
2. accedim a les propietats `src` i `alt`
3. després les modifiquem

Això fa que l’element de la pàgina canvie.

### Idea clau

**Els atributs d’un element també es poden llegir i modificar des de JavaScript.**

---

## Crear elements amb `createElement()`

Fins ara hem modificat elements que ja existien.

Ara veurem com crear elements nous.

### Exemple

```javascript
const paragraf = document.createElement("p");
console.log(paragraf);
```

```javascript
// Eixida:
<p></p>
```

### Què està passant

* `createElement("p")` crea un element `p`
* però només el crea en memòria

### Punt crític

**Crear un element no significa mostrar-lo en la pàgina.**

Açò és una de les parts on més es perden els alumnes.

Si fem només això:

```javascript
const paragraf = document.createElement("p");
paragraf.textContent = "Hola";
```

l’element existix, però **encara no es veu en la pàgina**.

---

## Afegir elements amb `appendChild()`

Perquè l’element aparega en la pàgina, l’hem d’afegir al DOM.

### Exemple

```javascript
const paragraf = document.createElement("p");
paragraf.textContent = "Este paràgraf s'ha creat amb JavaScript";

document.body.appendChild(paragraf);
```

Resultat:

apareix un paràgraf nou al final del document.

### Què està passant pas a pas

1. creem un element nou
2. li posem text
3. encara no està en la pàgina
4. `appendChild()` l’afig al DOM
5. ara sí es mostra

### Idea clau

**`createElement()` crea l’element. `appendChild()` el mostra en la pàgina.**

O dit d’una altra manera:

**crear no és el mateix que afegir**

---

## Eliminar elements amb `remove()`

També podem eliminar elements del DOM.

### Exemple

HTML:

```html
<p id="missatge">Missatge temporal</p>
```

JavaScript:

```javascript
const missatge = document.querySelector("#missatge");
missatge.remove();
```

Resultat:

el paràgraf desapareix de la pàgina.

### Què està passant

1. seleccionem l’element
2. cridem `remove()`
3. l’element s’elimina del DOM

---

## Esdeveniments

Moltes vegades volem que el codi s’execute quan l’usuari faça alguna cosa.

Per exemple:

* fer clic en un botó
* escriure en un camp
* canviar una opció

Per a això utilitzem esdeveniments.

---

## `addEventListener()`

### Exemple

HTML:

```html
<button id="boto">Fes clic</button>
```

JavaScript:

```javascript
const boto = document.querySelector("#boto");

boto.addEventListener("click", () => {
    console.log("Has fet clic");
});
```

Quan fem clic:

```javascript
// Eixida:
Has fet clic
```

### Què està passant pas a pas

1. seleccionem el botó
2. indiquem que volem escoltar l’esdeveniment `"click"`
3. passem una funció
4. esta funció no s’executa en eixe moment
5. només s’executa quan l’usuari fa clic

### Relació amb el tema de funcions

Ací reapareix una idea molt important del tema anterior:

**estem passant una funció, no executant-la**

Això és correcte:

```javascript
boto.addEventListener("click", saludar);
```

Això és incorrecte si volem que s’execute després:

```javascript
boto.addEventListener("click", saludar());
```

### Per què és incorrecte

Perquè:

1. `saludar()` s’executa immediatament
2. el resultat d’eixa execució és el que es passa a `addEventListener`
3. ja no estem passant la funció correctament

### Idea clau

**En un event, passem la funció. No l’executem en eixe moment.**

---

## Crear HTML a partir de dades

Este és el punt més important del tema, perquè és el pont cap a:

**JavaScript → fetch → Alpine**

Fins ara hem aprés a seleccionar, crear i afegir elements.

Ara utilitzarem això per convertir dades en HTML.

---

## Exemple amb un array

HTML:

```html
<ul id="llista"></ul>
```

JavaScript:

```javascript
const noms = ["Anna", "Marc", "Pau"];

const llista = document.querySelector("#llista");

noms.forEach(nom => {
    const li = document.createElement("li");
    li.textContent = nom;
    llista.appendChild(li);
});
```

Resultat en la pàgina:

```html
<ul id="llista">
    <li>Anna</li>
    <li>Marc</li>
    <li>Pau</li>
</ul>
```

### Què està passant pas a pas

1. tenim un array amb dades
2. seleccionem la llista
3. recorrem l’array amb `forEach()`
4. en cada iteració:

   * creem un `li`
   * li assignem el text
   * l’afegim al DOM

### Idea clau

**Estem convertint dades en HTML manualment.**

---

## Exemple amb objectes

Este cas s’assembla encara més al que farem després.

HTML:

```html
<ul id="llista"></ul>
```

JavaScript:

```javascript
const alumnes = [
    { nom: "Anna", edat: 17 },
    { nom: "Marc", edat: 18 }
];

const llista = document.querySelector("#llista");

alumnes.forEach(alumne => {
    const li = document.createElement("li");
    li.textContent = alumne.nom + " té " + alumne.edat + " anys";
    llista.appendChild(li);
});
```

Resultat en la pàgina:

```html
<ul id="llista">
    <li>Anna té 17 anys</li>
    <li>Marc té 18 anys</li>
</ul>
```

### Què estem fent realment

En este exemple:

* tenim dades en JavaScript
* les recorrem
* construïm HTML amb elles
* les mostrem en la pàgina

Això és la base del que després farem amb dades JSON i amb Alpine.

---

## Relació amb el que ve després

En este tema hem treballat el DOM de forma manual.

És a dir:

* busquem elements
* creem elements
* afegim elements
* modifiquem la pàgina a mà

Això és necessari perquè entenguem què està passant.

Però més avant simplificarem este procés.

### El següent pas serà `fetch`

Amb `fetch` les dades ja no estaran dins del codi. Vindran d’un fitxer o d’una API.

### Després vindrà Alpine

Amb Alpine ja no crearem els elements manualment amb `createElement()` i `appendChild()`.

En lloc d’això:

* definirem les dades
* definirem el HTML
* Alpine actualitzarà la vista

Per això este tema és important: ens permet entendre què està resolent Alpine.

---

## Resum

Hem de quedar-nos amb estes idees:

* **el DOM és el HTML convertit en objectes**
* **`document` és el punt d’entrada al DOM**
* **`querySelector()` permet seleccionar un element**
* **`querySelectorAll()` permet seleccionar diversos elements**
* **`textContent` treballa amb text**
* **`innerHTML` interpreta HTML**
* **`createElement()` crea un element nou**
* **`appendChild()` l’afig al document**
* **`remove()` elimina un element**
* **`addEventListener()` permet reaccionar a accions de l’usuari**
* **podem convertir dades en HTML manualment**

Este tema és la base necessària per al següent pas:

**obtindre dades externes amb `fetch` i, després, deixar que Alpine genere el HTML a partir d’estes dades**

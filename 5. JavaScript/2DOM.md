---

title: 2.- Document Object Model (DOM)
parent: 5.- JavaScript
layout: default
nav_order: 20
has_children: true

---
# El DOM (Document Object Model)

Fins ara hem treballat amb dos parts separades:

* HTML, que definix l’estructura de la pàgina
* JavaScript, que treballa amb dades i amb lògica

Però en una aplicació web real, estes dos parts han de connectar.

Necessitem poder accedir als elements HTML des de JavaScript per:

* llegir informació
* modificar-la
* crear nous elements
* eliminar-los
* reaccionar a accions de l’usuari

Per a això utilitzem el **DOM**.

---

## Del HTML al DOM

Quan escrivim HTML, el navegador no treballa amb el text tal com està escrit.

Per exemple:

```html
<body>
    <h1>Hola</h1>
    <p>Benvinguts</p>
</body>
```

El navegador transforma este codi en una estructura jeràrquica.

Aquesta estructura s’organitza com un arbre:

* `body` és el node principal
* dins de `body` hi ha `h1` i `p`
* cada element és un node

---

## Representació del DOM

A continuació es pot veure aquesta estructura en forma d’arbre:

{: .text-center }
![alt text](imatges/DOM.png)

---

En este punt hem de tindre clar:

No treballem amb text HTML, sinó amb una estructura d’objectes organitzada en forma d’arbre.

---

## Què és el DOM

Quan el navegador carrega una pàgina HTML, construïx una estructura interna formada per objectes.

Per exemple, si tenim:

```html
<h1 id="titol">Hola</h1>
<p>Benvinguts</p>
```

el navegador crea:

* un objecte que representa el `<h1>`
* un objecte que representa el `<p>`
* els seus atributs
* el seu contingut

Aquesta estructura és el **DOM**.

Per tant, JavaScript no treballa amb el text HTML, sinó amb **objectes que representen els elements de la pàgina**.

---

## `document`: punt d’entrada

Per accedir a aquesta estructura utilitzem:

```javascript
document
```

`document` és un objecte global que representa tota la pàgina.

També es pot entendre com l’arrel de l’arbre DOM.

A partir de `document` podem:

* buscar elements
* crear-los
* modificar-los

Tot el treball amb el DOM comença ací.

---

## Seleccionar elements

Per modificar un element, primer hem de seleccionar-lo.

---

## `querySelector()`

```javascript
const titol = document.querySelector("#titol");
```

---

> El selector funciona igual que en CSS.


Anem pas a pas:

1. partim de `document`
2. busquem un element amb el selector
3. el guardem en una variable

---

```javascript
console.log(titol);
```

```javascript
// Eixida:
<h1 id="titol">Hola</h1>
```

---

Ací hi ha un punt molt important.

El que hem guardat en `titol`:

* no és el text
* no és un string
* és un objecte del DOM

Açò ens permet fer després:

```javascript
titol.textContent
titol.innerHTML
```

---

També podem seleccionar:

```javascript
document.querySelector("h1");
document.querySelector(".destacat");
```

---

## Seleccionar diversos elements

```javascript
const elements = document.querySelectorAll("li");
```

```javascript
console.log(elements);
```

```javascript
// Eixida:
NodeList(3) [...]
```

---

En este cas:

* obtenim una col·lecció d’elements
* no un sol element

---

## Llegir i modificar text

Una vegada tenim un element, podem treballar amb el seu contingut.

```javascript
const titol = document.querySelector("#titol");

console.log(titol.textContent);
titol.textContent = "Benvinguts";
```

```javascript
// Eixida:
Hola
```

---

Açò implica:

* llegim el text amb `textContent`
* el podem modificar assignant un nou valor

---

## Inserir HTML

Si volem afegir codi HTML:

```javascript
const caixa = document.querySelector("#caixa");

caixa.innerHTML = "<p>Hola món</p>";
```

---

Comparem:

```javascript
caixa.textContent = "<p>Hola</p>";
```

```text
<p>Hola</p>
```

```javascript
caixa.innerHTML = "<p>Hola</p>";
```

---

En el segon cas, el navegador crea un element real.

Per tant:

* `textContent` tracta el contingut com a text
* `innerHTML` interpreta el contingut com a HTML

---

> Si substituïm el contingut amb **innerHTML**, **es perd el contingut anterior.**

## Modificar atributs

També podem treballar amb els atributs.

```html
<img id="foto" src="inicial.jpg" alt="Imatge inicial">
```

```javascript
const foto = document.querySelector("#foto");

console.log(foto.src);
console.log(foto.alt);

foto.src = "nova.jpg";
foto.alt = "Imatge nova";
```

---

Açò permet canviar el comportament i l’aspecte dels elements.

---

## Crear elements

Podem crear elements nous amb:

```javascript
const li = document.createElement("li");
li.textContent = "Anna";
```

---

En este moment:

* l’element existix
* però no es veu en la pàgina

---

## Afegir elements

Per mostrar-lo:

```javascript
const llista = document.querySelector("#llista");
llista.appendChild(li);
```

---

El procés és:

1. crear element
2. configurar-lo
3. afegir-lo al DOM

Només en l’últim pas apareix en la pàgina.

---

## Eliminar elements

```javascript
const element = document.querySelector("#missatge");
element.remove();
```

---

## Esdeveniments

Permeten executar codi quan l’usuari interactua.

```html
<button id="boto">Fes clic</button>
```

```javascript
const boto = document.querySelector("#boto");

boto.addEventListener("click", () => {
    console.log("Has fet clic");
});
```

```javascript
// Eixida (quan fem clic):
Has fet clic
```

---

És important entendre que la funció:

* no s’executa en eixe moment
* s’executa quan passa l’esdeveniment, es a dir, **quan es produïx el clic.**

---

Per això:

```javascript
boto.addEventListener("click", saludar());
```

executa la funció immediatament.

En canvi:

```javascript
boto.addEventListener("click", saludar);
```

passa la funció correctament.

---

## Generar HTML a partir de dades

Este és el punt més important del tema.

```html
<ul id="llista"></ul>
```

```javascript
const noms = ["Anna", "Marc", "Pau"];

const llista = document.querySelector("#llista");

noms.forEach(nom => {
    const li = document.createElement("li");
    li.textContent = nom;
    llista.appendChild(li);
});
```

---

Resultat:

```html
<li>Anna</li>
<li>Marc</li>
<li>Pau</li>
```

---

El que hem fet:

1. tenim dades
2. recorrem les dades
3. creem elements
4. els afegim al DOM

---

Açò és fonamental perquè:

**estem convertint dades en HTML manualment**

---

## Relació amb Alpine

En este tema hem fet tot el procés manualment:

* seleccionar
* crear
* afegir

En els següents temes:

* les dades vindran de fora (fetch)
* Alpine generarà el HTML automàticament

---

## En Resum

* el DOM és la representació en objectes del HTML
* `document` és el punt d’entrada
* `querySelector` selecciona elements
* `textContent` treballa amb text
* `innerHTML` interpreta HTML
* `createElement` crea elements
* `appendChild` els inserix
* `remove` elimina elements
* `addEventListener` gestiona esdeveniments
* podem generar HTML a partir de dades

---


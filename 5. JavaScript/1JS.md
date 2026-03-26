---

title: 1.- JavaScript
layout: default
parent: 5.- JavaScript
nav_order: 10
has_children: true

---



# JavaScript


## 1. Introducció a JavaScript

### Què és JavaScript

JavaScript és un **llenguatge de programació interpretat** que s’executa principalment en el navegador web. Ens permet afegir **comportament i interactivitat** a les pàgines web.

Quan treballem amb una pàgina web, utilitzem tres tecnologies principals:

* **HTML**, que defineix l’estructura i el contingut.
* **CSS**, que defineix l’aspecte visual.
* **JavaScript**, que defineix el comportament.

Si pensem en una pàgina com una casa:

* HTML és l’estructura (parets, portes, finestres).
* CSS és la pintura i la decoració.
* JavaScript és l’electricitat i els mecanismes que fan que tot funcione.

Sense JavaScript, una pàgina web només mostra informació.
Amb JavaScript, la pàgina pot reaccionar quan l’usuari:

* Fa clic en un botó.
* Escriu en un camp de text.
* Mou el ratolí.
* Envia un formulari.

---

### On s’executa JavaScript

En el context que treballarem ara, JavaScript s’executa en el **navegador del client**.

Això significa que:

* El codi s’executa en l’ordinador de l’usuari.
* Pot accedir i modificar el document HTML carregat.
* No necessita recarregar la pàgina per fer canvis visuals.

Més endavant veurem que JavaScript també pot executar-se en el servidor (per exemple amb Node.js), però ara ens centrarem en el **costat client**.

---

>Exemples Consola:

```javascript
document.body.contentEditable = true //false
```

```javascript

document.body.style.backgroundColor = "lightyellow" //canviar el color de fons
```


```javascript
document.querySelectorAll("img").forEach(img => {
    img.style.border = "5px solid red"
})  //Posar una vora roja a totes les imatges
```

```javascript

// Afegir un missatge a la pàgina


let div = document.createElement("div")

div.textContent = "PÀGINA MODIFICADA AMB JAVASCRIPT PER L'ALUMNAT DE 1r de l'IES BENIGASLÓ"

div.style.position = "fixed"
div.style.top = "0"
div.style.left = "0"
div.style.width = "100%"
div.style.background = "yellow"
div.style.fontSize = "50px"
div.style.textAlign = "center"
div.style.zIndex = "9999"

document.body.appendChild(div)

```

```javascript

// Canviar colors a lletres

document.querySelectorAll("p, h1, h2, h3").forEach(e => {
    e.style.color = "red";
});
```

```javascript

document.querySelectorAll("div").forEach(e => {
    e.style.border = "2px solid blue";
});
```

>Encara que una web està publicada a internet, el navegador la converteix en un DOM.
>JavaScript pot modificar eixe DOM des del costat del client.



### Com integrem JavaScript en HTML

Per utilitzar JavaScript dins d’una pàgina web, utilitzem l’etiqueta `<script>`.

Podem escriure codi directament dins del document HTML:

```html
<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <title>Primer exemple</title>
</head>
<body>

    <h1>Hola món</h1>

    <script>
        console.log("La pàgina s'ha carregat correctament");
    </script>

</body>
</html>
```

En este cas, el navegador executa el codi quan arriba a l’etiqueta `<script>`.

---

### Script en fitxer extern (forma recomanada)

La forma habitual de treballar en projectes reals és separar el codi JavaScript en un fitxer extern.

Això ens permet:

* Mantindre el codi organitzat.
* Reutilitzar-lo.
* Separar estructura (HTML) de comportament (JS).

En l’HTML escrivim:

```html
<script src="script.js"></script>
```

I en el fitxer `script.js` escrivim:

```javascript
console.log("JavaScript està connectat correctament");
```

És recomanable col·locar l’etiqueta `<script>` **just abans de tancar el `</body>`**.

D’aquesta manera ens assegurem que tot el contingut HTML ja està carregat abans que JavaScript intente accedir-hi.

---

### La consola del navegador

Quan treballem amb JavaScript, la consola és una eina fonamental.

Podem obrir-la amb:

* F12
* O clic dret → Inspeccionar → Pestanya Consola

La funció més utilitzada al principi serà:

```javascript
console.log("Missatge de prova");
```

Esta instrucció no mostra res en la pàgina, sinó en la consola.
És molt útil per comprovar si el codi funciona o per mostrar valors de variables.

---


## 2. Variables i tipus de dades

Quan programem, necessitem guardar informació per poder utilitzar-la més endavant.
Aquesta informació es guarda en **variables**.

Una variable és un espai en memòria que té un nom i que conté un valor.

Podem imaginar-la com una caixa amb una etiqueta. L’etiqueta és el nom de la variable, i dins de la caixa guardem el valor.

---

### Declaració de variables

En JavaScript modern utilitzem principalment dues paraules clau:

* `let`
* `const`

La paraula clau `var` existeix, però és pròpia de versions antigues del llenguatge. En este curs no la utilitzarem, perquè pot provocar comportaments inesperats relacionats amb l’àmbit de les variables.

* **let**

Utilitzem `let` quan el valor de la variable pot canviar.

```javascript
let edat = 20;
console.log(edat);

edat = 21;
console.log(edat);
```

En este exemple:

* Declarem una variable anomenada `edat`.
* Li assignem el valor `20`.
* Després canviem el valor a `21`.

Això és possible perquè `let` permet la reassignació.

---

* **const**

Utilitzem `const` quan el valor no ha de canviar.

```javascript
const ciutat = "València";
console.log(ciutat);
```

Si intentem modificar-la:

```javascript
ciutat = "Alacant"; // Error
```

El navegador generarà un error perquè una constant no es pot reassignar.

És important acostumar-nos a utilitzar:

* `const` per defecte.
* `let` només quan sabem que el valor canviarà.

Això fa el codi més segur i més fàcil d’entendre.

---

### Tipus de dades primitius

JavaScript té diversos tipus de dades. Els més importants en esta fase són els **tipus primitius**.

Un tipus primitiu és un valor simple, que no és un objecte i no conté altres valors dins.

Els principals tipus primitius que utilitzarem són:

* Number
* String
* Boolean
* Undefined
* Null

---

* **Number**

En JavaScript tots els números són de tipus `Number`, tant si són enters com decimals.

```javascript
const numeroEnter = 10;
const numeroDecimal = 10.5;

console.log(numeroEnter);
console.log(numeroDecimal);
```

No existeix una diferència entre int i float com en altres llenguatges.

---

* **String**

Un `String` és una cadena de text.

Podem utilitzar cometes dobles o simples.

```javascript
const nom = "Anna";
const cognom = 'Garcia';

console.log(nom);
console.log(cognom);
```

També podem combinar text amb variables:

```javascript
const edat = 25;
const missatge = "Tinc " + edat + " anys";
console.log(missatge);
```

Més endavant utilitzarem una forma més clara de fer això.

---

* **Boolean**

Un `Boolean` només pot tindre dos valors:

* `true`
* `false`

```javascript
const esMajor = true;
console.log(esMajor);
```

S’utilitza principalment en condicionals.

---

* **Undefined**

Una variable declarada però sense valor assignat té el valor `undefined`.

```javascript
let x;
console.log(x); // undefined
```

Això significa que la variable existeix, però encara no té cap valor assignat.

---

* **Null**

`null` representa l’absència intencionada de valor.

```javascript
let resultat = null;
console.log(resultat);
```

La diferència entre `undefined` i `null` és important:

* `undefined` indica que no s’ha assignat cap valor.
* `null` indica que nosaltres hem decidit que no hi haja valor.

---

### `typeof` - Saber quin tipus té una variable

Podem utilitzar l’operador `typeof` per saber el tipus d’una variable.

```javascript
const nom = "Maria";
console.log(typeof nom); // string

const edat = 30;
console.log(typeof edat); // number
```

Aquesta eina és molt útil quan estem depurant codi.

---

### Comparacions i igualtat estricta

Quan comparem valors, utilitzem operadors de comparació.

Els més habituals són:

* `>`
* `<`
* `>=`
* `<=`
* `===`

És molt important utilitzar `===` en lloc de `==`.

`===` comprova:

* El valor
* I el tipus

Exemple:

```javascript
console.log(5 === 5);      // true
console.log(5 === "5");    // false
```

En el segon cas:

* El primer valor és un número.
* El segon valor és una cadena de text.

Encara que aparentment siguen iguals, no tenen el mateix tipus, per això el resultat és `false`.

En este curs utilitzarem sempre `===` per evitar comportaments inesperats.

---

### Taula bàsica d’operadors

Quan programem, utilitzem **operadors** per:

* assignar valors
* fer càlculs
* comparar dades
* combinar condicions

En esta fase ens centrarem en els operadors més habituals.

| Tipus             | Operador | Significat                                          | Exemple                           | Resultat                                        |            |   |                   |                   |
| ----------------- | -------- | --------------------------------------------------- | --------------------------------- | ----------------------------------------------- | ---------- | - | ----------------- | ----------------- |
| Assignació        | `=`      | Assigna un valor a una variable                     | `let edat = 18`                   | Guarda `18` en `edat`                           |            |   |                   |                   |
| Suma              | `+`      | Suma números o concatena textos                     | `3 + 2`                           | `5`                                             |            |   |                   |                   |
| Resta             | `-`      | Resta valors                                        | `7 - 4`                           | `3`                                             |            |   |                   |                   |
| Multiplicació     | `*`      | Multiplica valors                                   | `3 * 5`                           | `15`                                            |            |   |                   |                   |
| Divisió           | `/`      | Divideix valors                                     | `10 / 2`                          | `5`                                             |            |   |                   |                   |
| Mòdul             | `%`      | Retorna el residu d’una divisió                     | `7 % 2`                           | `1`                                             |            |   |                   |                   |
| Major que         | `>`      | Comprova si un valor és major que un altre          | `8 > 3`                           | `true`                                          |            |   |                   |                   |
| Menor que         | `<`      | Comprova si un valor és menor que un altre          | `2 < 5`                           | `true`                                          |            |   |                   |                   |
| Major o igual que | `>=`     | Comprova si és major o igual                        | `6 >= 6`                          | `true`                                          |            |   |                   |                   |
| Menor o igual que | `<=`     | Comprova si és menor o igual                        | `4 <= 7`                          | `true`                                          |            |   |                   |                   |
| Igualtat estricta | `===`    | Comprova si tenen el mateix valor i el mateix tipus | `5 === "5"`                       | `false`                                         |            |   |                   |                   |
| Diferent estricte | `!==`    | Comprova si són diferents en valor o tipus          | `5 !== "5"`                       | `true`                                          |            |   |                   |                   |
| I lògic           | `&&`     | Retorna `true` si les dues condicions són certes    | `edat >= 18 && teCarnet === true` | Depén dels valors                               |            |   |                   |                   |
| O lògic           | `        |                                                     | `                                 | Retorna `true` si almenys una condició és certa | `nota >= 5 |   | treball === true` | Depén dels valors |
| Negació           | `!`      | Inverteix un valor booleà                           | `!true`                           | `false`                                         |            |   |                   |                   |

---

### Exemples ràpids d’operadors

```javascript
let numero = 10;
let altreNumero = 3;

console.log(numero + altreNumero);   // 13
console.log(numero - altreNumero);   // 7
console.log(numero * altreNumero);   // 30
console.log(numero / altreNumero);   // 3.3333333333333335
console.log(numero % altreNumero);   // 1
```

```javascript
let edat = 20;
let teCarnet = true;

console.log(edat >= 18);             // true
console.log(edat === 20);            // true
console.log(edat === "20");          // false
console.log(edat !== "20");          // true
console.log(edat >= 18 && teCarnet); // true
console.log(edat < 18 || teCarnet);  // true
console.log(!teCarnet);              // false
```

---

### Diferència entre `=`, `==` i `===`

És important no confondre estos tres operadors, perquè tenen funcions diferents.

| Operador | Funció                                      |
| -------- | ------------------------------------------- |
| `=`      | assigna un valor a una variable             |
| `==`     | compara valors, però pot convertir el tipus |
| `===`    | compara valor i tipus                       |

Exemple:

```javascript
let edat = 18;

console.log(edat == "18");   // true
console.log(edat === "18");  // false
```

En el primer cas (`==`), JavaScript converteix automàticament el text `"18"` en número abans de comparar.

En el segon cas (`===`), es compara tant el **valor** com el **tipus**.
Com que `18` és un número i `"18"` és un text, el resultat és `false`.

Per evitar resultats inesperats, en este curs **utilitzarem sempre `===` en lloc de `==`**.

---


## Entrada i eixida de dades en JavaScript (navegador)

Quan programem, no només necessitem crear variables i fer càlculs.

També necessitem:

* Llegir dades que introdueix l’usuari.
* Mostrar resultats.

En JavaScript que s’executa en el navegador, disposem de diverses formes senzilles d’entrada i eixida de dades.

---

### Eixida de dades

#### console.log()

La forma més habitual d’eixida durant l’aprenentatge és `console.log()`.

```javascript
console.log("Hola món");
```

Este mètode mostra informació en la consola del navegador.

És molt útil per:

* Comprovar valors de variables.
* Verificar càlculs.
* Depurar errors.

---

#### alert()

També podem mostrar un missatge emergent utilitzant `alert()`.

```javascript
alert("Missatge important");
```

Esta funció mostra una finestra amb el missatge indicat.

S’utilitza per mostrar informació a l’usuari de manera directa.

---

### Entrada de dades

En el navegador podem demanar dades a l’usuari utilitzant `prompt()`.

```javascript
const nom = prompt("Introdueix el teu nom:");
alert("Hola " + nom);
```

En este exemple:

* `prompt()` mostra una finestra amb un camp de text.
* El valor introduït es guarda en la variable `nom`.
* Després el mostrem amb `alert()`.

És important saber que:

`prompt()` sempre retorna una cadena de text (`String`).

---

### Convertir text a número

Si l’usuari introdueix un número amb `prompt()`, realment estem rebent un text.

Per poder fer operacions matemàtiques, hem de convertir-lo a número.

```javascript
const edat = Number(prompt("Introdueix la teua edat:"));

if (edat >= 18) {
    alert("Eres major d'edat");
} else {
    alert("Eres menor d'edat");
}
```

En este cas:

* `Number()` converteix el text en número.
* Ara sí podem comparar correctament.

Si no férem la conversió, estaríem comparant textos.

---

### confirm()

La funció `confirm()` mostra una finestra amb dues opcions: Acceptar o Cancel·lar.

```javascript
const resposta = confirm("Vols continuar?");

if (resposta === true) {
    console.log("L'usuari ha acceptat");
} else {
    console.log("L'usuari ha cancel·lat");
}
```

`confirm()` retorna un valor booleà:

* `true` si l’usuari accepta.
* `false` si cancel·la.

---

### Resum d’entrada i eixida
En esta fase inicial treballarem amb:

* `console.log()` per mostrar resultats en consola.
* `alert()` per mostrar missatges.
* `prompt()` per llegir dades.
* `confirm()` per llegir valors booleans.

Més endavant, quan treballem amb el **DOM**, veurem una forma més completa i realista de gestionar entrada i eixida utilitzant formularis i elements HTML.

De moment, estes funcions ens permeten practicar totes les estructures del llenguatge sense necessitat de treballar encara amb el DOM.

---


## 3. Estructures de control

Quan programem, no volem que el codi s’execute sempre de la mateixa manera.
Necessitem poder:

* Prendre decisions.
* Repetir accions.
* Controlar el flux d’execució.

Per a això utilitzem les **estructures de control**.

---

### Condicionals

Les estructures condicionals ens permeten executar un bloc de codi només si es compleix una condició.

La forma més habitual és `if`.

* **if**

```javascript
let edat = 18;

if (edat >= 18) {
    console.log("Eres major d'edat");
}
```

En este exemple:

* La condició és `edat >= 18`.
* Si és certa (`true`), s’executa el bloc de codi.
* Si és falsa (`false`), no s’executa.

La condició sempre ha de produir un valor booleà (`true` o `false`).

---

* **if...else**

Si volem executar un bloc quan la condició és falsa, utilitzem `else`.

```javascript
let edat = 16;

if (edat >= 18) {
    console.log("Eres major d'edat");
} else {
    console.log("Eres menor d'edat");
}
```

Només s’executa un dels dos blocs.

---

* **if...else if...else**

Quan tenim més de dues possibilitats, podem encadenar condicions.

```javascript
let nota = 7;

if (nota >= 9) {
    console.log("Excel·lent");
} else if (nota >= 7) {
    console.log("Notable");
} else if (nota >= 5) {
    console.log("Aprovat");
} else {
    console.log("Suspés");
}
```

Les condicions es comproven en ordre.
Quan una és certa, s’executa el seu bloc i es deixa de comprovar la resta.

---

### Operadors lògics

De vegades necessitem combinar condicions.

Els operadors més habituals són:

* `&&` → i lògic (AND)
* `||` → o lògic (OR)
* `!` → negació (NOT)

```javascript
let edat = 20;
let teCarnet = true;

if (edat >= 18 && teCarnet === true) {
    console.log("Pot conduir");
}
```

En este cas, les dues condicions han de ser certes perquè s’execute el bloc.

---

### switch

Quan comparem una mateixa variable amb diversos valors concrets, podem utilitzar `switch`.

```javascript
let dia = 3;

switch (dia) {
    case 1:
        console.log("Dilluns");
        break;
    case 2:
        console.log("Dimarts");
        break;
    case 3:
        console.log("Dimecres");
        break;
    default:
        console.log("Altres dies");
}
```

És important incloure `break` al final de cada cas.
Si no el posem, el codi continuarà executant els casos següents.

---

## Bucles

Els bucles ens permeten repetir un bloc de codi diverses vegades.

Són molt útils quan treballem amb llistes de dades.

---

### for

El bucle `for` és el més utilitzat quan sabem quantes vegades volem repetir una acció.

```javascript
for (let i = 0; i < 5; i++) {
    console.log("Valor de i:", i);
}
```

Este bucle té tres parts:

1. Inicialització → `let i = 0`
2. Condició → `i < 5`
3. Increment → `i++`

El codi s’executa mentre la condició siga certa.

---

### while

El bucle `while` s’executa mentre una condició siga certa.

```javascript
let contador = 0;

while (contador < 3) {
    console.log("Contador:", contador);
    contador++;
}
```

Primer es comprova la condició.
Si és certa, s’executa el bloc.

---

### do...while

El bucle `do...while` és similar a `while`, però té una diferència important:

S’executa almenys una vegada, encara que la condició siga falsa.

```javascript
let numero = 5;

do {
    console.log("S'executa almenys una vegada");
} while (numero < 3);
```

Encara que `numero < 3` siga fals, el bloc s’ha executat una vegada.

---

### Control del bucle

Podem controlar el comportament dels bucles amb:

* `break` → finalitza el bucle.
* `continue` → passa a la següent iteració.

Exemple:

```javascript
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;
    }
    console.log(i);
}
```

En este cas, quan `i` és 2, el bucle salta directament a la següent iteració.

---


## 4. Arrays

Quan treballem amb dades, moltes vegades no volem guardar només un valor, sinó una **col·lecció de valors relacionats**.

Per exemple:

* Una llista de noms.
* Una llista de números.
* Una llista de tasques.

Per a això utilitzem els **arrays**.

Un array és una estructura que permet guardar diversos valors dins d’una sola variable.

---

### Crear un array

Podem crear un array buit:

```javascript
const llista = [];
```

O crear-lo amb valors inicials:

```javascript
const colors = ["blau", "verd", "roig"];
console.log(colors);
```

En este cas:

* `colors` és un array.
* Conté tres elements.
* Cada element té una posició.

---

### Índex dels arrays

Els arrays en JavaScript comencen en la **posició 0**.

Això és molt important.

```javascript
const colors = ["blau", "verd", "roig"];

console.log(colors[0]); // blau
console.log(colors[1]); // verd
console.log(colors[2]); // roig
```

La posició dins de l’array es diu **índex**.

---

### Modificar un element

Podem canviar el valor d’un element accedint al seu índex.

```javascript
const colors = ["blau", "verd", "roig"];

colors[1] = "groc";
console.log(colors);
```

Ara l’array conté:

* blau
* groc
* roig

---

### Longitud d’un array

Per saber quants elements té un array utilitzem la propietat `length`.

```javascript"
const colors = ["blau", "groc", "roig"];
console.log(colors.length); // 3
```

Aquesta propietat és molt útil quan treballem amb bucles.

---

### Afegir i eliminar elements

#### Afegir al final → push()

```javascript"
const colors = ["blau", "verd"];
colors.push("roig");

console.log(colors);
```

`push()` afegeix un element al final de l’array.

---

#### Eliminar l’últim element → pop()

```javascript"
const colors = ["blau", "verd", "roig"];
colors.pop();

console.log(colors);
```

`pop()` elimina l’últim element.

---

## Iterar un array

Quan tenim una col·lecció de dades, normalment volem recórrer-la.

---

### Bucle for tradicional

```javascript
const colors = ["blau", "groc", "roig"];

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
```

Este és el mètode clàssic:

* Utilitzem un índex.
* Recorrrem des de 0 fins a `length - 1`.

---

### forEach()

JavaScript també ens proporciona un mètode més directe.

```javascript
const colors = ["blau", "groc", "roig"];

colors.forEach(function(color) {
    console.log(color);
});
```

En este cas:

* `forEach()` executa una funció per cada element.
* No necessitem gestionar l’índex manualment.

És una forma més clara quan només volem recórrer els valors.

---

## Altres mètodes útils

Els arrays tenen molts mètodes. En este nivell treballarem alguns dels més importants.

---

### indexOf()

Ens indica la posició d’un element.

```javascript
const colors = ["blau", "groc", "roig"];
console.log(colors.indexOf("groc")); // 1
```

Si no el troba, retorna `-1`.

---

### join()

Uneix tots els elements en una cadena de text.

```javascript
const colors = ["blau", "groc", "roig"];
console.log(colors.join(", "));
```

Resultat:

```
blau, groc, roig
```

---


### slice()

El mètode `slice()` s’utilitza per **obtindre una còpia d’una part de l’array**.

No modifica l’array original.

La sintaxi és:

```javascript
array.slice(inici, final)
```

On:

* `inici` és la posició des d’on comencem
* `final` és la posició on parem
* el valor de `final` **no s’inclou**

```javascript
const colors = ["blau", "groc", "roig", "verd"];

// Copia des de la posició 1 fins abans de la 3
const tros = colors.slice(1, 3);

console.log(colors);
console.log(tros);
```

**Eixida:**

```javascript
[ 'blau', 'groc', 'roig', 'verd' ]
[ 'groc', 'roig' ]
```

També podem ometre el segon paràmetre per copiar fins al final:

```javascript
const numeros = [10, 20, 30, 40];

// Copia des de la posició 2 fins al final
const partFinal = numeros.slice(2);

console.log(partFinal);
```

**Eixida:**

```javascript
[ 30, 40 ]
```

---

### splice()

El mètode `splice()` s’utilitza per **modificar directament l’array original**.

Pot servir per:

* eliminar elements
* afegir elements
* substituir elements

La sintaxi bàsica és:

```javascript
array.splice(inici, quantitat)
```

```javascript
const colors = ["blau", "groc", "roig"];

// Elimina 1 element a partir de la posició 1
colors.splice(1, 1);

console.log(colors);
```

**Eixida:**

```javascript
[ 'blau', 'roig' ]
```

En este cas:

* comença en la posició `1`
* elimina `1` element

També podem afegir elements:

```javascript
const fruites = ["poma", "pera", "raïm"];

// Afig "plàtan" en la posició 1 sense eliminar res
fruites.splice(1, 0, "plàtan");

console.log(fruites);
```

**Eixida:**

```javascript
[ 'poma', 'plàtan', 'pera', 'raïm' ]
```

---

### Diferència important

* `slice()` **no modifica** l’array original
* `splice()` **sí modifica** l’array original

```javascript
const array1 = ["a", "b", "c", "d"];
const resultat = array1.slice(1, 3);

console.log(array1);
console.log(resultat);

const array2 = ["a", "b", "c", "d"];
array2.splice(1, 2);

console.log(array2);
```

**Eixida:**

```javascript
[ 'a', 'b', 'c', 'd' ]
[ 'b', 'c' ]
[ 'a', 'd' ]
```

---



## 5. Objectes

Fins ara hem treballat amb:

* **valors individuals**, com números, textos o booleans
* **col·leccions ordenades**, com els arrays

Això ens permet guardar informació, però hi ha situacions en què necessitem representar alguna cosa més completa.

Per exemple, si volem guardar la informació d’una persona, no n’hi ha prou amb un únic valor. Normalment voldrem guardar diverses dades relacionades entre si:

* el nom
* l’edat
* la ciutat

El mateix passa amb altres casos:

* un producte pot tindre nom, preu i estoc
* una tasca pot tindre text i estat de completada

Per a això utilitzem els **objectes**.

Un objecte és una estructura formada per **parells clau–valor**.

Això significa que cada dada es guarda associada a un nom.

Per exemple:

* la clau `nom` pot tindre el valor `"Anna"`
* la clau `edat` pot tindre el valor `30`

Així, un objecte ens permet agrupar dades relacionades dins d’una sola estructura.

---

### Crear un objecte (Object Literal)

La forma més habitual de crear un objecte és utilitzant la sintaxi literal amb claus `{}`.

```javascript
const persona = {
    nom: "Anna",
    edat: 30,
    ciutat: "València"
};

console.log(persona);
```

```javascript
// Eixida:
{ nom: 'Anna', edat: 30, ciutat: 'València' }
```

En este exemple:

* `persona` és l’objecte
* `nom`, `edat` i `ciutat` són les seues propietats
* cada propietat té un valor associat

Per tant:

* `nom` guarda `"Anna"`
* `edat` guarda `30`
* `ciutat` guarda `"València"`

---

### Claus amb cometes i sense cometes

A diferència de **JSON**, en JavaScript no és necessari posar les claus entre cometes si són identificadors vàlids.

```javascript
const persona = {
    nom: "Anna",
    edat: 30,
    ciutat: "València"
};
```

Açò és correcte perquè `nom`, `edat` i `ciutat` són noms vàlids per a propietats.

De manera general, un identificador vàlid és un nom que:

* comença amb una lletra, `_` o `$`
* no conté espais
* no conté caràcters especials
* no és una paraula reservada

Si la clau no és un identificador vàlid, sí que hem de posar-la entre cometes.

```javascript
const producte = {
    "nom del producte": "Auriculars",
    preu: 29.99,
    disponible: true
};

console.log(producte);
```

```javascript
// Eixida:
{ 'nom del producte': 'Auriculars', preu: 29.99, disponible: true }
```

Ací `"nom del producte"` porta cometes perquè conté espais.

---

### Accedir a una propietat

Partim d’este objecte:

```javascript
const persona = {
    nom: "Anna",
    edat: 30,
    ciutat: "València"
};
```

Podem accedir a les propietats d’un objecte principalment de dues formes:

* amb **notació de punt**
* amb **notació amb claudàtors**

---

* **Notació de punt**

És la forma més habitual quan coneixem el nom de la propietat.

```javascript
console.log(persona.nom);
console.log(persona.edat);
```

```javascript
// Eixida:
Anna
30
```

Ací:

* `persona.nom` accedeix al valor de `nom`
* `persona.edat` accedeix al valor de `edat`

---

* **Notació amb claudàtors**

També podem accedir a una propietat posant el seu nom com a text entre claudàtors.

```javascript
console.log(persona["ciutat"]);
```

```javascript
// Eixida:
València
```

Esta forma fa el mateix, però amb una sintaxi diferent.

---

* **Comparativa**

```javascript
console.log(persona.nom);
console.log(persona["nom"]);
console.log(persona.ciutat);
console.log(persona["ciutat"]);
```

```javascript
// Eixida:
Anna
Anna
València
València
```

La diferència no és el resultat, sinó la manera d’escriure-ho.

La notació de punt és la més habitual quan coneixem el nom de la propietat i és un nom normal.

La notació amb claudàtors és molt útil quan la propietat té espais o quan treballem amb el nom de la propietat com a text.

Per exemple:

```javascript
const producte = {
    "nom del producte": "Auriculars",
    preu: 29.99
};

console.log(producte["nom del producte"]);
```

```javascript
// Eixida:
Auriculars
```

---

### Modificar una propietat

Podem canviar el valor d’una propietat assignant-li un nou valor.

```javascript
const persona = {
    nom: "Anna",
    edat: 30,
    ciutat: "València"
};

persona.edat = 31;

console.log(persona.edat);
console.log(persona);
```

```javascript
// Eixida:
31
{ nom: 'Anna', edat: 31, ciutat: 'València' }
```

En este cas:

* abans `edat` valia `30`
* ara `edat` val `31`

Per tant, les propietats d’un objecte es poden modificar.

---

* **OJO: objecte amb `const`**

Encara que l’objecte estiga declarat amb `const`, podem modificar les seues propietats.

```javascript
const persona = {
    nom: "Anna",
    edat: 30
};

persona.edat = 31;
console.log(persona);
```

```javascript
// Eixida:
{ nom: 'Anna', edat: 31 }
```

Açò és correcte.

El que no podem fer és reassignar l’objecte complet.

```javascript
const persona = {
    nom: "Anna"
};

persona = {
    nom: "Laura"
};
```

```javascript
// Error
```

Per tant:

* amb `const` no podem canviar l’objecte per un altre
* però sí que podem modificar les seues propietats

---

### Afegir una nova propietat

Podem **afegir noves propietats** en qualsevol moment.

```javascript
const persona = {
    nom: "Anna",
    edat: 30
};

persona.professio = "Programadora";

console.log(persona.professio);
console.log(persona);
```

```javascript
// Eixida:
Programadora
{ nom: 'Anna', edat: 30, professio: 'Programadora' }
```

Això significa que els objectes en JavaScript són **dinàmics**.

No cal definir totes les propietats des del principi.

Podem començar amb un objecte senzill i després afegir més informació.

```javascript
const llibre = {
    titol: "1984"
};

llibre.autor = "George Orwell";
llibre.any = 1949;

console.log(llibre);
```

```javascript
// Eixida:
{ titol: '1984', autor: 'George Orwell', any: 1949 }
```

---

### Eliminar una propietat

Per eliminar una propietat utilitzem l’operador `delete`.

```javascript
const persona = {
    nom: "Anna",
    edat: 30,
    ciutat: "València"
};

delete persona.ciutat;

console.log(persona);
console.log(persona.ciutat);
```

```javascript
// Eixida:
{ nom: 'Anna', edat: 30 }
undefined
```

Després d’eliminar-la:

* la propietat `ciutat` ja no existeix dins de l’objecte
* si intentem accedir-hi, obtenim `undefined`

---

## Iterar un objecte

Quan treballem amb objectes, moltes vegades volem recórrer les seues propietats.

Per a això utilitzem el bucle `for...in`.

```javascript
const persona = {
    nom: "Anna",
    edat: 30,
    ciutat: "València"
};

for (let clau in persona) {
    console.log(clau + ": " + persona[clau]);
}
```

```javascript
// Eixida:
nom: Anna
edat: 30
ciutat: València
```

En cada iteració:

* `clau` conté el nom d’una propietat, es una variable que creem nosaltres per a poder iterar per les propietats de l’objecte. Pot tindre qualsevol nom, però és habitual usar `clau` o `key`.
* `persona[clau]` conté el valor associat a eixa propietat

---

### Per què s’usen claudàtors en `for...in`?

Açò és important.

Dins del bucle, `clau` és una variable que va canviant de valor:

* primer val `"nom"`
* després val `"edat"`
* després val `"ciutat"`

Per això escrivim:

```javascript
persona[clau]
```

i no:

```javascript
persona.clau
```

Perquè `persona.clau` buscaria una propietat que es diguera literalment `clau`, i això no és el que volem.

Volem que JavaScript use el valor que hi ha dins de la variable `clau`.

---

### Comprovar si una propietat existeix

Podem utilitzar l’operador `in`.

```javascript
const persona = {
    nom: "Anna",
    edat: 30
};

console.log("nom" in persona);
console.log("altura" in persona);
```

```javascript
// Eixida:
true
false
```

Això significa:

* `"nom" in persona` → és `true` perquè la propietat existeix
* `"altura" in persona` → és `false` perquè no existeix

Això és útil quan treballem amb objectes dinàmics o quan no sabem segur quines propietats hi haurà.

---

### Objectes i arrays combinats

És molt habitual combinar arrays i objectes.

Per exemple, una llista de persones:

```javascript
const persones = [
    { nom: "Anna", edat: 30 },
    { nom: "Marc", edat: 25 },
    { nom: "Laura", edat: 28 }
];

console.log(persones[0].nom);
console.log(persones[1].edat);
```

```javascript
// Eixida:
Anna
25
```

En este cas:

* `persones` és un array
* cada element de l’array és un objecte
* podem accedir combinant índex i propietat

Per exemple:

* `persones[0]` és el primer objecte
* `persones[0].nom` accedeix al `nom` d’eixe objecte

Este patró és molt comú en aplicacions reals i també quan treballem amb JSON.

---

### Exemple més complet

```javascript
const alumnes = [
    { nom: "Pau", nota: 8 },
    { nom: "Marta", nota: 7 },
    { nom: "Joan", nota: 9 }
];

console.log(alumnes[1]);
console.log(alumnes[1].nom);
console.log(alumnes[1].nota);
```

```javascript
// Eixida:
{ nom: 'Marta', nota: 7 }
Marta
7
```

Ací es veu clarament com es combina:

* l’índex de l’array
* la propietat de l’objecte

---

### Mètodes útils d’Object

JavaScript proporciona alguns mètodes que ens ajuden a treballar amb objectes.

---

#### `Object.keys()`

Retorna un array amb les claus de l’objecte.

```javascript
const persona = {
    nom: "Anna",
    edat: 30,
    ciutat: "València"
};

console.log(Object.keys(persona));
```

```javascript
// Eixida:
[ 'nom', 'edat', 'ciutat' ]
```

És útil quan volem obtindre els noms de les propietats.

---

#### `Object.values()`

Retorna un array amb els valors de l’objecte.

```javascript
const persona = {
    nom: "Anna",
    edat: 30,
    ciutat: "València"
};

console.log(Object.values(persona));
```

```javascript
// Eixida:
[ 'Anna', 30, 'València' ]
```

Ací no obtenim les claus, sinó els valors.

---

#### Exemple combinat

```javascript
const llibre = {
    titol: "1984",
    autor: "George Orwell",
    any: 1949
};

console.log(Object.keys(llibre));
console.log(Object.values(llibre));
```

```javascript
// Eixida:
[ 'titol', 'autor', 'any' ]
[ '1984', 'George Orwell', 1949 ]
```

Per tant:

* `Object.keys()` retorna les claus
* `Object.values()` retorna els valors

---

#### `Object.assign()`

Permet copiar o fusionar objectes.

```javascript
const persona = {
    nom: "Anna",
    edat: 30
};

const personaCopia = Object.assign({}, persona);

console.log(personaCopia);
```

```javascript
// Eixida:
{ nom: 'Anna', edat: 30 }
```

Ací estem creant una còpia de l’objecte `persona`.

La idea és esta:

* `{}` crea un objecte buit
* `Object.assign({}, persona)` copia dins d’eixe objecte buit les propietats de `persona`

---

#### Exemple de fusió

```javascript
const dadesBase = {
    nom: "Anna",
    edat: 30
};

const dadesExtra = {
    ciutat: "València",
    professio: "Programadora"
};

const personaCompleta = Object.assign({}, dadesBase, dadesExtra);

console.log(personaCompleta);
```

```javascript
// Eixida:
{ nom: 'Anna', edat: 30, ciutat: 'València', professio: 'Programadora' }
```

Això permet unir informació de diversos objectes.

---

### Congelar un objecte

Podem impedir modificacions utilitzant `Object.freeze()`.

```javascript
const persona = {
    nom: "Anna",
    edat: 30
};

Object.freeze(persona);

persona.edat = 31;
persona.ciutat = "València";
delete persona.nom;

console.log(persona);
```

```javascript
// Eixida:
{ nom: 'Anna', edat: 30 }
```

Després de congelar-lo:

* no es poden modificar propietats
* no es poden afegir propietats
* no es poden eliminar propietats

Per tant, l’objecte queda bloquejat.

---


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

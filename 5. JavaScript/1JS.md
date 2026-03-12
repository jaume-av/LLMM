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

```javascript id="p5znq4"
const colors = ["blau", "groc", "roig"];
console.log(colors.length); // 3
```

Aquesta propietat és molt útil quan treballem amb bucles.

---

### Afegir i eliminar elements

#### Afegir al final → push()

```javascript id="e8w1dl"
const colors = ["blau", "verd"];
colors.push("roig");

console.log(colors);
```

`push()` afegeix un element al final de l’array.

---

#### Eliminar l’últim element → pop()

```javascript id="x7d4os"
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

```javascript id="6u2rty"
const colors = ["blau", "groc", "roig"];
console.log(colors.indexOf("groc")); // 1
```

Si no el troba, retorna `-1`.

---

### join()

Uneix tots els elements en una cadena de text.

```javascript id="q3p9ws"
const colors = ["blau", "groc", "roig"];
console.log(colors.join(", "));
```

Resultat:

```
blau, groc, roig
```

---

### slice()

Retorna una còpia d’una part de l’array.

No modifica l’array original.

```javascript id="k8j3fn"
const colors = ["blau", "groc", "roig"];
const subarray = colors.slice(1, 3);

console.log(subarray); // ["groc", "roig"]
```

El segon paràmetre no està inclòs.

---

### splice()

Modifica l’array original.

Pot eliminar o afegir elements.

```javascript id="u4msx2"
const colors = ["blau", "groc", "roig"];
colors.splice(1, 1);

console.log(colors);
```

En este cas:

* Comença en la posició 1.
* Elimina 1 element.

Diferència important:

* `slice()` no modifica l’array.
* `splice()` sí el modifica.

És important entendre aquesta diferència per evitar errors.

---


## 5. Objectes

Fins ara hem treballat amb:

* Valors individuals (números, text, booleans).
* Col·leccions ordenades (arrays).

Però moltes vegades necessitem representar una **entitat amb diverses propietats relacionades**.

Per exemple:

* Una persona amb nom, edat i ciutat.
* Un producte amb nom, preu i estoc.
* Una tasca amb text i estat de completada.

Per a això utilitzem els **objectes**.

Un objecte és una estructura formada per **parells clau–valor**.

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

En este exemple:

* `persona` és un objecte.
* Té tres propietats: `nom`, `edat` i `ciutat`.
* Cada propietat té un valor associat.

A diferència de JSON, en JavaScript no és necessari posar les claus entre cometes si són identificadors vàlids.

Entenem com a identificadors vàlids aquells que:
* Comencen amb una lletra, un guió baix `_` o un signe de dòlar `$`.
* No contenen espais ni caràcters especials.
* No són paraules reservades del llenguatge.
* Per exemple, `nom`, `edat` i `ciutat` són identificadors vàlids, per això no necessiten cometes.
* Si la clau no és un identificador vàlid, sí que hem de posar-la entre cometes.
* Per exemple:

```javascript
const producte = {
    "nom del producte": "Auriculars",
    preu: 29.99,
    disponible: true
};
``` 

---

### Accedir a una propietat

Podem accedir als valors d’un objecte utilitzant la notació de punt.

```javascript
console.log(persona.nom);
console.log(persona.edat);
```

També podem utilitzar la notació amb claudàtors.

```javascript
console.log(persona["ciutat"]);
```

La notació de punt és la més habitual quan coneixem el nom de la propietat.

---

### Modificar una propietat

Podem canviar el valor d’una propietat assignant-li un nou valor.

```javascript
persona.edat = 31;
console.log(persona.edat);
```

Encara que l’objecte estiga declarat amb `const`, podem modificar les seues propietats.
El que no podem fer és reassignar l’objecte complet.

---

### Afegir una nova propietat

Podem afegir noves propietats en qualsevol moment.

```javascript
persona.professio = "Programadora";
console.log(persona.professio);
```

Els objectes en JavaScript són dinàmics.
No cal definir totes les propietats des del principi.

A diferencia de java o altres llenguatges, no existeix una classe o plantilla fixa que determine quines propietats té un objecte.

---

### Eliminar una propietat

Per eliminar una propietat utilitzem l’operador `delete`.

```javascript
delete persona.ciutat;
console.log(persona.ciutat); // undefined
```

Després d’eliminar-la, la propietat ja no existeix dins de l’objecte.

---

## Iterar un objecte

Quan treballem amb objectes, moltes vegades volem recórrer les seues propietats.

Per a això utilitzem el bucle `for...in`.

```javascript
for (let clau in persona) {
    console.log(clau + ": " + persona[clau]);
}
```

En cada iteració:

* `clau` conté el nom de la propietat.
* `persona[clau]` conté el valor associat.

---

### Comprovar si una propietat existeix

Podem utilitzar l’operador `in`.

```javascript
console.log("nom" in persona);     // true
console.log("altura" in persona);  // false
```

Això és útil quan treballem amb objectes dinàmics.

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
```

En este cas:

* `persones` és un array.
* Cada element és un objecte.
* Podem accedir combinant índex i propietat.

Aquest patró és molt comú en aplicacions reals i també quan treballem amb dades del DOM o amb JSON.

---

### Mètodes útils d’Object

JavaScript proporciona alguns mètodes que ens ajuden a treballar amb objectes.

---

* **Object.keys()**

Retorna un array amb les claus.

```javascript
console.log(Object.keys(persona));
```

---

* **Object.values()**

Retorna un array amb els valors.

```javascript
console.log(Object.values(persona));
```

---

* **Object.assign()**

Permet copiar o fusionar objectes.

```javascript
const personaCopia = Object.assign({}, persona);
console.log(personaCopia);
```

Això crea una còpia superficial de l’objecte.

---

### Congelar un objecte

Podem impedir modificacions utilitzant `Object.freeze()`.

```javascript
Object.freeze(persona);
```

Després d’això:

* No es poden modificar propietats.
* No es poden afegir.
* No es poden eliminar.

---

### Relació amb el DOM

És important entendre que:

Quan treballem amb el DOM, els elements HTML que obtenim amb JavaScript també són **objectes**.

Per exemple:

```javascript
const titol = document.querySelector("h1");
```

`titol` és un objecte amb propietats i mètodes.

Per això és fonamental entendre bé què és un objecte abans d’entrar en profunditat en el DOM.

---


Perfecte. Continuem amb el següent bloc complet, mantenint el mateix nivell, sense pujar dificultat i preparant el terreny per al DOM.

---

## 6. Funcions

Fins ara hem escrit codi que s’executa de manera seqüencial.

Però moltes vegades necessitem:

* Reutilitzar un mateix bloc de codi.
* Organitzar millor el programa.
* Executar una acció només quan la necessitem.

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

* `saludar` és el nom de la funció.
* El codi dins de les claus és el que s’executarà quan la cridem.

Per executar-la, hem de cridar-la pel seu nom:

```javascript
saludar();
```

És important incloure els parèntesis, encara que no tinga paràmetres.

---

### Funcions amb paràmetres

Les funcions poden rebre informació a través de **paràmetres**.

```javascript
function saludar(nom) {
    console.log("Hola, " + nom + "!");
}

saludar("Anna");
```

En este exemple:

* `nom` és el paràmetre.
* `"Anna"` és l’argument que passem en la crida.

Els paràmetres permeten que una mateixa funció treballe amb valors diferents.

---

### Retornar un valor

Les funcions poden retornar un resultat utilitzant la paraula clau `return`.

```javascript
function suma(a, b) {
    return a + b;
}

const resultat = suma(5, 3);
console.log(resultat);
```

En este cas:

* La funció calcula la suma.
* `return` envia el resultat cap a fora.
* El valor retornat es pot guardar en una variable.

Si una funció no té `return`, el valor que retorna és `undefined`.

---

## Funcions com a valors 

En JavaScript, les funcions són valors.

Això significa que podem:

* Assignar-les a una variable.
* Passar-les com a argument a una altra funció.

A diferencia de Java o altres llenguatges, en JavaScript les funcions no són només blocs de codi, sinó que també són objectes que es poden manipular com a qualsevol altre valor.



### Expressió de funció  (funció anònima)

Podem definir una funció i assignar-la a una variable.

```javascript
const saludar = function(nom) {
    console.log("Hola, " + nom + "!");
};

saludar("Marc");
```

En este cas:

* La funció no té nom propi.
* Està guardada dins de la variable `saludar`.

Això es diu **funció anònima**.

---

### Funcions com a paràmetres

Podem passar una funció a una altra funció.

```javascript
function operacio(a, b, func) {
    return func(a, b);
}

const multiplicar = function(x, y) {
    return x * y;
};

const resultat = operacio(4, 5, multiplicar);
console.log(resultat);
```

En este exemple:

* `operacio` rep una funció com a tercer paràmetre.
* Executa aquesta funció amb els valors rebuts.

Aquest patró és molt habitual, especialment en el treball amb esdeveniments del DOM.

---

## Funcions de fletxa (Arrow Functions)

JavaScript modern permet definir funcions d’una manera més compacta amb la sintaxi de fletxa `=>`.

```javascript
const suma = (a, b) => {
    return a + b;
};

console.log(suma(2, 3));
```

Si la funció només té una expressió, podem ometre les claus i el `return`.

```javascript
const quadrat = num => num * num;

console.log(quadrat(4));
```

En este cas:

* `num` és el paràmetre.
* `num * num` és el valor retornat automàticament.

També podem definir funcions sense paràmetres:

```javascript
const saludar = () => {
    console.log("Hola món");
};

saludar();
```

Les funcions de fletxa són molt utilitzades, especialment quan treballem amb:

* `forEach`
* `addEventListener`
* Mètodes d’arrays

---

## Relació amb el DOM

Quan treballem amb esdeveniments, necessitem passar una funció que s’execute quan ocorre una acció.

Per exemple:

```javascript
const boto = document.querySelector("button");

boto.addEventListener("click", function() {
    console.log("Has fet clic");
});
```

En este cas:

* No cridem la funció immediatament.
* La passem com a paràmetre.
* El navegador la cridarà quan es produïsca l’esdeveniment.

També podem utilitzar una funció de fletxa:

```javascript
boto.addEventListener("click", () => {
    console.log("Has fet clic");
});
```

Per això és important entendre bé què són les funcions abans d’entrar en profunditat en el DOM.

---


## 7. Introducció al DOM

Fins ara hem treballat amb JavaScript com a llenguatge: variables, funcions, arrays, objectes.

Però encara no hem respost la pregunta més important:

Com interactua JavaScript amb la pàgina web?

La resposta és el **DOM**.

---

### Què és el DOM

Quan el navegador carrega un document HTML, no el tracta simplement com a text.

El converteix en una estructura d’objectes organitzada en forma d’arbre.

Aquesta estructura es denomina **Document Object Model**, o simplement **DOM**.

Això significa que:

* Cada etiqueta HTML és un objecte.
* Cada atribut és part d’un objecte.
* El text també forma part de l’estructura.

I com que són objectes, podem treballar amb ells utilitzant JavaScript.

---

### L’objecte document

El punt d’entrada al DOM és l’objecte global `document`.

Quan escrivim:

```javascript
console.log(document);
```

El que estem veient és la representació de l’arbre complet del document HTML.

A partir de `document` podem:

* Buscar elements.
* Crear elements nous.
* Modificar contingut.
* Afegir o eliminar nodes.
* Gestionar esdeveniments.

---

### Seleccionar elements

Per poder modificar un element, primer hem de seleccionar-lo.

En JavaScript modern utilitzarem principalment:

* `querySelector`
* `querySelectorAll`

---

* **querySelector**

Retorna el primer element que coincideix amb un selector CSS.

```javascript
const titol = document.querySelector("h1");
console.log(titol);
```

També podem seleccionar per id:

```javascript
const caixa = document.querySelector("#caixa");
```

O per classe:

```javascript
const element = document.querySelector(".important");
```

És molt flexible perquè utilitza la mateixa sintaxi que CSS.

---

* **querySelectorAll**

Retorna tots els elements que coincideixen amb el selector.

```javascript
const paragrafs = document.querySelectorAll("p");
console.log(paragrafs);
```

El resultat és una col·lecció d’elements que podem recórrer.

Per exemple:

```javascript
paragrafs.forEach(paragraf => {
    console.log(paragraf.textContent);
});
```

Ací estem combinant:

* Arrays
* Funcions de fletxa
* DOM

Tot comença a connectar-se.

---

## Modificar contingut

Una vegada tenim una referència a un element, podem modificar-lo.

---

### textContent

Permet canviar el text d’un element.

```javascript
const titol = document.querySelector("h1");
titol.textContent = "Nou títol";
```

És la forma recomanada per modificar text.

---

### classList

Permet gestionar classes CSS.

```javascript
const caixa = document.querySelector("#caixa");

caixa.classList.add("activa");
caixa.classList.remove("activa");
caixa.classList.toggle("activa");
```

`toggle()` és especialment útil perquè:

* Si la classe no existeix, l’afegeix.
* Si existeix, l’elimina.

Això és molt habitual en interaccions.

---

## Crear i afegir elements

També podem crear elements nous.

```javascript
const nouDiv = document.createElement("div");
nouDiv.textContent = "Element creat dinàmicament";

document.body.appendChild(nouDiv);
```

En este procés:

1. Creem l’element.
2. Li assignem contingut.
3. L’afegim al document.

És exactament el que feiem en l’exemple de la llista de tasques.

---

## Eliminar elements

Per eliminar un element podem utilitzar el mètode `remove()`.

```javascript
const element = document.querySelector("#caixa");
element.remove();
```

És una forma moderna i directa d’eliminar-lo del DOM.

---

## Esdeveniments

Un dels punts més importants del DOM és que podem reaccionar a les accions de l’usuari.

Per fer això utilitzem `addEventListener`.

```javascript
const boto = document.querySelector("#meuBoto");

boto.addEventListener("click", () => {
    console.log("Has fet clic en el botó");
});
```

En este cas:

* No executem la funció immediatament.
* La passem com a paràmetre.
* El navegador l’executarà quan es produïsca l’esdeveniment.

Alguns esdeveniments habituals són:

* `"click"`
* `"mouseenter"`
* `"mouseleave"`
* `"keyup"`
* `"submit"`

---




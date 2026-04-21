## Explicació breu de `<template>`

`<template>` és una etiqueta especial de HTML que **no es mostra directament en pantalla**.

Servix com a **motle invisible** perquè Alpine puga repetir el contingut que hi ha dins.

Quan escrivim:

```html
<template x-for="ciutat in ciutats">
```

Alpine llig l’array `ciutats` i copia el contingut interior una vegada per cada ciutat.

Per això, si hi ha 5 ciutats, crearà 5 elements HTML.

Sense `<template>`, Alpine no tindria un contenidor net i correcte per repetir blocs complets de codi HTML.

---

## On inserir-ho en el tutorial

La millor zona és **just després de l’explicació de `x-for`**, perquè és quan apareix per primera vegada.

## Concretament:

Després d’esta part:

````md
### `x-for`

Servix per recórrer una llista de dades.

Exemple:

```html
<template x-for="ciutat in ciutats">
````

Açò significa que Alpine recorrerà l’array `ciutats` i repetirà el contingut del `template` una vegada per cada element.

````

## Afegir immediatament després:

```md
### Què és `<template>`

`<template>` és una etiqueta HTML especial que no es veu en pantalla.

Servix com a motle invisible perquè Alpine puga duplicar el contingut interior tantes vegades com elements tinga l’array.

Si l’array `ciutats` té 3 elements, Alpine repetirà el contingut 3 vegades.
````

---

## Motiu pedagògic

Així l’alumnat entén al moment:

* què és `x-for`
* què és `template`
* per què van junts
* com es genera la llista

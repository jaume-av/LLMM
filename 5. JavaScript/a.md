---
title: 7.- Alpine amb les peticions GET
parent: 6.- Projecte API
layout: default
nav_order: 40
has_children: true

---


# Introducció a Alpine i visualització de dades GET

Després de refactoritzar les rutes GET, el projecte ja té una estructura més clara:

* `index.js` per a les rutes generals
* `paisos.js` per als països
* `provincies.js` per a les províncies
* `ciutats.js` per a les ciutats

Ara farem el pas següent:

```text
API → JSON → Alpine → HTML
```

És a dir:

* el navegador farà una petició a la API
* rebrà dades en format JSON
* i les mostrarem dins d’una pàgina web

En esta part treballarem amb **Alpine**, una llibreria de JavaScript molt lleugera que ens permet fer pàgines dinàmiques sense muntar un framework gran.

L’objectiu serà visualitzar en una pàgina web les dades que ja retornen les nostres rutes GET.

En esta primera pràctica amb Alpine treballarem sobre la ruta:

```text
/api/ciutats
```

i mostrarem en pantalla la llista de ciutats.

Carregarem les llibreies **Alpine** i **Picnic CSS** des de CDN, així que no caldrà instal·lar res.

[cdnjs](https://cdnjs.com/)

---

# Què és Alpine

**Alpine** és una llibreria de JavaScript que ens permet afegir comportament dinàmic a una pàgina HTML d’una manera molt simple.

La seua idea és:

* el HTML continua sent el centre de la pàgina
* Alpine ens deixa afegir dades i comportament directament sobre eixe HTML
* no necessitem una configuració gran
* no necessitem compilar res

Per això és una molt bona opció per a un projecte com el nostre.

Amb Alpine podem:

* guardar dades en variables
* mostrar dades en el HTML
* recórrer arrays
* cridar funcions
* reaccionar quan la pàgina es carrega
* connectar fàcilment amb la nostra API

---

# Què farem exactament amb Alpine

En esta pràctica volem fer una cosa concreta:

* crear una pàgina HTML
* carregar Alpine
* crear un component
* cridar la ruta GET `/api/ciutats`
* guardar les dades rebudes
* mostrar-les en una llista

Treballarem amb:

* `x-data`
* `x-init`
* `x-for`
* `x-text`

I també amb:

* `fetch()`
* `.then(...)`
* `resposta.json()`

---

# Què significa cada peça que utilitzarem

## `x-data`

Servix per crear un component Alpine.

Exemple:

```html
<div x-data="ciutatsApp()">
```

---

## `x-init`

Executa una funció quan es crea el component.

```html
<div x-data="ciutatsApp()" x-init="carregarCiutats()">
```

---

## `x-for`

Recorre una llista de dades.

```html
<template x-for="ciutat in ciutats">
```

---

## `x-text`

Mostra un valor dins del HTML.

```html
<span x-text="ciutat.NOM"></span>
```

---

# Com funciona el procés complet

```text
1. El navegador obri ciutats.html
2. Alpine es carrega
3. Alpine crea el component
4. Alpine executa carregarCiutats()
5. fetch() demana /api/ciutats
6. Express consulta SQLite
7. la API retorna JSON
8. Alpine guarda les dades en un array
9. el HTML es redibuixa automàticament
```

---

# On posarem els fitxers

Treballarem dins de:

```text
public/
```

Estructura:

```text
public/
├── ciutats.html
└── js
    └── ciutats.js
```

---

# Pas 1. Crear carpeta `js`

Dins de `public`:

```text id="g9n4or"
js
```

---

# Pas 2. Crear `ciutats.html`

```html id="k3w7b0"
<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <title>Llista de ciutats</title>
</head>
<body>

<h1>Llista de ciutats</h1>

</body>
</html>
```

---

# Pas 3. Provar que es veu

```text id="d8r6pa"
http://localhost:3000/ciutats.html
```

Hauries de veure:

```text id="n5m8q2"
Llista de ciutats
```

---

# Pas 4. Carregar Alpine

Dins de `<head>` afegix:

```html id="u1s4cv"
<script defer src="https://cdnjs.cloudflare.com/ajax/libs/alpinejs/3.15.0/cdn.min.js"></script>
```

Quedarà:

```html id="h2f6yz"
<head>
    <meta charset="UTF-8">
    <title>Llista de ciutats</title>

    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/alpinejs/3.15.0/cdn.min.js"></script>
</head>
```

---

# Pas 4.5. Carregar Picnic CSS

Dins de `<head>` afegix:

```html id="p4v9ke"
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/picnic/7.1.0/picnic.min.css">
```

Quedarà:

```html id="r5d0mj"
<head>
    <meta charset="UTF-8">
    <title>Llista de ciutats</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/picnic/7.1.0/picnic.min.css">
    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/alpinejs/3.15.0/cdn.min.js"></script>
</head>
```

---

# Pas 5. Crear `public/js/ciutats.js`

```javascript id="b6x2td"
window.ciutatsApp = function() {
    return {
        missatge: 'Alpine funciona'
    };
};
```

---

# Pas 6. Connectar `ciutats.js`

Afegix també dins de `<head>`:

```html id="n7z1co"
<script src="js/ciutats.js" defer></script>
```

Quedarà:

```html id="q8a4lr"
<head>
    <meta charset="UTF-8">
    <title>Llista de ciutats</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/picnic/7.1.0/picnic.min.css">
    <script src="js/ciutats.js" defer></script>
    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/alpinejs/3.15.0/cdn.min.js"></script>
</head>
```

---

# Pas 7. Primer component Alpine

Dins de `<body>`:

```html id="j4f7xp"
<div x-data="ciutatsApp()">
    <p x-text="missatge"></p>
</div>
```

---

# Pas 8. Provar que Alpine funciona

En:

```text id="v9m2qe"
http://localhost:3000/ciutats.html
```

Hauries de veure:

```text id="t3n6kd"
Llista de ciutats
Alpine funciona
```

---

# Pas 9. Preparar array de ciutats

```javascript id="x2w8gh"
window.ciutatsApp = function() {
    return {
        ciutats: []
    };
};
```

---

# Pas 10. Crear funció GET

```javascript id="f6r1yu"
window.ciutatsApp = function() {
    return {
        ciutats: [],

        carregarCiutats() {
            fetch('/api/ciutats')
                .then(function(resposta) {
                    return resposta.json();
                })
                .then(function(dades) {
                    console.log(dades);
                });
        }
    };
};
```

---

# Pas 11. Executar automàticament

```html id="m5s9cv"
<div x-data="ciutatsApp()" x-init="carregarCiutats()">
    <p>Comprovant dades...</p>
</div>
```

---

# Pas 11.5. Verificació completa

```javascript id="z8e2tn"
window.ciutatsApp = function() {
    return {
        ciutats: [],

        carregarCiutats() {
            console.log("carregarCiutats executat");

            fetch('/api/ciutats')
                .then(function(resposta) {
                    console.log("resposta rebuda");
                    return resposta.json();
                })
                .then(function(dades) {
                    console.log("dades convertides");
                    console.log(dades);
                });
        }
    };
};
```

En consola hauries de veure:

```text id="k1u7mw"
carregarCiutats executat
resposta rebuda
dades convertides
[ ... ]
```

---

# Pas 12. Comprovar dades

Obri consola del navegador.

Hauries de veure l’array de ciutats.

---

# Pas 13. Guardar dades dins Alpine

```javascript id="c3t5vz"
window.ciutatsApp = function() {
    return {
        ciutats: [],

        carregarCiutats() {
            fetch('/api/ciutats')
                .then(function(resposta) {
                    return resposta.json();
                })
                .then((dades) => {
                    this.ciutats = dades;
                });
        }
    };
};
```

---

# Pas 14. Mostrar noms

```html id="d4y8an"
<div x-data="ciutatsApp()" x-init="carregarCiutats()">
    <ul>
        <template x-for="ciutat in ciutats" :key="ciutat.ID">
            <li x-text="ciutat.NOM"></li>
        </template>
    </ul>
</div>
```

---

# Pas 15. Mostrar més camps

```html id="g7m2qe"
<div x-data="ciutatsApp()" x-init="carregarCiutats()">
    <ul>
        <template x-for="ciutat in ciutats" :key="ciutat.ID">
            <li>
                <strong x-text="ciutat.NOM"></strong>
                -
                <span x-text="ciutat.DESCRIPCIO"></span>
                -
                <span x-text="ciutat.POBLACIO"></span>
            </li>
        </template>
    </ul>
</div>
```

---

# Codi final `ciutats.html`

```html id="h9r4tv"
<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <title>Llista de ciutats</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/picnic/7.1.0/picnic.min.css">
    <script src="js/ciutats.js" defer></script>
    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/alpinejs/3.15.0/cdn.min.js"></script>
</head>
<body>

<h1>Llista de ciutats</h1>

<div x-data="ciutatsApp()" x-init="carregarCiutats()">
    <ul>
        <template x-for="ciutat in ciutats" :key="ciutat.ID">
            <li>
                <strong x-text="ciutat.NOM"></strong>
                -
                <span x-text="ciutat.DESCRIPCIO"></span>
                -
                <span x-text="ciutat.POBLACIO"></span>
            </li>
        </template>
    </ul>
</div>

</body>
</html>
```

---

# Codi final `ciutats.js`

```javascript id="j6n1pw"
window.ciutatsApp = function() {
    return {
        ciutats: [],

        carregarCiutats() {
            fetch('/api/ciutats')
                .then(function(resposta) {
                    return resposta.json();
                })
                .then((dades) => {
                    this.ciutats = dades;
                });
        }
    };
};
```

---

# En resum

Hem aprés a:

* carregar Alpine
* crear component
* fer GET
* consumir API
* guardar dades
* mostrar dades

---

# Idea final

**Alpine no substituïx la API. Alpine consumix la API i mostra dades.**

```text id="f2q8yx"
Navegador → Alpine → fetch → API Express → SQLite → JSON → Alpine → HTML
```

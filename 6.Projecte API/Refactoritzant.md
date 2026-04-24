````markdown
# Refactorització del projecte per a convertir-lo en SPA

Ara que ja hem entés què és una SPA i per què ens convé, anem a fer la refactorització del projecte pas a pas.

L’objectiu és passar de:

```text
diversos HTML separats
````

a:

```text
una sola pàgina principal + diverses vistes internes
```

És a dir, deixarem de treballar amb:

* `ciutats.html`
* `paisos.html`
* `provincies.html`

i passarem a treballar amb:

* `index.html`
* `app.js`
* `ciutats.js`
* `paisos.js`
* `provincies.js`

---

## Què volem aconseguir

Al final d’esta part volem tindre una estructura així:

```text
public/
├── index.html
└── js/
    ├── app.js
    ├── ciutats.js
    ├── paisos.js
    └── provincies.js
```

I volem que:

* `index.html` siga la pàgina principal
* hi haja un menú de navegació
* cada opció del menú mostre una vista diferent
* el contingut canvie dins d’una zona central
* no calga obrir un HTML diferent per a cada recurs

---

## Idea general de la refactorització

Fins ara cada recurs tenia:

* el seu HTML
* el seu JS
* la seua càrrega de dades

Ara ho reorganitzarem així:

### `index.html`

Contindrà:

* el `head`
* els scripts
* el menú
* el contenidor principal de la SPA

### `app.js`

Controlarà:

* la navegació general
* quina vista es mostra
* les funcions comunes d’arrencada

### `ciutats.js`

Contindrà tot el relacionat amb la vista de ciutats.

### `paisos.js`

Contindrà tot el relacionat amb la vista de països.

### `provincies.js`

Contindrà tot el relacionat amb la vista de províncies.

---

## Situació inicial

Partim d’una estructura pareguda a esta:

```text
public/
├── ciutats.html
├── paisos.html
├── provincies.html
└── js/
    ├── ciutats.js
    ├── paisos.js
    └── provincies.js
```

I cada HTML es podia obrir directament.

Ara això canviarà.

---

# Pas 1. Crear `index.html`

Dins de `public`, crea un fitxer nou:

```text
index.html
```

i copia este codi:

```html
<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <title>Projecte API</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/picnic/7.1.0/picnic.min.css">

    <script src="js/app.js" defer></script>
    <script src="js/ciutats.js" defer></script>
    <script src="js/paisos.js" defer></script>
    <script src="js/provincies.js" defer></script>
</head>
<body>

<main class="container">

    <h1>Projecte API</h1>

    <nav>
        <a href="#" onclick="mostrarCiutats()">Ciutats</a>
        <a href="#" onclick="mostrarPaisos()">Països</a>
        <a href="#" onclick="mostrarProvincies()">Províncies</a>
    </nav>

    <hr>

    <div id="app"></div>

</main>

</body>
</html>
```

Guarda el fitxer.

---

## Què hem creat

En este primer pas hem creat la base de la SPA.

### `nav`

És el menú principal.

### `<div id="app"></div>`

És la zona on canviarem el contingut.

Açò és molt important, perquè ara ja no mostrarem les dades en pàgines diferents, sinó dins d’este contenidor.

---

# Pas 2. Crear `public/js/app.js`

Ara crea el fitxer:

```text
public/js/app.js
```

i copia este codi:

```javascript
function mostrarCiutats() {
    renderVistaCiutats();
}

function mostrarPaisos() {
    renderVistaPaisos();
}

function mostrarProvincies() {
    renderVistaProvincies();
}
```

Guarda el fitxer.

---

## Què fa `app.js`

Este fitxer actuarà com a coordinador general.

No carregarà dades directament.

La seua funció és dir:

* quan mostrar ciutats
* quan mostrar països
* quan mostrar províncies

Per això, de moment, només crida funcions que encara crearem en els altres fitxers.

---

# Pas 3. Refactoritzar `ciutats.js`

Ara no volem que `ciutats.js` depenga d’un `ciutats.html` separat.

Ara volem que cree la seua vista dins de `#app`.

Obri `public/js/ciutats.js` i substituïx el contingut per este:

```javascript
function renderVistaCiutats() {
    document.getElementById("app").innerHTML = `
        <h2>Llista de ciutats</h2>

        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Descripció</th>
                    <th>Població</th>
                    <th>Província</th>
                    <th>Imatge</th>
                </tr>
            </thead>
            <tbody id="cos-taula-ciutats"></tbody>
        </table>
    `;

    carregarCiutats();
}

function carregarCiutats() {
    fetch('/api/ciutats')
        .then(function(resposta) {
            return resposta.json();
        })
        .then(function(dades) {

            let html = '';

            dades.forEach(function(ciutat) {
                html += `
                    <tr>
                        <td>${ciutat.ID}</td>
                        <td>${ciutat.NOM}</td>
                        <td>${ciutat.DESCRIPCIO}</td>
                        <td>${ciutat.POBLACIO}</td>
                        <td>${ciutat.PROVINCIA_NOM}</td>
                        <td>${ciutat.IMATGE}</td>
                    </tr>
                `;
            });

            document.getElementById("cos-taula-ciutats").innerHTML = html;
        });
}
```

Guarda el fitxer.

---

## Què ha canviat respecte a abans

Abans `ciutats.js` definia un component Alpine per a una pàgina que ja existia:

```text
ciutats.html
```

Ara `ciutats.js` fa una cosa diferent:

### 1. Crea la vista

```javascript
renderVistaCiutats()
```

### 2. Inserix el HTML dins de:

```html
<div id="app"></div>
```

### 3. Després carrega les dades

```javascript
carregarCiutats()
```

Per tant, la vista de ciutats ara és interna a la SPA.

---

# Pas 4. Refactoritzar `paisos.js`

Ara fem el mateix amb països.

Obri `public/js/paisos.js` i deixa’l així:

```javascript
function renderVistaPaisos() {
    document.getElementById("app").innerHTML = `
        <h2>Llista de països</h2>

        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nom</th>
                </tr>
            </thead>
            <tbody id="cos-taula-paisos"></tbody>
        </table>
    `;

    carregarPaisos();
}

function carregarPaisos() {
    fetch('/api/paisos')
        .then(function(resposta) {
            return resposta.json();
        })
        .then(function(dades) {

            let html = '';

            dades.forEach(function(pais) {
                html += `
                    <tr>
                        <td>${pais.ID}</td>
                        <td>${pais.NOM}</td>
                    </tr>
                `;
            });

            document.getElementById("cos-taula-paisos").innerHTML = html;
        });
}
```

Guarda el fitxer.

---

# Pas 5. Refactoritzar `provincies.js`

Ara fem el mateix amb províncies.

Obri `public/js/provincies.js` i deixa’l així:

```javascript
function renderVistaProvincies() {
    document.getElementById("app").innerHTML = `
        <h2>Llista de províncies</h2>

        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>País</th>
                </tr>
            </thead>
            <tbody id="cos-taula-provincies"></tbody>
        </table>
    `;

    carregarProvincies();
}

function carregarProvincies() {
    fetch('/api/provincies')
        .then(function(resposta) {
            return resposta.json();
        })
        .then(function(dades) {

            let html = '';

            dades.forEach(function(provincia) {
                html += `
                    <tr>
                        <td>${provincia.ID}</td>
                        <td>${provincia.NOM}</td>
                        <td>${provincia.PAIS_NOM}</td>
                    </tr>
                `;
            });

            document.getElementById("cos-taula-provincies").innerHTML = html;
        });
}
```

Guarda el fitxer.

---

# Pas 6. Provar la SPA

Ara obri en el navegador:

```text
http://localhost:3000/index.html
```

Hauries de veure:

* el títol del projecte
* el menú
* la línia de separació
* el contenidor buit

Ara prova a clicar:

### Ciutats

hauria de carregar la taula de ciutats.

### Països

hauria de carregar la taula de països.

### Províncies

hauria de carregar la taula de províncies.

Sense recarregar tota la pàgina.

---

## Què hem aconseguit

Ara el projecte ja no depén de:

* `ciutats.html`
* `paisos.html`
* `provincies.html`

per mostrar cada secció.

Ara tenim una aplicació on:

* el menú continua sempre visible
* només canvia la zona central
* cada vista es construeix amb JavaScript
* cada recurs té el seu propi fitxer JS

---

# Pas 7. Què fem amb els HTML antics

Ara mateix pots:

### opció A

mantindre’ls temporalment per seguretat mentre proves la nova estructura

### opció B

deixar d’usar-los i treballar només amb:

```text
index.html
```

Per al projecte SPA, la idea correcta és la segona:

**a partir d’ara, la pàgina principal serà `index.html`.**

---

# Pas 8. Nova estructura final

Després de la refactorització, la part frontend del projecte quedarà així:

```text
public/
├── index.html
└── js/
    ├── app.js
    ├── ciutats.js
    ├── paisos.js
    └── provincies.js
```

---

## Millores que ens aporta esta nova estructura

### 1. Una sola pàgina principal

Ja no hem de mantindre diversos HTML separats.

### 2. Menys repetició

No repetim:

* `<head>`
* scripts
* menú
* contenidor principal

### 3. Navegació més fluida

Canviem de secció sense recarregar tota la web.

### 4. Millor organització

Cada recurs té el seu propi fitxer JS.

### 5. Preparació per al CRUD

Ara serà molt més fàcil afegir:

* formulari de nova ciutat
* edició
* eliminació

tot dins de la mateixa aplicació.

---

# Idea clau d’esta refactorització

Abans treballàvem així:

```text
1 HTML per cada recurs
```

Ara treballarem així:

```text
1 sola pàgina + diverses vistes internes
```

Això és la base d’una SPA.

---

# En resum

En esta part hem aprés a:

* crear `index.html` com a pàgina principal
* crear un contenidor central amb `#app`
* separar la navegació general en `app.js`
* separar cada recurs en el seu propi fitxer JS
* carregar vistes dinàmicament
* preparar el projecte per a treballar com SPA

---

# Flux complet després de la refactorització

```text
Usuari
→ prem una opció del menú
→ app.js crida la vista corresponent
→ el fitxer del recurs construeix el HTML
→ fetch consulta la API
→ JSON
→ JavaScript pinta la taula dins de #app
```

El següent pas natural serà afegir formularis i operacions **POST** dins d’esta nova estructura SPA.

```
```

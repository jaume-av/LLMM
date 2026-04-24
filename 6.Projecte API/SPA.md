````md
---
title: 6.- Introducció a SPA i refactorització del projecte
parent: 6.- Projecte API
layout: default
nav_order: 60
has_children: true
---

# Introducció a SPA i refactorització del projecte

Fins ara hem treballat amb una estructura molt útil per aprendre:

* una pàgina per a ciutats
* una pàgina per a països
* una pàgina per a províncies

Per exemple:

```text
/ciutats.html
/paisos.html
/provincies.html
````

Cada pàgina feia la seua petició a la API i mostrava les dades amb Alpine.

Esta forma de treballar és bona per començar, perquè ens ha permés entendre:

* com funciona Express
* com fer rutes GET
* com retornar JSON
* com consumir la API amb `fetch()`
* com mostrar dades amb Alpine
* com treballar amb taules relacionades

És a dir, ha sigut una molt bona fase inicial del projecte.

Però ara el projecte ha crescut i convé fer un pas més modern, millor organitzat i més escalable.

---

# Què és una SPA

SPA significa:

```text
Single Page Application
```

En valencià podríem entendre-ho com:

```text
Aplicació d’una sola pàgina
```

Això vol dir que l’aplicació funciona principalment amb un únic fitxer HTML, normalment:

```text
index.html
```

I després JavaScript s’encarrega de canviar el contingut sense recarregar tota la pàgina.

És a dir:

* la pàgina principal es carrega una vegada
* després només canvia la part central
* la navegació és més fluida
* l’usuari no veu recàrregues constants
* la sensació és més moderna
* el treball és més semblant al d’aplicacions reals

---

# Com hem pensat fins ara

Fins ara cada secció era una pàgina independent.

Per exemple:

```text
ciutats.html
paisos.html
provincies.html
```

Cada fitxer tenia:

* el seu HTML
* els seus scripts
* la seua càrrega de dades
* la seua taula
* la seua estructura pròpia

Això és correcte per aprendre.

Però quan el projecte creix, esta estructura comença a tindre límits.

---

# En què millora respecte al sistema anterior

## Sistema anterior

Cada vegada que l’usuari canvia de secció:

* s’obri un HTML diferent
* el navegador recarrega tota la pàgina
* es torna a carregar el menú
* es torna a carregar CSS
* es torna a carregar JavaScript
* es perd part del context visual
* es repetix estructura en diversos fitxers

## Sistema SPA

Quan l’usuari canvia de secció:

* la pàgina principal continua oberta
* només canvia el contingut intern
* no hi ha recàrrega completa
* l’experiència és més ràpida i moderna
* la navegació és més neta
* el projecte queda millor organitzat

---

# Per què ara és bon moment per fer-ho

El projecte ja té:

* Node.js
* Express
* API REST
* SQLite
* rutes GET
* Alpine
* diverses taules relacionades

És a dir, ja tenim la base funcional.

Ja sabem:

* obtindre dades
* mostrar-les
* relacionar recursos
* separar backend i frontend

Ara volem avançar cap a:

* POST
* PUT
* DELETE
* formularis moderns
* millor organització
* experiència més professional
* menys repetició de codi
* un frontend preparat per créixer

Per això ara és un moment ideal per passar a SPA.

---

# Avantatges de treballar com SPA

## 1. Una sola pàgina principal

Treballarem amb:

```text
index.html
```

En lloc de moltes pàgines separades.

---

## 2. Navegació més ràpida

Canviar entre seccions és immediat.

---

## 3. Menys repetició de codi

No repetirem en cada HTML:

* `<head>`
* scripts
* menú
* estructura general
* contenidors comuns

---

## 4. Millor per al CRUD

Quan fem:

* crear ciutat
* editar ciutat
* eliminar ciutat

podrem fer-ho dins de la mateixa pantalla.

---

## 5. Codi més escalable

Si després afegim:

* usuaris
* categories
* estadístiques
* informes
* panell d’administració

la SPA ho suporta millor.

---

## 6. Millor manteniment

Si canviem el menú o el disseny general:

* es modifica una vegada
* no en diversos HTML

---

## 7. Arquitectura més moderna

És una forma de treball molt més pròxima a projectes professionals.

---

# Exemple clar de la millora

## Abans

L’usuari entra en:

```text
/ciutats.html
```

Després vol vore països:

```text
/paisos.html
```

El navegador:

* abandona la pàgina actual
* recarrega una altra
* torna a muntar-ho tot

Després vol províncies:

```text
/provincies.html
```

Nova recàrrega completa.

---

## Ara amb SPA

L’usuari entra en:

```text
/
```

I després prem:

```text
Ciutats
Països
Províncies
```

La pàgina principal continua oberta.

Només canvia la zona central.

Per exemple:

```html
<div id="app"></div>
```

Per tant:

* més ràpid
* més net
* més còmode
* més professional

---

# Estructura antiga del projecte frontend

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

---

# Problemes d’esta estructura

## Repetició

Cada HTML sol repetir:

* `DOCTYPE`
* `<head>`
* CSS
* scripts
* menú
* contenidor principal

## Manteniment

Si canviem el menú, cal tocar diversos fitxers.

## Escalabilitat

Si afegim 10 recursos nous:

```text
usuaris.html
productes.html
comandes.html
...
```

es complica molt.

## Organització futura

Quan afegim formularis, botons i operacions CRUD, tindre moltes pàgines separades serà més pesat de mantindre.

---

# Estructura nova que volem

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

# Explicació de la nova estructura

## `index.html`

Serà la pàgina principal.

Contindrà:

* estructura general
* menú
* zona principal
* càrrega de scripts comuns

Per exemple:

```html
<div id="app"></div>
```

Esta zona serà la que canviarà segons la secció activa.

---

## `app.js`

Controlarà:

* arrencada inicial
* navegació interna
* canvi de vistes
* coordinació general

És el fitxer central del frontend.

---

## `ciutats.js`

Tot el relacionat amb:

* llistar ciutats
* formulari de ciutat
* crear
* editar
* eliminar

---

## `paisos.js`

Tot el relacionat amb:

* llistar països
* crear
* editar
* eliminar

---

## `provincies.js`

Tot el relacionat amb:

* llistar províncies
* crear
* editar
* eliminar

---

# Per què separar en diversos JS és bona idea

És millor que tindre tot en un sol fitxer gegant.

## Avantatges

### Ordre

Cada recurs té el seu lloc.

### Lectura

És més fàcil trobar codi.

### Escalabilitat

Podem afegir:

```text
usuaris.js
productes.js
```

sense desordenar res.

### Treball real

És una estructura més professional.

---

# Millores que ens oferix esta nova estructura

## 1. Ordre

Cada recurs en el seu fitxer.

## 2. Escalabilitat

Podem afegir nous mòduls fàcilment.

## 3. Menys HTML repetit

Només un `index.html`.

## 4. Preparat per a POST, PUT i DELETE

Cada recurs tindrà el seu CRUD.

## 5. Més professional

És una estructura molt més pròxima a aplicacions reals.

## 6. Manteniment més fàcil

Canvis generals en un sol lloc.

## 7. Millor evolució futura

Permet continuar ampliant el projecte sense caos.

---

# Idea clau

Abans pensàvem en:

```text
moltes pàgines independents
```

Ara pensarem en:

```text
una aplicació única amb diverses vistes
```

---

# Important abans de continuar

En esta fase **encara no anem a implementar tot el sistema nou**.

Primer volem entendre la idea arquitectònica.

Després farem la transformació pas a pas.

És important entendre abans:

* per què canviem
* què guanyem
* com quedarà organitzat

---

# Resum final

Passar a SPA ara és una decisió natural perquè el projecte ja ha superat la fase inicial.

Ens permet:

* millor navegació
* menys repetició
* millor organització
* facilitar CRUD complet
* preparar-nos per a projectes reals
* tindre un frontend molt més net

El següent pas serà construir esta nova estructura i convertir el projecte actual en una SPA funcional.

```
```

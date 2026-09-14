---
title: "Repte 4 — El mateix contingut, tres mons"
layout: default
parent: 0.- Introducció als Llenguatges de Marques
nav_order: 14
has_toc: true
---

## REPTE 4 — EL MATEIX CONTINGUT, TRES MONS
### CAIXA D'EINES 4 — HTML I XML NO FAN EL MATEIX
Observa:

### HTML
```html

<h1>Marta Soler</h1>

<p>Estudia <strong>DAM</strong>.</p>

```

El navegador sap que:

`h1` representa un encapçalament.

`p` representa un paràgraf.

`strong` representa informació destacada.

HTML disposa d'un **conjunt d'etiquetes definides**.

---

### XML
```xml

<alumna>

    <nom>Marta Soler</nom>

    <cicle>DAM</cicle>

</alumna>

```

En XML les etiquetes:

`alumna`

`nom`

`cicle`

no tenen un significat visual predefinit.

Les hem utilitzades per **descriure les dades**.

Per tant:

**HTML → estructura contingut destinat principalment a la Web.**

**XML → estructura i descriu informació.**

---

#### EL REPTE
Representa:

**Alumna:** Marta Soler

**Cicle:** DAM

**Mòdul:** Llenguatges de Marques

**Nota:** 8,5

**Estat:** Aprovat

en tres formats.

### Markdown
Crea:

`alumna.md`

Utilitza títols, negreta, llista, taula i enllaç.

### HTML
Crea:

`alumna.html`

Pots utilitzar:

```text

h1

h2

p

strong

ul

li

table

a

```

Obri'l amb el navegador.

### XML
Crea:

`alumna.xml`

En aquest cas hauràs de decidir:

* element arrel;

* elements;

* atributs;

* jerarquia.

No existeix una única solució correcta.

---


Construeix un:

### COMPARADOR MARKDOWN — HTML — XML
Mostra fragments i captures.

Finalment respon:

> **Si els tres representen la mateixa informació, per què necessitem formats diferents?**

---

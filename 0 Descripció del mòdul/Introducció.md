---
title: Introducció
layout: default
parent: Descripció del Mòdul
nav_order: 10
has_children: true
has_toc: true
---

# RA1 — Introducció al LLneguatge de Marques 

### Introducció - EL MÓN ESTÀ PLE DE MARQUES

Pàgines web, documentació tècnica, aplicacions, gràfics vectorials, fórmules matemàtiques, canals de notícies... En molts dels sistemes que utilitzem diàriament apareixen els **llenguatges de marques**.

HTML, XML, Markdown, SVG o MathML en són alguns exemples.

Al llarg d'aquest projecte aprendràs què són, com funcionen, per què n'existeixen diferents i on s'utilitzen.

No començarem estudiant una llarga llista de conceptes. En cada fase rebràs una **caixa d'eines** amb els coneixements mínims necessaris i, a continuació, hauràs d'aplicar-los per superar un repte.

La seqüència serà sempre:

**APRENDRE → OBSERVAR → EXPERIMENTAR → CONSTRUIR**

Al final hauràs creat diferents productes que mostraran el que has descobert.

---

### ABANS DE COMENÇAR — QUÈ ÉS UN LLENGUATGE DE MARQUES?

Observa aquests tres fragments:

### Fragment A

```html
<h1>Llenguatges de Marques</h1>
<p>Primer curs de DAM i DAW</p>
```

### Fragment B

```xml
<modul>
    <nom>Llenguatges de Marques</nom>
    <curs>1</curs>
</modul>
```

### Fragment C

```markdown

# Llenguatges de Marques

**Curs:** Primer DAM/DAW

```

Els tres representen informació mitjançant **marques o convencions especials inserides dins del mateix document**.

Un llenguatge de marques és un sistema que utilitza aquestes marques per **estructurar, descriure o presentar informació**.

Les marques no tenen sempre la mateixa finalitat.

HTML pot indicar que un text és un títol:

```html
<h1>Hola</h1>
```

XML pot indicar que una dada representa un nom:

```xml
<nom>Anna</nom>
```

Markdown pot indicar que un text és important:

```markdown
**important**
```

Per tant, durant aquest projecte hauràs d'intentar respondre una pregunta:

> **Què tenen en comú tecnologies tan diferents com HTML, XML, Markdown o SVG?**

---

## REPTE 1 — ARQUEÒLEGS DIGITALS

### CAIXA D'EINES 1 — D'ON VENEN ELS LLENGUATGES DE MARQUES?

Els llenguatges de marques no van aparéixer amb Internet.

La necessitat d'indicar l'estructura d'un document és molt anterior.

Amb el desenvolupament de la informàtica van aparéixer sistemes capaços de separar millor:

**INFORMACIÓ → ESTRUCTURA → PRESENTACIÓ**

Una tecnologia especialment important va ser **SGML**, que permetia definir llenguatges de marques.

A partir d'aquesta evolució van aparéixer tecnologies com:

**HTML · XML · XHTML · SVG · MathML**

Altres sistemes, com **Markdown**, van buscar una manera molt més senzilla d'escriure documents estructurats.

No totes aquestes tecnologies substitueixen les anteriors.

Algunes conviuen perquè **resolen problemes diferents**.


Per representar aquesta evolució utilitzarem una **línia del temps visual**.

Pot construir-se amb l'eina indicada pel professorat o mitjançant una plantilla proporcionada.

Una entrada de la línia temporal podria tindre aquesta estructura:

**1991 — HTML**

**Necessitat:** publicar documents en la Web.

**Aportació:** estructura documents mitjançant etiquetes predefinides.

**Actualment:** continua sent la base estructural de les pàgines web.

---

### EL REPTE

Investiga:

**SGML · HTML · XML · XHTML · SVG · MathML · Markdown**

Per a cadascuna determina:

* quan va aparéixer;
* quin problema o necessitat intentava resoldre;
* què va aportar;
* si continua utilitzant-se;
* un exemple actual.

No copies una definició.

Has de poder explicar **per què apareix cada tecnologia i quina relació té amb les altres**.

---

Construeix una:

#### LÍNIA DEL TEMPS DELS LLENGUATGES DE MARQUES

Cada entrada seguirà aproximadament:

**DATA → TECNOLOGIA → NECESSITAT → APORTACIÓ → ÚS ACTUAL**

Utilitza textos breus, imatges, icones i exemples.

---

## REPTE 2 — CSI: QUIN LLENGUATGE ÉS?

### CAIXA D'EINES — APRENDRE A LLEGIR MARQUES

Observa aquest fragment:

```xml
<alumne id="23">
    <nom>Marc</nom>
    <cicle>DAM</cicle>
</alumne>
```

#### Etiquetes

Indiquen l'inici i el final d'un element:

```xml
<alumne>        </alumne>
```

`<alumne>` és l'etiqueta d'obertura i `</alumne>` la de tancament.

#### Elements

Un element està format per les etiquetes i el seu contingut:

```xml
<nom>Marc</nom>
```

#### Atributs

Afigen informació a un element:

```xml
<alumne id="23">
```

`id` és l'atribut i `23` és el seu valor.

#### Estructura jeràrquica

Els elements poden estar dins d'altres elements:

```text
             alumne
            /      \
          nom      cicle
           |         |
          Marc       DAM
```

Aquesta organització en forma d'arbre és habitual en els llenguatges de marques.

---

### EL REPTE

A continuació tens **cinc fragments de codi**.

Investiga cada fragment i determina:

**LLENGUATGE → PISTES → FINALITAT → ÚS REAL**

Per identificar-lo, fixa't en les marques, etiquetes, atributs o paraules que apareixen al codi.

Pots utilitzar **cercadors, documentació, IA, l'editor de codi i el navegador** per investigar i provar els fragments.

---

### PROVA A

```text
# Projecte Gestió Acadèmica

## Tecnologies

- Java
- PostgreSQL
- Git

**Cicle:** DAM
```

---

### PROVA B

```html
<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <title>IES Benigasló</title>
</head>
<body>
    <h1>Cicles d'Informàtica</h1>
    <p>Oferta formativa del centre.</p>
</body>
</html>
```

---

### PROVA C

```xml
<centre>
    <cicle codi="DAM">
        <nom>Desenvolupament d'Aplicacions Multiplataforma</nom>
        <modul curs="1">
            <nom>Llenguatges de Marques</nom>
        </modul>
    </cicle>
</centre>
```

---

### PROVA D

```xml
<svg width="300" height="180"
     xmlns="http://www.w3.org/2000/svg">

    <rect x="20" y="20"
          width="260" height="140"
          fill="lightgray"/>

    <circle cx="80" cy="90"
            r="35"
            fill="orange"/>

    <text x="135" y="100">DAM</text>
</svg>
```

Guarda aquest fragment com `prova-d.svg` i obri'l amb el navegador per comprovar què genera.

---

### PROVA E

```xml
<math xmlns="http://www.w3.org/1998/Math/MathML">
    <msup>
        <mi>x</mi>
        <mn>2</mn>
    </msup>
</math>
```

---


Crea un únic:

### PANELL CSI DELS LLENGUATGES DE MARQUES

Divideix-lo en **cinc zones**, una per cada prova.

En cada zona ha d'aparéixer:

**1. LLENGUATGE**

Nom del llenguatge identificat.

**2. PISTES**

Dos o tres elements del codi que t'han permés identificar-lo.

**3. FINALITAT**

Per a què serveix, explicat breument.

**4. ÚS REAL**

Un exemple d'on podem trobar aquest llenguatge en la realitat.

Per exemple:

```text
┌──────────────────────────────┐
│ PROVA __                     │
│                              │
│ LLENGUATGE: _______________  │
│                              │
│ PISTES                       │
│ __________                   │
│ __________                   │
│                              │
│ FINALITAT                    │
│ ___________________________  │
│                              │
│ ÚS REAL                      │
│ ___________________________  │
└──────────────────────────────┘
```

Utilitza **fragments de codi, captures, fletxes, anotacions i paraules clau**. Evita les explicacions llargues.

Pots crear el panell amb **Canva, Genially, PowerPoint, Google Slides, LibreOffice Impress o una altra eina visual similar**.

---

## REPTE 3 — LA TEUA PRIMERA PÀGINA EN MARKDOWN

### CAIXA D'EINES 3 — MARKDOWN

Markdown és un llenguatge de marques lleuger creat per escriure documents de manera senzilla i llegible.

Un document Markdown utilitza normalment l'extensió:

`.md`

Per exemple:

`README.md`

GitHub interpreta automàticament aquest format.

### Títols

```markdown
# Títol principal
## Apartat
### Subapartat
```

### Negreta i cursiva

```markdown
**text important**

*text en cursiva*
```

### Llistes

```markdown
- Java
- Python
- JavaScript
```

### Llistes numerades

```markdown
1. DAM
2. DAW
3. ASIX
```

### Enllaços

```markdown
[Visitar GitHub](https://github.com)
```

### Imatges

```markdown
![Descripció](imatge.png)
```

### Codi

Un fragment curt:

```text
`<h1>Hola</h1>`
```

Per mostrar diverses línies podem utilitzar un bloc de codi.

### Taules

```markdown
| Tecnologia | Finalitat |
|---|---|
| HTML | Web |
| XML | Dades |
| SVG | Gràfics |
```

---



Utilitza un l'editor de codi i crea un document amb l'extensió `.md`.

Per exemple:

`README.md`

Visualitza el resultat en GitHub o amb el visor Markdown disponible.

---

#####EL REPTE

Crea una **targeta digital de presentació com a estudiant de DAM/DAW**.

Ha de contindre:

* nom o identificador;
* cicle;
* una breu presentació;
* tecnologies que coneixes;
* una taula;
* almenys un enllaç;
* almenys una imatge;
* un fragment de codi.

No has de reproduir els exemples de la caixa d'eines. Utilitza'ls per construir el teu propi document.

### Producte

`README.md`

Aquest document serà també el primer element del teu projecte.

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

### EL REPTE

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

## REPTE 5 — CAÇA DE MARQUES

### CAIXA D'EINES 5 — L'INSPECTOR DEL NAVEGADOR

Les pàgines web que visites estan construïdes, entre altres tecnologies, amb HTML.

El navegador permet observar aquest codi.

En Chrome, Firefox o navegadors similars pots obrir les **eines de desenvolupament**.

Normalment:

`F12`

o:

**botó dret → Inspeccionar**

Busca l'apartat:

**Elements / Inspector**

Allí podràs observar estructures com:

```html
<header>
<nav>
<h1>
<p>
<a>
<img>
```

També pots seleccionar visualment un element de la pàgina i descobrir quin fragment HTML el representa.

Les modificacions que faces des de l'inspector són **locals i temporals**. No estàs modificant la web original.

---

## MINIEXPERIMENT

Obri una pàgina web.

Localitza un títol.

Inspecciona'l.

Modifica temporalment el seu text perquè aparega el teu nom.

Comprova què ocorre.

---

### EL REPTE

Localitza **5 evidències reals** de llenguatges de marques.

Pots investigar:

* pàgines web;
* GitHub;
* canals RSS;
* SVG;
* documentació;
* altres serveis.

Per cada evidència mostra:

**ORIGEN → CAPTURA/FRAGMENT → LLENGUATGE → PISTES → FINALITAT**

Almenys una evidència haurà de procedir de l'**Inspector del navegador**.

No és vàlid buscar «exemple XML» i copiar el resultat.

Has de trobar les marques **utilitzades en un recurs real**.


Crea:

### LES MARQUES ESTAN PERTOT ARREU

Un mural digital amb les cinc evidències.

---

## REPTE 6 — CONSTRUEIX AMB MARQUES

### CAIXA D'EINES 6 — SVG

SVG significa **Scalable Vector Graphics**.

Permet descriure gràfics vectorials utilitzant marques.

Un document mínim pot ser:

```xml
<svg width="400"
     height="200"
     xmlns="http://www.w3.org/2000/svg">

</svg>
```

Podem dibuixar un rectangle:

```xml
<rect
    x="20"
    y="20"
    width="150"
    height="80"
    fill="orange"/>
```

Un cercle:

```xml
<circle
    cx="100"
    cy="100"
    r="40"
    fill="blue"/>
```

Una línia:

```xml
<line
    x1="20"
    y1="20"
    x2="200"
    y2="150"
    stroke="black"/>
```

I text:

```xml
<text
    x="100"
    y="100"
    font-size="24">
    DAM
</text>
```

Alguns atributs importants són:

| Atribut           | Funció             |
| ----------------- | ------------------ |
| `x`, `y`          | Posició            |
| `width`, `height` | Dimensions         |
| `cx`, `cy`        | Centre d'un cercle |
| `r`               | Radi               |
| `fill`            | Color interior     |
| `stroke`          | Contorn            |
| `font-size`       | Grandària del text |

---

### MINIEXPERIMENT

Crea:

`prova.svg`

Copia únicament l'estructura mínima i crea un cercle.

Obri'l amb el navegador.

Ara modifica:

`cx`

`r`

`fill`

No canvies tots els valors alhora.

**MODIFICA → GUARDA → ACTUALITZA → OBSERVA**

Comprova què controla cadascun.

---

### EL REPTE

Crea una **insígnia digital relacionada amb DAM, DAW o la informàtica**.

Ha d'incloure almenys:

* `<rect>`;
* `<circle>`;
* `<line>`;
* `<text>`;
* `<g>` per agrupar elements.

Ha de contindre:

**DAM/DAW + element relacionat amb informàtica + inicials o identificador**

El disseny ha de ser propi.

No es pot generar automàticament el SVG amb un editor gràfic.

### Producte

`insignia.svg`

Acompanya'l d'una breu explicació visual:

**ELEMENT → ETIQUETA → ATRIBUTS**

Per exemple:

`Cercle central → <circle> → cx, cy, r, fill`

---

### REPTE FINAL — EL MAPA DELS LLENGUATGES DE MARQUES

Ja has treballat amb diferents llenguatges i eines.

Has descobert:

**d'on venen → com reconéixer-los → com escriure Markdown → diferències entre HTML/XML → on apareixen → què podem construir**

Ara hauràs de seleccionar els resultats més importants.

## La missió

Imagina que una persona començarà DAM o DAW i et pregunta:

> **Què és un llenguatge de marques i per què n'existeixen tants?**

Construeix una **presentació visual del teu recorregut pels reptes**.

Haurà d'incloure:

### 1. Evolució

La línia del temps.

### 2. Identificació

Les conclusions del CSI.

### 3. Markdown

La teua targeta.

### 4. Diferents finalitats

Markdown vs HTML vs XML.

### 5. Món real

Les evidències trobades.

### 6. Creació

La insígnia SVG.

No copies tots els continguts dels reptes.

**Selecciona les evidències que millor demostren el que has aprés.**

---

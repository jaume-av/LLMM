---
title: Introducció
layout: default
parent: Descripció del Mòdul
nav_order: 10
has_children: true
has_toc: true
---


### Què és un llenguatge de marques?

Un **llenguatge de marques** és un sistema que utilitza **etiquetes** (marques) per **afegir informació extra** a un text: estructura, significat o estil.

Per exemple, en lloc d’escriure només paraules seguides, podem indicar quin fragment és un títol, quin és un paràgraf, on hi ha una imatge, etc.

Exemples de llenguatges de marques: **HTML, XML, JSON, Markdown**.

---

### Diferència amb text pla

* **Text pla:** només conté caràcters, sense estructura ni informació afegida.

  ```
  Benvinguts al curs
  Açò és una prova
  ```

  El navegador o el programa ho mostraria exactament així, sense saber què és un títol o un paràgraf.

* **Text amb marques:** incorpora etiquetes per indicar què és cada part.

  ```html
  <h1>Benvinguts al curs</h1>
  <p>Açò és una prova</p>
  ```

  Ara el navegador sap que el primer fragment és un **títol gran** i el segon és un **paràgraf**.

---

En resum: el **text pla només mostra informació**, mentre que el **llenguatge de marques descriu com s’ha d’entendre i representar eixa informació**.

---

### Exemple 1. Comparar text pla vs XML


1. Crea el fitxer **llibre.txt** amb text pla:

```
Títol: El Quixot
Autor: Miguel de Cervantes
Any: 1605
ISBN: 978-84-376-0494-7
```

2. Obri **llibre.txt** al navegador (arrossega’l sobre el navegador o Ctrl + o).
   — Observa que el navegador només mostra text sense cap estructura.

3. Crea el fitxer **llibre.xml** amb el mateix contingut però marcat:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<llibre>
  <titol>El Quixot</titol>
  <autor>Miguel de Cervantes</autor>
  <any>1605</any>
  <isbn>978-84-376-0494-7</isbn>
</llibre>
```

4. Obri **llibre.xml** al navegador.
   — En molts navegadors veuràs un arbre o, com a mínim, un document estructurat i “neteget”.

5. Afig un segon llibre i transforma’l en una **col·lecció**:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<biblioteca>
  <llibre>
    <titol>El Quixot</titol>
    <autor>Miguel de Cervantes</autor>
    <any>1605</any>
    <isbn>978-84-376-0494-7</isbn>
  </llibre>
  <llibre>
    <titol>Tirant lo Blanc</titol>
    <autor>Joanot Martorell</autor>
    <any>1490</any>
    <isbn>978-84-376-1234-5</isbn>
  </llibre>
</biblioteca>
```


**En resum**

* En **text pla**: informació sense estructura.
* En **XML**: la mateixa informació però **amb estructura clara** (etiquetes, jerarquia) i fàcilment processable per programes.




### Exemple 2 · Validar una web famosa amb el W3C Validator

A banda de estructurats, els LLMM han de ser **vàlids**. Validar significa que el codi compleix les normes i està ben format. Això és important per assegurar la compatibilitat i accessibilitat.

Validar és passar un “control de qualitat” al document per assegurar que està ben escrit i serà comprensible tant per a persones com per a màquines.


1. Obri el navegador i entra a la pàgina del validador oficial del W3C:
   [https://validator.w3.org/](https://validator.w3.org/)

2. En el camp d’**adreça web**, escriu l’URL d’una web famosa, per exemple:

   * `https://www.wikipedia.org`
   * `https://www.google.com`

3. Fes clic en el botó **Check** per comprovar si el codi HTML de la web és vàlid.

4. Observa els resultats:

   * **Errors:** problemes greus que trenquen l’estàndard (etiquetes mal tancades, atributs prohibits…).
   * **Warnings (avisos):** recomanacions de bones pràctiques, no sempre són errors fatals.


Fins i tot **pàgines molt famoses tenen errors** de validació.
* Entendràs que la validació serveix per a **detectar problemes de qualitat** i que nosaltres, en els nostres projectes, hem d’intentar aconseguir el màxim de **0 errors**.

---

**La validació és una eina pràctica i necessària** i que no és “opcional”, sinó part del treball professional.

---


### Activitat 3 · Editar en viu una web amb l’Inspector


1. **Obri Wikipedia** al navegador Firefox:
    [https://www.wikipedia.org](https://www.wikipedia.org)

2. Prem **F12** o fes clic dret i tria **“Inspeccionar”**.

   * Veureu dues parts:

     * **Esquerra:** codi **HTML** del DOM.
     * **Dreta:** regles de **CSS** que afecten l’element seleccionat.

3. Busca al panell HTML (esquerra) el text:

   ```html
   <span class="central-textlogo__image sprite svg-Wikipedia_wordmark">Wikipedia</span>
   ```

   * Fes **doble clic** sobre la paraula **Wikipedia** i canvia-la per:

     ```
     DAMpedia
     ```
   * Prem **Enter**.
   * La pàgina mostrarà ara *Dampedia* en lloc de *Wikipedia*.

4. A la part dreta (CSS), busca la regla:

   ```css
   color: transparent;
   ```

   * Fes clic i canvia-la per:

     ```css
     color: red;
     ```
   * Ara el text es veurà en roig.

5. Prova a afegir una nova regla CSS:

   * Escriu:

     ```css
     font-size: 40px;
     font-family: Comic Sans MS;
     ```
   * Mira com canvia l’aspecte del títol.

---



---

### Evolució dels Llenguatges de Marques · El “codi retro” del `<marquee>`



1. Obri un fitxer HTML senzill en Visual Studio Code.
2. Escriu:

```html
<!DOCTYPE html>
<html lang="ca">
<head>
  <meta charset="UTF-8">
  <title>Prova Marquee</title>
</head>
<body>
  <marquee behavior="scroll" direction="left" scrollamount="10">
    Hola DAM! Això es mou!
  </marquee>
</body>
</html>
```

3. Obri’l al navegador i mira com el text es desplaça per la pantalla.

---


* Este codi funcionava molt als anys 90, però ara està **obsolet**.
* Ens serveix per veure que els llenguatges de marques **canvien amb el temps** i que HTML5 ja no recomana aquestes etiquetes.

---

## Treball RA1 · Llenguatges de Marques

**Format general**

* Grup de 2 persones.
* Document en PDF, mínim 5 pàgines.
* Exposició oral de 8-10 minuts amb participació dels dos membres.

---

### 1. Definició i característiques

1.1. Cercar informació general sobre què és un llenguatge de marques.
1.2. Explicar per a què serveix i quines propietats el defineixen.
1.3. Elaborar un mapa conceptual amb idees clau:

* Conceptes centrals.
* Característiques.
* Exemples bàsics.
  1.4. Incloure el mapa al document i afegir una breu explicació amb les pròpies paraules.

**Eines**: CmapTools, MindMeister, Miro, Canva, Draw\.io, Google Drawings.

---

### 2. Història i evolució

2.1. Investigar l’origen dels llenguatges de marques.
2.2. Analitzar la seua evolució fins a l’actualitat.
2.3. Preparar una línia temporal amb fites principals:

* SGML.
* XML.
* HTML5, etc.
  2.4. Afegir una breu descripció de cada moment històric.

**Eines**: Timeline JS, Canva, Genially, Google Slides, PowerPoint (SmartArt).

---

### 3. Diferències amb els llenguatges de programació

3.1. Comprendre les diferències entre llenguatges de marques i llenguatges de programació:

* Finalitat.
* Sintaxi.
* Problemes que resolen.
* Contextos d’ús.
  3.2. Representar-les en una taula amb dues columnes:
* Marques vs. Programació.
  3.3. Escriure un breu paràgraf de síntesi al final.

**Eines**: Google Docs/Tables, Word, Canva (taules infogràfiques).

---

### 4. Principals llenguatges de marques

4.1. Treballar tres llenguatges: HTML, XML i JSON.
4.2. Preparar una fitxa per a cada llenguatge amb:

* Breu descripció.
* Exemple senzill de codi.
* Explicació de la seua utilitat.
  4.3. Incloure comentaris dins del codi per a facilitar la comprensió.
  4.4. Integrar les fitxes al document i utilitzar-les en l’exposició oral.

**Eines**: Visual Studio Code, Notepad++, Sublime Text, JSFiddle, CodePen.

---

#### 5. Importància actual i aplicacions

5.1. Reflexionar sobre la importància dels llenguatges de marques actualment.
5.2. Mostrar àmbits d’aplicació concrets:

* Pàgines web.
* Aplicacions mòbils.
* APIs.
* Documents electrònics.
  5.3. Elaborar una infografia o esquema visual.
  5.4. Afegir una explicació redactada amb exemples propers a l’alumnat.

 **Eines**: Canva, Piktochart, Genially, PowerPoint, Google Slides.

---

## 6. Exemples pràctics

6.1. Crear un o dos exemples originals de documents senzills en llenguatges de marques.

* HTML amb un títol i una llista.
* XML amb dades inventades.
  6.2. Afegir comentaris que expliquen cada part del codi.

**Eines**: Visual Studio Code, Notepad++, JSFiddle, CodePen.

---

### Exposició oral

- Duració: 8-10 minuts.
- Participació equilibrada dels dos membres.

Diapositives:

* Clars i visuals.
* Poc text.
* Suport gràfic (imatges, esquemes, infografies).
* No llegir literalment.
  9.4. Valoració: claredat, ordre, explicació amb les pròpies paraules.

**Eines**: PowerPoint, Google Slides, Canva, Genially, Prezi.

---

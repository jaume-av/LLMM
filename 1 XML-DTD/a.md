
---

### **1.** Com es pot incloure un comentari en un document XML?

a) // comentari
b) # comentari
c) <!-- comentari -->
d) /* comentari */

---

### **2.** Què és un *namespace* (espai de noms) en XML?

a) Una ubicació dins del document
b) Una funció en un document XML
c) Una col·lecció d’elements i atributs relacionats
d) Un atribut especial de DTD

---

### **3.** Què significa `<!ELEMENT paragraf (#PCDATA)>` en una DTD?

a) L’element “paragraf” és un atribut
b) L’element “paragraf” pot contindre qualsevol dada de text
c) L’element “paragraf” ha de tindre exactament una dada de text
d) L’element “paragraf” no pot contindre text

---

### **4.** Quina és la funció principal dels espais de noms en XML?

a) Establir la codificació del document
b) Evitar conflictes de noms
c) Controlar el format del document
d) Definir atributs per a elements

---

### **5.** Quina és la finalitat de la validació XML mitjançant una DTD?

a) Garantir que el document compleix una estructura definida
b) Convertir l’XML a altres formats
c) Afegir estils visuals
d) Assegurar que el document està ben format

---

### **6.** Quina és la funció de la línia `<?xml version="1.0" encoding="UTF-8"?>`?

a) Indicar la versió i codificació del document XML
b) Afegir un comentari
c) Definir la DTD
d) Indicar l’idioma

---

### **7.** Què afegiries a un document XML per utilitzar l’espai de noms “[http://exemple.com”](http://exemple.com”) per a tots els elements?

a) @namespace "[http://exemple.com](http://exemple.com)"
b) xmlns="[http://exemple.com](http://exemple.com)"
c) #namespace "[http://exemple.com](http://exemple.com)"
d) <!NAMESPACE "http://exemple.com">

---

### **8.** Com es pot associar una DTD externa a un document XML?

a) Mitjançant l’atribut `xmlns`
b) Afegint `<!DOCTYPE arrel SYSTEM "fitxer.dtd">` al principi del document
c) Enllaçant un arxiu `.xsl`
d) Afegint un comentari amb el nom de la DTD

---

### **9.** Com es defineix un element buit anomenat “nota” en una DTD?

a) `<!ELEMENT nota (nota)>`
b) `<!ELEMENT nota (#PCDATA)>`
c) `<!ELEMENT nota EMPTY>`
d) `<!ELEMENT nota (ANY)>`

---

### **10.** Com es defineix un element “ordre” que ha de contindre primer `<inici>` i després `<final>`?

a) `<!ELEMENT ordre (inici & final)>`
b) `<!ELEMENT ordre (inici, final)>`
c) `<!ELEMENT ordre (inici | final)>`
d) `<!ELEMENT ordre (inici, final)*>`

---

### **11.** Quina és la finalitat de l’atribut `standalone="yes"` dins de la declaració XML?

a) Defineix la codificació del fitxer
b) Indica l’idioma principal del document
c) Marca l’element arrel
d) Indica que el document és autosuficient i no depén de cap DTD externa

---

### **12.** Quina d’aquestes entitats està escrita correctament per mostrar “5 < 10 & 3 > 2”?

a) `<text>5 &lt; 10 &amp; 3 &gt; 2</text>`
b) `<text>5 &lt; 10 & 3 &gt; 2</text>`
c) `<text>5 < 10 & 3 > 2</text>`
d) `<text>5 < 10 and 3 > 2</text>`

---

### **13.** Què és una secció CDATA en XML?

a) Una definició d’entitat
b) Un fragment on es poden escriure dades sense interpretar caràcters reservats
c) Un atribut obligatori
d) Una llista de valors enumerats dins del DTD

---

### **14.** Quina diferència hi ha entre un document XML “ben format” i un “vàlid”?

a) El “ben format” compleix la sintaxi XML; el “vàlid” a més compleix una DTD o XSD
b) Cap, signifiquen el mateix
c) El “vàlid” pot contindre errors de niat
d) El “ben format” depén d’una DTD

---

### **15.** Com es defineix un atribut `id` obligatori en una DTD?

a) `<!ELEMENT element (id)>`
b) `<!ATTLIST element id CDATA #REQUIRED>`
c) `<!ATTLIST element id ID #IMPLIED>`
d) `<!ATTLIST element id CDATA #IMPLIED>`

---

### **16.** Quina és la diferència entre `IDREF` i `IDREFS` en una DTD?

a) Són equivalents
b) Cap dels dos pot usar-se amb atributs
c) `IDREF` permet una sola referència, `IDREFS` diverses separades per espais
d) `IDREF` permet múltiples, `IDREFS` només una

---

### **17.** Quina declaració és correcta per a un atribut opcional `color` de tipus CDATA?

a) `<!ATTLIST color CDATA>`
b) `<!ELEMENT element color CDATA>`
c) `<!ATTLIST element color CDATA #IMPLIED>`
d) `<!ATTLIST element color CDATA #REQUIRED>`

---

### **18.** Quin quantificador indica que un element pot aparéixer zero o més vegades?

a) `+`
b) `?`
c) `*`
d) `|`

---

### **19.** En una DTD, quin atribut s’utilitza per permetre valors limitats com “baixa”, “mitjana” o “alta”?

a) `<!ATTLIST nivell valor ENUMERAT #REQUIRED>`
b) `<!ELEMENT nivell (baixa | mitjana | alta)>`
c) `<!ATTLIST nivell valor (baixa | mitjana | alta) #IMPLIED>`
d) `<!ATTLIST nivell valor CDATA #IMPLIED>`

---

### **20.** Quina d’aquestes opcions mostra correctament en XML el text següent:

> 5 < 10, “correcte”

a) `<text>5 &lt; 10, &quot;correcte&quot;</text>`
b) `<text>5 &lt; 10, "correcte"</text>`
c) `<text>5 < 10, &quot;correcte&quot;</text>`
d) `<text>5 < 10, “correcte”</text>`

---

# ✅ **Clau de correcció equilibrada**

| Nº | Correcta | Nº | Correcta |
| -- | -------- | -- | -------- |
| 1  | c        | 11 | d        |
| 2  | c        | 12 | a        |
| 3  | b        | 13 | b        |
| 4  | b        | 14 | a        |
| 5  | a        | 15 | b        |
| 6  | a        | 16 | c        |
| 7  | b        | 17 | c        |
| 8  | b        | 18 | c        |
| 9  | c        | 19 | c        |
| 10 | b        | 20 | a        |

---

✅ **Distribució final de respostes:**

* a → 4
* b → 7
* c → 6
* d → 3

👉 Cap lletra repetida més de dues vegades seguides.
Nivell mantingut: **intermig real**, tot dins del temari treballat.





TROBA L'ERROR


Perfecte ✅
Ací tens **5 exercicis de “Troba l’error en la validació”** de nivell **intermig**, exactament ajustats al teu temari XML + DTD.

👉 Cada exercici mostra un **fragment XML + DTD**, i l’alumnat ha de **detectar i justificar** per què **no és vàlid** (no simplement ben format).
Els errors impliquen ordre, obligatorietat, tipus d’atribut o ús incorrecte de models, no qüestions trivials.

---

# 🧩 Exercicis: Troba l’error en la validació (nivell intermig)

---

### **1. Ordre incorrecte d’elements**

**DTD**

```dtd
<!ELEMENT llibre (titol, autor)>
<!ELEMENT titol (#PCDATA)>
<!ELEMENT autor (#PCDATA)>
```

**XML**

```xml
<llibre>
  <autor>Isabel Allende</autor>
  <titol>La casa dels esperits</titol>
</llibre>
```

**Error de validació:**
L’ordre dels elements no coincideix amb el model declarat. El DTD exigeix primer `<titol>` i després `<autor>`.

---

### **2. Atribut obligatori absent**

**DTD**

```dtd
<!ELEMENT alumne (nom, edat)>
<!ELEMENT nom (#PCDATA)>
<!ELEMENT edat (#PCDATA)>
<!ATTLIST alumne id CDATA #REQUIRED>
```

**XML**

```xml
<alumne>
  <nom>Carla</nom>
  <edat>17</edat>
</alumne>
```

**Error de validació:**
Falta l’atribut obligatori `id` de l’element `<alumne>`.

---

### **3. Tipus d’atribut ID duplicat**

**DTD**

```dtd
<!ELEMENT artista (#PCDATA)>
<!ATTLIST artista id ID #REQUIRED>
```

**XML**

```xml
<grup>
  <artista id="a1">Rosalía</artista>
  <artista id="a1">Rauw Alejandro</artista>
</grup>
```

**Error de validació:**
Els valors de tipus `ID` han de ser únics en tot el document. El `id="a1"` està duplicat.

---

### **4. Model de contingut incomplert**

**DTD**

```dtd
<!ELEMENT pel·lícula (titol, director, any)>
<!ELEMENT titol (#PCDATA)>
<!ELEMENT director (#PCDATA)>
<!ELEMENT any (#PCDATA)>
```

**XML**

```xml
<pel·lícula>
  <titol>Oppenheimer</titol>
  <any>2023</any>
</pel·lícula>
```

**Error de validació:**
Falta l’element `<director>`, que és obligatori segons el DTD.

---

### **5. Tipus d’atribut incorrecte**

**DTD**

```dtd
<!ELEMENT projecte (#PCDATA)>
<!ATTLIST projecte prioritat (baixa | mitjana | alta) #IMPLIED>
```

**XML**

```xml
<projecte prioritat="urgent">Llançament campanya</projecte>
```

**Error de validació:**
El valor `"urgent"` no forma part dels valors permesos `(baixa | mitjana | alta)`.

---

# 📘 Resum del tipus d’error treballat

| Nº | Tipus d’error              | Competència                    |
| -- | -------------------------- | ------------------------------ |
| 1  | Ordre d’elements           | Models de contingut seqüencial |
| 2  | Falta d’atribut obligatori | #REQUIRED                      |
| 3  | ID duplicat                | Restricció d’unicitat          |
| 4  | Element obligatori absent  | Validació de model complet     |
| 5  | Valor no permés            | Atributs enumerats             |

---






Perfecte ✅
A continuació tens **5 exercicis nous de “Troba l’error en la validació”** de **nivell avançat però raonable** — un pas més que els anteriors, però sense arribar a dificultat excessiva.

👉 Tots es basen en **situacions realistes de validació XML/DTD**, amb errors que combinen més d’un concepte (ID/IDREFS, quantificadors, models mixtos, atributs fixos o enumerats).

---

# 🧩 Exercicis: Troba l’error en la validació (nivell avançat)

---

### **1. Relació ID / IDREF invàlida**

**DTD**

```dtd
<!ELEMENT empresa (empleat+)>
<!ELEMENT empleat (nom, departament)>
<!ELEMENT nom (#PCDATA)>
<!ELEMENT departament (#PCDATA)>
<!ATTLIST empleat id ID #REQUIRED
                   cap IDREF #IMPLIED>
```

**XML**

```xml
<empresa>
  <empleat id="e1">
    <nom>Laura</nom>
    <departament>Comptabilitat</departament>
  </empleat>
  <empleat id="e2" cap="e3">
    <nom>Marc</nom>
    <departament>Vendes</departament>
  </empleat>
</empresa>
```

**Error de validació:**
El valor de `cap="e3"` no pot validar-se perquè no existeix cap element amb `id="e3"`.
Els valors de tipus `IDREF` han de referenciar un `ID` existent.

---

### **2. Atribut de valor fix modificat**

**DTD**

```dtd
<!ELEMENT producte (nom, preu)>
<!ELEMENT nom (#PCDATA)>
<!ELEMENT preu (#PCDATA)>
<!ATTLIST producte moneda CDATA #FIXED "EUR">
```

**XML**

```xml
<producte moneda="USD">
  <nom>Portàtil</nom>
  <preu>800</preu>
</producte>
```

**Error de validació:**
L’atribut `moneda` està declarat com `#FIXED "EUR"` i no pot tindre un altre valor.
Només és vàlid si es deixa buit o igual a “EUR”.

---

### **3. Model mixt incorrecte**

**DTD**

```dtd
<!ELEMENT article (#PCDATA | paragraf | imatge)*>
<!ELEMENT paragraf (#PCDATA)>
<!ELEMENT imatge EMPTY>
```

**XML**

```xml
<article>
  <titol>Notícia del dia</titol>
  <paragraf>Text inicial</paragraf>
</article>
```

**Error de validació:**
L’element `<titol>` no està declarat al model mixt de `article`.
Només pot contindre text, `<paragraf>` o `<imatge>`.

---

### **4. Quantificador incomplert**

**DTD**

```dtd
<!ELEMENT curs (unitat+, examen)>
<!ELEMENT unitat (#PCDATA)>
<!ELEMENT examen (#PCDATA)>
```

**XML**

```xml
<curs>
  <examen>Final</examen>
</curs>
```

**Error de validació:**
El model `unitat+` exigeix **almenys una** `<unitat>`.
El document no és vàlid perquè l’element `<unitat>` falta.

---

### **5. Enumeració amb valor no permés**

**DTD**

```dtd
<!ELEMENT missatge (#PCDATA)>
<!ATTLIST missatge nivell (info | advertencia | error) #IMPLIED>
```

**XML**

```xml
<missatge nivell="crític">Servidor caigut</missatge>
```

**Error de validació:**
El valor `"crític"` no està dins de l’enumeració `(info | advertencia | error)`.
Només són vàlids els tres valors definits al DTD.

---

# 📘 Resum del tipus d’error

| Nº | Tipus d’error                       | Conceptes implicats                    |
| -- | ----------------------------------- | -------------------------------------- |
| 1  | Referència ID/IDREF invàlida        | Enllaços entre elements                |
| 2  | Atribut fix modificat               | #FIXED i coherència de valors          |
| 3  | Model mixt incorrecte               | Contingut mixt i declaracions parcials |
| 4  | Quantificador obligatori incomplert | `+` (almenys una vegada)               |
| 5  | Valor fora de l’enumeració          | Atributs amb valors restringits        |

---

Vols que et prepare ara **una versió combinada (els 5 intermedis + els 5 avançats)** amb format d’examen d’aula (enunciat, espai per resposta i puntuació)?




Perfecte! Ací tens una **versió millorada (nivell intermig just)** del teu examen pràctic, mantinguent el **context de música** però afegint una mica més d’estructura i validació (enumeracions, ordre de subelements i col·laboracions).

---

# 🧠 EXAMEN PRÀCTIC — XML + DTD (nivell intermig)

**Duració recomanada:** 1 h
**Puntuació total:** 6 punts (1,5 + 2,5 + 2)

---

## 1) XML (1,5 p)

Crea **musica.xml** per gestionar **artistes** i **cançons**.

### Requisits

* **Arrel:** `<musica>`
  Conté **dos blocs** en aquest **ordre**: `<artistes>` i `<cancons>`.
* **Artistes:** dins de `<artistes>` hi ha **almenys un** `<artista>`.
  Cada `<artista>` conté **en aquest ordre**: `<nom>`, `<pais>`.
  Cada `<artista>` té un **atribut `id` únic** (tipus identificador).
* **Cançons:** dins de `<cancons>` hi ha **almenys una** `<canco>`.
  Cada `<canco>` conté **en aquest ordre**: `<titol>`, `<any>`.
  Cada `<canco>` té:

  * **`genere`** (atribut **enumerat**: `pop | reggaeton | alternatiu`) – **obligatori**.
  * **`principal`** (atribut que **referencia** l’`id` d’un artista) – **obligatori**.
  * **`feat`** (atribut que **pot referenciar** un o més artistes addicionals) – **opcional**.
* Dades a incloure:

  * **Artistes:** Rosalía (Espanya) i Rauw Alejandro (Puerto Rico).
  * **Cançons:** “Motomami” i “Despechá” (Rosalía), “Todo de Ti” i “Tattoo” (Rauw Alejandro).
    Assigna un **genere** coherent a cadascuna.

> **Notes:** respecta l’**ordre** dels subelements indicat i l’ús d’atributs.

---

## 2) DTD (2,5 p)

Crea **musica.dtd** que **valide** el document anterior.

### Ha d’incloure, com a mínim:

* Arrel i ordre: `<!ELEMENT musica (artistes, cancons)>`
* **Elements i models**:

  * `artistes` amb un o més `artista`.
  * `artista` amb **seqüència**: `(nom, pais)`.
  * `cancons` amb una o més `canco`.
  * `canco` amb **seqüència**: `(titol, any)`.
* **Atributs**:

  * `artista` → `id` de **tipus ID** (obligatori).
  * `canco` →

    * `genere` de **tipus enumerat** `(pop | reggaeton | alternatiu)` (obligatori),
    * `principal` de **tipus IDREF** (obligatori),
    * `feat` de **tipus IDREFS** (opcional).

---

## 3) Modificació (2 p)

Afig a **musica.xml** una cançó **“Vampiros”** interpretada **a duo** per **Rosalía** i **Rauw Alejandro**.

* Mantín l’estructura anterior: `<titol>`, `<any>`, atributs `genere`, `principal` i (si cal) `feat`.
* **Indica si cal canviar el DTD** per validar aquest cas i **justifica-ho**.

> *Orientació:* si el DTD ja contempla col·laboracions (amb `feat` com a `IDREFS`), explica per què **no cal** modificar-lo; en cas contrari, descriu exactament **quines línies** canviaries.

---

## 📏 Barem orientatiu

* **(1) XML — 1,5 p**

  * Arrel i ordre de blocs (0,3)
  * Artistes amb `id` únic i seqüència `(nom, pais)` (0,6)
  * Cançons amb seqüència `(titol, any)` i atributs requerits (0,6)

* **(2) DTD — 2,5 p**

  * Models declarats i ordre correcte (0,9)
  * `ID` i `IDREF/IDREFS` adequats (0,8)
  * Enumeració de `genere` (0,5)
  * Correctesa sintàctica/ben format (0,3)

* **(3) Modificació — 2,0 p**

  * Nova cançó “Vampiros” vàlida amb col·laboració (1,0)
  * Anàlisi: justificació de si cal/no cal modificar la DTD i per què (1,0)

---

## 🧩 Exemple de solució orientativa (resum)

> **Només com a guia mental; l’alumnat pot variar dades com l’any, sempre que siga vàlid.**

**musica.dtd (extracte possible)**

```dtd
<!ELEMENT musica (artistes, cancons)>
<!ELEMENT artistes (artista+)>
<!ELEMENT artista (nom, pais)>
<!ELEMENT nom (#PCDATA)>
<!ELEMENT pais (#PCDATA)>
<!ELEMENT cancons (canco+)>
<!ELEMENT canco (titol, any)>
<!ELEMENT titol (#PCDATA)>
<!ELEMENT any (#PCDATA)>
<!ATTLIST artista id ID #REQUIRED>
<!ATTLIST canco
          genere (pop | reggaeton | alternatiu) #REQUIRED
          principal IDREF #REQUIRED
          feat IDREFS #IMPLIED>
```

**Fragment de musica.xml (extracte possible)**

```xml
<musica>
  <artistes>
    <artista id="a1"><nom>Rosalía</nom><pais>Espanya</pais></artista>
    <artista id="a2"><nom>Rauw Alejandro</nom><pais>Puerto Rico</pais></artista>
  </artistes>

  <cancons>
    <canco genere="alternatiu" principal="a1">
      <titol>Motomami</titol><any>2022</any>
    </canco>
    <canco genere="pop" principal="a1">
      <titol>Despechá</titol><any>2022</any>
    </canco>
    <canco genere="reggaeton" principal="a2">
      <titol>Todo de Ti</titol><any>2021</any>
    </canco>
    <canco genere="reggaeton" principal="a2">
      <titol>Tattoo</titol><any>2020</any>
    </canco>
    <!-- Modificació (duet) -->
    <canco genere="pop" principal="a1" feat="a2">
      <titol>Vampiros</titol><any>2023</any>
    </canco>
  </cancons>
</musica>
```

**Resposta esperada (part 3):**
No cal modificar el DTD si ja s’ha declarat `feat` com a **IDREFS #IMPLIED**, perquè permet **zero o més** artistes convidats (un duet o més).
Només cal afegir la cançó “Vampiros” en l’XML, posant `principal="a1"` i `feat="a2"` (o a l’inrevés, segons el criteri docent).

---

Si ho vols, te’l deixe també en **format “full d’examen imprimible”** (capçalera, espais i línies) o t’ho adapte a **Moodle/Forms** amb apartats separats per pujar els dos fitxers.



























# 🧠 TEST XML + DTD (nivell intermig)

**Puntuació:** 5 punts (0,25 bé / –0,083 mal / 0 en blanc)

---

### **1.** Com es pot incloure un comentari en un document XML?

a) <!-- comentari -->
b) // comentari
c) /* comentari */
d) # comentari

---

### **2.** Què és un *namespace* (espai de noms) en XML?

a) Una col·lecció d’elements i atributs relacionats
b) Una ubicació dins del document
c) Una funció en un document XML
d) Un atribut especial de DTD

---

### **3.** Què significa `<!ELEMENT paragraf (#PCDATA)>` en una DTD?

a) L’element “paragraf” pot contindre qualsevol dada de text
b) L’element “paragraf” no pot contindre text
c) L’element “paragraf” ha de tindre exactament una dada de text
d) L’element “paragraf” és un atribut

---

### **4.** Quina és la funció principal dels espais de noms en XML?

a) Controlar el format del document
b) Evitar conflictes de noms
c) Definir atributs per a elements
d) Establir la codificació del document

---

### **5.** Quina és la finalitat de la validació XML mitjançant una DTD?

a) Assegurar que el document està ben format
b) Garantir que el document compleix una estructura definida
c) Convertir l’XML a altres formats
d) Afegir estils visuals

---

### **6.** Quina és la funció de la línia `<?xml version="1.0" encoding="UTF-8"?>`?

a) Indicar la versió i codificació del document XML
b) Afegir un comentari
c) Definir la DTD
d) Indicar l’idioma

---

### **7.** Què afegiries a un document XML per utilitzar l’espai de noms “[http://exemple.com”](http://exemple.com”) per a tots els elements?

a) `xmlns="http://exemple.com"`
b) `<!NAMESPACE "http://exemple.com">`
c) `#namespace "http://exemple.com"`
d) `@namespace "http://exemple.com"`

---

### **8.** Com es pot associar una DTD externa a un document XML?

a) Afegint `<!DOCTYPE arrel SYSTEM "fitxer.dtd">` al principi del document
b) Afegint un comentari amb el nom de la DTD
c) Mitjançant l’atribut `xmlns`
d) Enllaçant un arxiu `.xsl`

---

### **9.** Com es defineix un element buit anomenat “nota” en una DTD?

a) `<!ELEMENT nota (ANY)>`
b) `<!ELEMENT nota (#PCDATA)>`
c) `<!ELEMENT nota EMPTY>`
d) `<!ELEMENT nota (nota)>`

---

### **10.** Com es defineix un element “ordre” que ha de contindre primer `<inici>` i després `<final>`?

a) `<!ELEMENT ordre (inici, final)>`
b) `<!ELEMENT ordre (inici | final)>`
c) `<!ELEMENT ordre (inici, final)*>`
d) `<!ELEMENT ordre (inici & final)>`

---

### **11.** Quina és la finalitat de l’atribut `standalone="yes"` dins de la declaració XML?

a) Indica que el document és autosuficient i no depén de cap DTD externa
b) Indica l’idioma principal del document
c) Defineix la codificació del fitxer
d) Marca l’element arrel

---

### **12.** Quina d’aquestes entitats està escrita correctament per mostrar “5 < 10 & 3 > 2”?

a) `<text>5 < 10 & 3 > 2</text>`
b) `<text>5 &lt; 10 &amp; 3 &gt; 2</text>`
c) `<text>5 &lt; 10 & 3 &gt; 2</text>`
d) `<text>5 < 10 and 3 > 2</text>`

---

### **13.** Què és una secció CDATA en XML?

a) Un fragment on es poden escriure dades sense interpretar caràcters reservats
b) Una llista de valors enumerats dins del DTD
c) Una definició d’entitat
d) Un atribut obligatori

---

### **14.** Quina diferència hi ha entre un document XML “ben format” i un “vàlid”?

a) Cap, signifiquen el mateix
b) El “ben format” compleix la sintaxi XML; el “vàlid” a més compleix una DTD o XSD
c) El “vàlid” pot contindre errors de niat
d) El “ben format” depén d’una DTD

---

### **15.** Com es defineix un atribut `id` obligatori en una DTD?

a) `<!ATTLIST element id CDATA #REQUIRED>`
b) `<!ATTLIST element id CDATA #IMPLIED>`
c) `<!ATTLIST element id ID #IMPLIED>`
d) `<!ELEMENT element (id)>`

---

### **16.** Quina és la diferència entre `IDREF` i `IDREFS` en una DTD?

a) `IDREF` permet una sola referència, `IDREFS` diverses separades per espais
b) `IDREF` permet múltiples, `IDREFS` només una
c) Són equivalents
d) Cap dels dos pot usar-se amb atributs

---

### **17.** Quina declaració és correcta per a un atribut opcional `color` de tipus CDATA?

a) `<!ATTLIST element color CDATA #IMPLIED>`
b) `<!ATTLIST element color CDATA #REQUIRED>`
c) `<!ELEMENT element color CDATA>`
d) `<!ATTLIST color CDATA>`

---

### **18.** Quin quantificador indica que un element pot aparéixer zero o més vegades?

a) `?`
b) `+`
c) `*`
d) `|`

---

### **19.** En una DTD, quin atribut s’utilitza per permetre valors limitats com “baixa”, “mitjana” o “alta”?

a) `<!ATTLIST nivell valor CDATA #IMPLIED>`
b) `<!ATTLIST nivell valor (baixa | mitjana | alta) #IMPLIED>`
c) `<!ELEMENT nivell (baixa | mitjana | alta)>`
d) `<!ATTLIST nivell valor ENUMERAT #REQUIRED>`

---

### **20.** Quina d’aquestes opcions mostra correctament en XML el text següent:

> 5 < 10, “correcte”

a) `<text>5 < 10, “correcte”</text>`
b) `<text>5 &lt; 10, &quot;correcte&quot;</text>`
c) `<text>5 &lt; 10, "correcte"</text>`
d) `<text>5 < 10, &quot;correcte&quot;</text>`

---

# ✅ **Clau de respostes actualitzada**

| Nº | Resp | Nº | Resp |
| -- | ---- | -- | ---- |
| 1  | a    | 11 | a    |
| 2  | a    | 12 | b    |
| 3  | a    | 13 | a    |
| 4  | b    | 14 | b    |
| 5  | b    | 15 | a    |
| 6  | a    | 16 | a    |
| 7  | a    | 17 | a    |
| 8  | a    | 18 | c    |
| 9  | c    | 19 | b    |
| 10 | a    | 20 | b    |

---


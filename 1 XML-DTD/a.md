Perfecte 👌
Ací tens una versió revisada i pedagògica de la secció **“Tipus d’Atributs”**, adaptada al teu estil (clar, didàctic, en valencià i coherent amb la resta d’apunts).

He aplicat els criteris següents:

* Mantenir el **nivell pràctic i assequible**.
* **Incorporar `NMTOKEN` i `NMTOKENS`** de manera breu però completa.
* Mostrar **exemples clars i comentats**.
* Respectar l’estructura dels teus apunts (nivell bàsic → avançat).

---

## Tipus d’Atributs

Els atributs en un **DTD** poden tindre diversos **tipus de valors**, segons el tipus d’informació que contenen.
Aquesta classificació permet **controlar millor la validació** dels documents XML i assegurar que els valors siguen coherents.

---

### **1. CDATA**

El tipus **CDATA** (*Character Data*) és el més comú i flexible.
Permet escriure **qualsevol text** vàlid en XML: lletres, números, espais, accents o símbols.

S’utilitza quan volem afegir **text lliure**, com un nom, una data o una descripció.

```dtd
<!ATTLIST llibre titol CDATA #REQUIRED>
```

**Exemple XML vàlid:**

```xml
<biblioteca>
  <llibre titol="El senyor dels anells"/>
  <llibre titol="Introducció a XML"/>
  <llibre titol="Programació en Java: nivell avançat"/>
</biblioteca>

```

**Quan usar-lo:**
Quan el valor és text lliure escrit per persones i no volem restriccions.

---

### **2. NMTOKEN**

El tipus **NMTOKEN** (*Name Token*) indica que el valor ha de ser **una sola paraula tècnica**, sense espais, i formada per caràcters vàlids segons les regles XML (lletres, números, guions, punts o subratllats).

És útil per a **codis curts o etiquetes** que no poden tindre espais.

```dtd
<!ATTLIST empleat departament NMTOKEN #REQUIRED>
```

**Exemples vàlids:**

```xml
<empleat departament="recursos_humans"/>
<empleat departament="IT"/>
```

**No vàlid:**

```xml
<empleat departament="recursos humans"/> <!-- conté un espai -->
```

**Quan usar-lo:**
Quan volem un **sol codi o etiqueta** sense espais ni caràcters especials.

---

### **3. NMTOKENS**

El tipus **NMTOKENS** és com una extensió del `NMTOKEN`, però permet **múltiples paraules (tokens)** separades per espais.
Cada paraula ha de complir les mateixes regles que un `NMTOKEN`.

S’utilitza per a **llistes de valors**, com categories o assignatures.

```dtd
<!ATTLIST alumne assignatures NMTOKENS #IMPLIED>
```

**Exemple vàlid:**

```xml
<alumne assignatures="mates llengua angles"/>
```

**No vàlid:**

```xml
<alumne assignatures="matemàtiques avançades"/> <!-- espai dins d’un sol token -->
```

**Quan usar-lo:**
Quan un atribut pot contindre **diverses etiquetes o codis** separats per espais.
Encara que són útils, s’usen poc en la pràctica.

---

### **4. ENUMERAT**

Els atributs **enumerats** defineixen una **llista tancada de valors possibles**.
El valor de l’atribut ha de ser exactament un d’eixos.

```dtd
<!ATTLIST cotxe marca (Ford | Toyota | Honda) "Ford">
```

**Exemples XML vàlids:**

```xml
<cotxe marca="Ford"/>
<cotxe marca="Honda"/>
```

**No vàlid:**

```xml
<cotxe marca="Renault"/> <!-- valor fora de la llista -->
```

**Quan usar-lo:**
Quan el valor de l’atribut ha d’estar **restringit a un conjunt concret** d’opcions.

---

### **5. ID**

El tipus **ID** s’utilitza per crear **identificadors únics** dins del document XML.
Cap altre element pot repetir el mateix valor d’ID.

```dtd
<!ATTLIST element id ID #REQUIRED>
```

**Exemple XML:**

```xml
<producte id="p001"/>
<producte id="p002"/>
```

**No vàlid:**

```xml
<producte id="001"/> <!-- comença amb número -->
```

**Quan usar-lo:**
Quan necessitem un identificador únic per a un element (semblant a una clau primària en una base de dades).

---

### **6. IDREF i IDREFS**

Els tipus **IDREF** i **IDREFS** permeten fer **referències a altres elements** que tenen atributs `ID`.
Això permet crear relacions dins del document.

```dtd
<!ATTLIST empleat cap IDREF #IMPLIED>
<!ATTLIST projecte membres IDREFS #IMPLIED>
```

**Exemple amb ID i IDREF:**

```xml
<!DOCTYPE empresa [
  <!ELEMENT empresa (empleat+)>
  <!ELEMENT empleat (#PCDATA)>
  <!ATTLIST empleat id ID #REQUIRED>
  <!ATTLIST empleat cap IDREF #IMPLIED>
]>
<empresa>
  <empleat id="e1">Anna</empleat>
  <empleat id="e2" cap="e1">Marc</empleat>
</empresa>
```

**Exemple amb IDREFS:**

```xml
<projecte membres="e1 e2 e3">Projecte A</projecte>
```

**Quan usar-los:**
Quan volem establir **relacions internes** entre elements, com per exemple “empleat que depén d’un altre” o “cançó que pertany a diversos artistes”.

---

### **7. ENTITAT i ENTITATS**

Els atributs **ENTITAT** i **ENTITATS** permeten referir-se a **entitats declarades al DTD**.
Són menys comuns, però útils quan es vol reutilitzar contingut o valors predefinits.

```dtd
<!ATTLIST llibre idioma ENTITAT #IMPLIED>
<!ATTLIST document referencies ENTITATS #IMPLIED>
```

**Exemple:**

```xml
<!DOCTYPE biblioteca [
  <!ENTITY cat "Català">
  <!ENTITY eng "Anglés">
  <!ELEMENT llibre (titol, autor)>
  <!ELEMENT titol (#PCDATA)>
  <!ELEMENT autor (#PCDATA)>
  <!ATTLIST llibre idioma ENTITAT #IMPLIED>
]>
<biblioteca>
  <llibre idioma="&cat;">
    <titol>L’Ombra del Vent</titol>
    <autor>Zafón</autor>
  </llibre>
</biblioteca>
```

**Quan usar-los:**
Quan volem associar valors a entitats declarades en el DTD (poc freqüent en documents moderns).

---

### **Resum general**

| Tipus d’Atribut        | Contingut permés                                 | Espais         | Ús principal                         |
| ---------------------- | ------------------------------------------------ | -------------- | ------------------------------------ |
| **CDATA**              | Text lliure                                      | ✅ Sí           | Noms, frases o descripcions generals |
| **NMTOKEN**            | Una sola paraula tècnica                         | ❌ No           | Codi o etiqueta sense espais         |
| **NMTOKENS**           | Diverses paraules tècniques separades per espais | ✅ Entre tokens | Llistes de categories o codis        |
| **ENUMERAT**           | Valors d’una llista tancada                      | ❌ No           | Opcions concretes (com menús)        |
| **ID**                 | Identificador únic                               | ❌ No           | Identificar elements                 |
| **IDREF / IDREFS**     | Referència a ID(s) d’altres elements             | ✅ En IDREFS    | Relacions internes                   |
| **ENTITAT / ENTITATS** | Referències a entitats declarades                | ✅ En ENTITATS  | Valors prèviament definits al DTD    |

---

### 🧭 Consell pràctic

> En la majoria de casos reals, s’utilitzen només **CDATA**, **ENUMERAT**, **ID** i **IDREF/IDREFS**.
> Els tipus **NMTOKEN** i **NMTOKENS** s’inclouen per completitud i per avaluacions teòriques, però són poc habituals en documents moderns.

---

Vols que et prepare ara la versió *Annex o resum d’exemples* per afegir al final (com tens a “Elements en DTD”)?
Així t’inclouria un parell d’exemples complets i validables amb `<!DOCTYPE>` per practicar cada tipus.

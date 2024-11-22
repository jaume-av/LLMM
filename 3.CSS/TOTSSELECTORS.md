








































## Selectors CSS.

Els **selectors CSS** són patrons que s'utilitzen per seleccionar els elements HTML als quals volem aplicar un estil. Hi ha diversos tipus de selectors, cadascun amb una funcionalitat específica.

### **1. Selectors de Tipus**

Els selectors de tipus són els més senzills i s'utilitzen per seleccionar tots els elements d'un tipus concret.

#### **Exemple:**
```css

h1 {
    color: blue;
}

p {
    font-size: 16px;
}
```

**Què fa aquestes regles?**
- Tots els elements `<h1>` es pintaran de **blau**.
- Tots els paràgrafs `<p>` tindran una mida de lletra de **16 píxels**.
- Aquestes regles s'aplicaran a **tots els elements** de cada tipus.
- Si volem aplicar un estil a un element concret, podem utilitzar un **selector d'identificador** o un **selector de classe**.
- Si volem aplicar un estil a un grup d'elements, podem utilitzar un **selector de grup**.
- Si volem aplicar un estil a un element en un estat concret, podem utilitzar un **selector d'estat**.
- Si volem aplicar un estil a un element en una posició concreta, podem utilitzar un **selector estructural**.

### **2. Selectors d'Identificador**

Els selectors d'identificador s'utilitzen per seleccionar un element HTML amb un **identificador únic**.

#### **Exemple:**
```css
#menu {
    background-color: #FF0000; /* Vermell */
}
```

**Què fa aquesta regla?**

- L'element amb l'identificador `menu` tindrà un fons de color **vermell**.
- Els identificadors són únics per pàgina i s'assignen amb l'atribut `id` de l'element HTML.
- Els selectors d'identificador s'especifiquen amb un **signe de `#`** seguit de l'identificador.
- Només es pot assignar un **identificador** a un element concret.
- Si volem aplicar un estil a un grup d'elements, podem utilitzar un **selector de classe**.
- Si volem aplicar un estil a un element en un estat concret, podem utilitzar un **selector d'estat**.
- Si volem aplicar un estil a un element en una posició concreta, podem utilitzar un **selector estructural**.
- Si volem aplicar un estil a un element en un estat concret, podem utilitzar un **selector d'estat**.

### **3. Selectors de Classe**

Els selectors de classe s'utilitzen per seleccionar un grup d'elements HTML amb una **mateixa classe**.

#### **Exemple:**
```css
.important {
    font-weight: bold;
    color: red;
}
```

**Què fa aquesta regla?**

- Tots els elements amb la classe `important` tindran el text en **negreta** i de color **vermell**.
- Les classes són reutilitzables i s'assignen amb l'atribut `class` de l'element HTML.
- Els selectors de classe s'especifiquen amb un **punt `.`** seguit del nom de la classe.
- Un element pot tenir **múltiples classes** separades per espais.
- Si volem aplicar un estil a un element concret, podem utilitzar un **selector d'identificador**.
- Si volem aplicar un estil a un grup d'elements, podem utilitzar un **selector de grup**.
- Si volem aplicar un estil a un element en un estat concret, podem utilitzar un **selector d'estat**.
- Si volem aplicar un estil a un element en una posició concreta, podem utilitzar un **selector estructural**.
  

### **4. Selectors de Grup**

Els selectors de grup s'utilitzen per aplicar un mateix estil a **diversos elements**.

#### **Exemple:**
```css
h1, h2, h3 {
    font-family: Arial;
    color: blue;
}
```

**Què fa aquesta regla?**

- Tots els elements `<h1>`, `<h2>` i `<h3>` tindran la font **Arial** i el text de color **blau**.
- Els selectors de grup s'especifiquen separant els selectors amb **comes**.
- Si volem aplicar un estil a un element concret, podem utilitzar un **selector d'identificador**.
- Si volem aplicar un estil a un grup d'elements, podem utilitzar un **selector de classe**.
- Si volem aplicar un estil a un element en un estat concret, podem utilitzar un **selector d'estat**.
- Si volem aplicar un estil a un element en una posició concreta, podem utilitzar un **selector estructural**.


### **5. Selectors d'Estat**

Els selectors d'estat s'utilitzen per aplicar un estil a un element en un **estat concret**.

#### **Exemple:**
```css
a:link {
    color: blue;
}

a:hover {
    color: red;
}
```

**Què fa aquestes regles?**

- Els enllaços no visitats (`a:link`) tindran el text de color **blau**.
- Quan l'usuari passi el ratolí per sobre d'un enllaç (`a:hover`), el text es pintarà de color **vermell**.
- Els selectors d'estat s'utilitzen per estils com enllaços no visitats, visitats, actius, passats per sobre, etc.
- Els selectors d'estat s'especifiquen afegint un **dos punts `:`** seguit de l'estat.
- Si volem aplicar un estil a un element concret, podem utilitzar un **selector d'identificador**.
- Si volem aplicar un estil a un grup d'elements, podem utilitzar un **selector de classe**.
- Si volem aplicar un estil a un element en una posició concreta, podem utilitzar un **selector estructural**.
- Si volem aplicar un estil a un grup d'elements, podem utilitzar un **selector de grup**.


### **6. Selectors Estructurals**

Els selectors estructurals s'utilitzen per seleccionar elements HTML en una **posició concreta** dins de la pàgina.

#### **Exemple:**
```css
p:first-child {
    font-weight: bold;
}

p:last-child {
    color: red;
}
```

**Què fa aquestes regles?**

- El primer paràgraf (`p:first-child`) tindrà el text en **negreta**.
- L'últim paràgraf (`p:last-child`) tindrà el text de color **vermell**.
- Els selectors estructurals s'utilitzen per estils com el primer fill, l'últim fill, fills parells, fills senars, etc.
- Els selectors estructurals s'especifiquen afegint un **dos punts `:`** seguit de la posició.
- Si volem aplicar un estil a un element concret, podem utilitzar un **selector d'identificador**.
- Si volem aplicar un estil a un grup d'elements, podem utilitzar un **selector de classe**.
- Si volem aplicar un estil a un element en un estat concret, podem utilitzar un **selector d'estat**.
- Si volem aplicar un estil a un grup d'elements, podem utilitzar un **selector de grup**.


### **7. Selectors de Pseudo-Elements**

Els selectors de pseudo-elements s'utilitzen per aplicar un estil a parts específiques d'un element.

#### **Exemple:**
```css
p::first-line {
    font-weight: bold;
}

p::first-letter {
    font-size: 24px;
}
```

**Què fa aquestes regles?**

- La primera línia de cada paràgraf (`p::first-line`) tindrà el text en **negreta**.
- La primera lletra de cada paràgraf (`p::first-letter`) tindrà una mida de lletra de **24 píxels**.
- Els selectors de pseudo-elements s'utilitzen per estils com la primera línia, la primera lletra, la selecció de text, etc.
- Els selectors de pseudo-elements s'especifiquen afegint **dos dos punts `::`** seguits de l'element.


### **8. Selectors de Pseudo-Classes**

Els selectors de pseudo-classes s'utilitzen per aplicar un estil a un element en un **estat específic**.

#### **Exemple:**
```css
input:focus {
    background-color: yellow;
}

a:visited {
    color: purple;
}
```

**Què fa aquestes regles?**

- Quan un camp d'entrada (`input:focus`) està seleccionat, el fons es pintarà de color **groc**.
- Quan un enllaç (`a:visited`) ha estat visitat, el text es pintarà de color **lila**.
- Els selectors de pseudo-classes s'utilitzen per estils com enllaços visitats, enllaços actius, camps de formulari seleccionats, etc.
- Els selectors de pseudo-classes s'especifiquen afegint un **dos punts `:`** seguit de l'estat.


### **9. Selectors Combinats**

Els selectors combinats s'utilitzen per seleccionar elements HTML que compleixen **diverses condicions**.

#### **Exemple:**
```css
p.important {
    font-weight: bold;
    color: red;
}
```

**Què fa aquesta regla?**

- Tots els paràgrafs amb la classe `important` tindran el text en **negreta** i de color **vermell**.
- Els selectors combinats són una combinació de **selectors de tipus** i **selectors de classe**.
- Els selectors combinats s'utilitzen per estils més específics que requereixen múltiples condicions.
- Els selectors combinats s'especifiquen afegint un **punt `.`** seguit del nom de la classe al selector de tipus.


### **10. Selectors de Descendència**

Els selectors de descendència s'utilitzen per seleccionar elements HTML que són **fills d'un altre element**.

#### **Exemple:**
```css
div p {
    font-weight: bold;
}
```

**Què fa aquesta regla?**

- Tots els paràgrafs (`<p>`) que són fills d'un element `<div>` tindran el text en **negreta**.
- Els selectors de descendència són una combinació de **selectors de tipus** i **selectors de grup**.
- Els selectors de descendència s'utilitzen per estils que depenen de la relació entre elements.
- Els selectors de descendència s'especifiquen afegint un **espai** entre els selectors.


### **11. Selectors d'Atribut**

Els selectors d'atribut s'utilitzen per seleccionar elements HTML amb un **atribut específic**.

#### **Exemple:**
```css
a[target="_blank"] {
    color: blue;
}
```

**Què fa aquesta regla?**

- Tots els enllaços (`<a>`) amb l'atribut `target` igual a `_blank` tindran el text de color **blau**.
- Els selectors d'atribut s'utilitzen per estils que depenen dels atributs dels elements.
- Els selectors d'atribut s'especifiquen afegint **claudàtors `[]`** amb l'atribut i el valor desitjat.
- Els selectors d'atribut poden ser més específics afegint múltiples atributs.
- Els selectors d'atribut són útils per estils com enllaços amb un atribut `target` específic, imatges amb un atribut `alt`, etc.


### **12. Selectors de Substring**

Els selectors de substring s'utilitzen per seleccionar elements HTML amb un **atribut que contingui un valor específic**.

#### **Exemple:**
```css
a[href*="w3schools"] {
    color: red;
}
```

**Què fa aquesta regla?**

- Tots els enllaços (`<a>`) amb l'atribut `href` que contingui la paraula `w3schools` tindran el text de color **vermell**.
- Els selectors de substring s'utilitzen per estils que depenen de valors parcialment coincidents dels atributs dels elements.
- Els selectors de substring s'especifiquen afegint **claudàtors `[]`** amb l'atribut seguit de l'operador `*` i el valor desitjat.
- Els selectors de substring són útils per estils com enllaços amb un atribut `href` que conté una paraula específica, imatges amb un atribut `src` que comença per una ruta concreta, etc.
- Els selectors de substring poden ser més específics afegint múltiples atributs.


### **13. Selectors de Fill Directe**

Els selectors de fill directe s'utilitzen per seleccionar elements HTML que són **fills directes d'un altre element**.

#### **Exemple:**
```css
div > p {
    font-weight: bold;
}
```

**Què fa aquesta regla?**

- Tots els paràgrafs (`<p>`) que són fills directes d'un element `<div>` tindran el text en **negreta**.
- Els selectors de fill directe són una combinació de **selectors de tipus** i **selectors de descendència**.
- Els selectors de fill directe s'utilitzen per estils que depenen de la relació directa entre elements.
- Els selectors de fill directe s'especifiquen afegint un **signe `>`** entre els selectors.
- Els selectors de fill directe són més específics que els selectors de descendència.
- Els selectors de fill directe són útils per estils que només s'apliquen als fills directes d'un element.


### **14. Selectors de Negació**

Els selectors de negació s'utilitzen per seleccionar elements HTML que **no compleixen una condició**.

#### **Exemple:**
```css
p:not(.important) {
    font-style: italic;
}
```

**Què fa aquesta regla?**

- Tots els paràgrafs (`<p>`) que **no** tenen la classe `important` tindran el text en **cursiva**.
- Els selectors de negació s'utilitzen per estils que depenen de la **falta** d'una condició.
- Els selectors de negació s'especifiquen afegint un **dos punts `:`** seguit de la paraula `not` i la condició entre parèntesis.
- Els selectors de negació són útils per estils que s'apliquen a tots els elements excepte els que compleixen una condició.
- Els selectors de negació poden ser més específics afegint múltiples condicions.
- Els selectors de negació són útils per estils com enllaços que no són visitats, imatges que no tenen un atribut `alt`, etc.


### **15. Selectors de Variables**

Els selectors de variables s'utilitzen per definir i utilitzar **variables CSS**.

#### **Exemple:**
```css
:root {
    --color-primary: blue;
}

p {
    color: var(--color-primary);
}
```

**Què fa aquestes regles?**

- S'ha definit una variable `--color-primary` amb el valor `blue` a l'element `:root`.
- Tots els paràgrafs (`<p>`) tindran el text del color definit per la variable `--color-primary`.
- Els selectors de variables s'utilitzen per definir valors reutilitzables en tot el document.
- Les variables CSS s'especifiquen amb dos **guions `-`** seguits del nom de la variable.
- Les variables CSS s'utilitzen amb la funció `var()` i el nom de la variable entre parèntesis.
- Les variables CSS són útils per estils com colors, mides, marges, etc., que es repeteixen en diverses parts del document.
- Les variables CSS són útils per canviar fàcilment els valors en tot el document.
- Les variables CSS són útils per estils que depenen de valors dinàmics com colors temàtics, mides de text, etc.


### **16. Selectors de Media Queries**

Els selectors de media queries s'utilitzen per aplicar estils en funció de les **característiques del dispositiu**.

#### **Exemple:**
```css
@media screen and (max-width: 600px) {
    body {
        background-color: lightblue;
    }
}
```

**Què fa aquesta regla?**

- Quan l'amplada de la pantalla és inferior a `600px`, el fons del cos (`body`) es pintarà de color **blau clar**.
- Els selectors de media queries s'utilitzen per estils que depenen de les característiques del dispositiu com l'amplada de la pantalla, la resolució, l'orientació, etc.
- Els selectors de media queries s'especifiquen amb la paraula `@media` seguida de les condicions entre parèntesis.
- Els selectors de media queries són útils per estils que s'han d'adaptar a diferents dispositius com mòbils, tauletes, ordinadors, etc.


### **17. Selectors de Combinació**

Els selectors de combinació s'utilitzen per combinar **diversos selectors** en una sola regla.

#### **Exemple:**
```css
h1 + p {
    font-weight: bold;
}
```

**Què fa aquesta regla?**

- Tots els paràgrafs (`<p>`) que segueixen immediatament un títol (`<h1>`) tindran el text en **negreta**.
- Els selectors de combinació s'utilitzen per estils que depenen de la relació entre elements.
- Els selectors de combinació s'especifiquen afegint un **signe `+`** entre els selectors.
- Els selectors de combinació són útils per estils que depenen de la relació directa entre elements com fills, germans, etc.
- Els selectors de combinació són més específics que els selectors de descendència.
- Els selectors de combinació són útils per estils que depenen de la relació entre elements.


### **18. Selectors de Contingut**

Els selectors de contingut s'utilitzen per seleccionar elements HTML que **contenen un text específic**.

#### **Exemple:**
```css
p:contains("lorem") {
    color: red;
}
```

**Què fa aquesta regla?**

- Tots els paràgrafs (`<p>`) que contenen la paraula `lorem` tindran el text de color **vermell**.

- Els selectors de contingut s'utilitzen per estils que depenen del text contingut en els elements.
- Els selectors de contingut són útils per estils que depenen del contingut dels elements com enllaços, paràgrafs, títols, etc.


### **19. Selectors de Llenguatge**

Els selectors de llenguatge s'utilitzen per seleccionar elements HTML en un **determinat idioma**.

#### **Exemple:**
```css
p:lang(fr) {
    font-style: italic;
}
```

**Què fa aquesta regla?**

- Tots els paràgrafs (`<p>`) en francès (`fr`) tindran el text en **cursiva**.
- Els selectors de llenguatge s'utilitzen per estils que depenen de l'idioma dels elements.
- Els selectors de llenguatge són útils per estils que depenen de l'idioma com títols, paràgrafs, enllaços, etc.
- Els selectors de llenguatge s'especifiquen amb la paraula `:lang` seguida de l'idioma entre parèntesis.
- Els selectors de llenguatge són útils per estils que depenen de l'idioma dels elements.


### **20. Selectors de Visibilitat**

Els selectors de visibilitat s'utilitzen per seleccionar elements HTML que són **visibles o ocults**.

#### **Exemple:**
```css
p:visible {
    color: green;
}
```

**Què fa aquesta regla?**

- Tots els paràgrafs (`<p>`) visibles tindran el text de color **verd**.
- Els selectors de visibilitat s'utilitzen per estils que depenen de l'estat de visibilitat dels elements.
- Els selectors de visibilitat són útils per estils que depenen de si els elements són visibles o ocults.
- Els selectors de visibilitat són útils per estils que depenen de l'estat dels elements com visibilitat, opacitat, etc.


### **21. Selectors de Formulari**

Els selectors de formulari s'utilitzen per seleccionar elements HTML en un **formulari**.

#### **Exemple:**
```css
input[type="text"] {
    background-color: lightblue;
}
```

**Què fa aquesta regla?**

- Tots els camps d'entrada de text (`<input type="text">`) tindran el fons de color **blau clar**.
- Els selectors de formulari s'utilitzen per estils que depenen dels elements dels formularis com camps d'entrada, botons, llistes, etc.
- Els selectors de formulari són útils per estils que depenen dels elements dels formularis.
- Els selectors de formulari s'especifiquen amb l'atribut `type` de l'element seguit de l'operador `=` i el valor desitjat.
- Els selectors de formulari són útils per estils que depenen dels elements dels formularis com camps d'entrada, botons, llistes, etc.
- Els selectors de formulari són útils per estils que depenen dels elements dels formularis.


### **22. Selectors de Contingut Vacu**

Els selectors de contingut buit s'utilitzen per seleccionar elements HTML que són **buits**.

#### **Exemple:**
```css
p:empty {
    display: none;
}
```

**Què fa aquesta regla?**

- Tots els paràgrafs (`<p>`) buits es **cridaran**.
- Els selectors de contingut buit s'utilitzen per estils que depenen del contingut dels elements.
- Els selectors de contingut buit són útils per estils que depenen del contingut dels elements com paràgrafs, divs, llistes, etc.


### **23. Selectors de Focus**

Els selectors de focus s'utilitzen per seleccionar elements HTML que estan **en focus**.

#### **Exemple:**
```css
input:focus {
    background-color: lightblue;
}
```

**Què fa aquesta regla?**

- Quan un camp d'entrada (`input`) està en focus, el fons es pintarà de color **blau clar**.
- Els selectors de focus s'utilitzen per estils que depenen de l'estat de focus dels elements.
- Els selectors de focus són útils per estils que depenen de l'estat de focus dels elements com camps d'entrada, botons, enllaços, etc.
- Els selectors de focus són útils per estils que depenen de l'estat de focus dels elements.


### **24. Selectors de Target**

Els selectors de target s'utilitzen per seleccionar elements HTML que són **l'objectiu d'un enllaç**.

#### **Exemple:**
```css
#section1:target {
    background-color: lightblue;
}
```

**Què fa aquesta regla?**

### **25. Selectors de Root**

Els selectors de root s'utilitzen per seleccionar l'**element arrel** del document.

#### **Exemple:**
```css
:root {
    font-size: 16px;
}
```

**Què fa aquesta regla?**

- L'element arrel (`:root`) tindrà una mida de lletra de **16 píxels**.
- Els selectors de root s'utilitzen per estils que s'apliquen a tot el document.
- Els selectors de root són útils per estils globals com mides de lletra, colors, marges, etc.
- Els selectors de root són útils per estils que s'apliquen a tot el document.


### **26. Selectors de Nth-Child**

Els selectors de nth-child s'utilitzen per seleccionar elements HTML en una **posició específica** dins d'un altre element.

#### **Exemple:**
```css
p:nth-child(2) {
    color: red;
}
```

**Què fa aquesta regla?**

- El segon paràgraf (`<p>`) d'un element pare tindrà el text de color **vermell**.
- Els selectors de nth-child s'utilitzen per estils que depenen de la posició dels elements dins d'un altre element.
- Els selectors de nth-child són útils per estils que depenen de la posició dels elements com paràgrafs, llistes, divs, etc.
- Els selectors de nth-child s'especifiquen amb la paraula `nth-child` seguida de la posició entre parèntesis.


### **27. Selectors de Nth-Last-Child**

Els selectors de nth-last-child s'utilitzen per seleccionar elements HTML en una **posició específica** dins d'un altre element, començant pel final.

#### **Exemple:**
```css
p:nth-last-child(2) {
    color: red;
}
```

**Què fa aquesta regla?**

- El segon paràgraf (`<p>`) d'un element pare començant pel final tindrà el text de color **vermell**.
- Els selectors de nth-last-child s'utilitzen per estils que depenen de la posició dels elements dins d'un altre element, començant pel final.


### **28. Selectors de Nth-of-Type**

Els selectors de nth-of-type s'utilitzen per seleccionar elements HTML d'un **tipus específic** en una **posició específica** dins d'un altre element.

#### **Exemple:**
```css
p:nth-of-type(2) {
    color: red;
}
```

**Què fa aquesta regla?**

- El segon paràgraf (`<p>`) d'un element pare tindrà el text de color **vermell**.
- Els selectors de nth-of-type s'utilitzen per estils que depenen de la posició dels elements d'un tipus específic dins d'un altre element.
- Els selectors de nth-of-type són útils per estils que depenen de la posició dels elements d'un tipus específic com paràgrafs, llistes, divs, etc.
- Els selectors de nth-of-type s'especifiquen amb la paraula `nth-of-type` seguida de la posició entre parèntesis.
- Els selectors de nth-of-type són útils per estils que depenen de la posició dels elements d'un tipus específic.
- 


### **29. Selectors de Nth-Last-of-Type**

Els selectors de nth-last-of-type s'utilitzen per seleccionar elements HTML d'un **tipus específic** en una **posició específica** dins d'un altre element, començant pel final.

#### **Exemple:**
```css
p:nth-last-of-type(2) {
    color: red;
}
```

**Què fa aquesta regla?**

- El segon paràgraf (`<p>`) d'un element pare començant pel final tindrà el text de color **vermell**.
- Els selectors de nth-last-of-type s'utilitzen per estils que depenen de la posició dels elements d'un tipus específic dins d'un altre element, començant pel final.
- Els selectors de nth-last-of-type són útils per estils que depenen de la posició dels elements d'un tipus específic com paràgrafs, llistes, divs, etc.
- Els selectors de nth-last-of-type s'especifiquen amb la paraula `nth-last-of-type` seguida de la posició entre parèntesis.



### **30. Selectors de Nth-Column**

Els selectors de nth-column s'utilitzen per seleccionar columnes en una **taula**.

#### **Exemple:**
```css
td:nth-column(2) {
    background-color: lightblue;
}
```

**Què fa aquesta regla?**

- La segona columna (`td`) de la taula tindrà el fons de color **blau clar**.
- Els selectors de nth-column s'utilitzen per estils que depenen de la posició de les columnes en una taula.
- Els selectors de nth-column són útils per estils que depenen de la posició de les columnes en una taula.
- Els selectors de nth-column s'especifiquen amb la paraula `nth-column` seguida de la posició entre parèntesis.


### **31. Selectors de Nth-Last-Column**

Els selectors de nth-last-column s'utilitzen per seleccionar columnes en una **taula**, començant pel final.

#### **Exemple:**
```css

td:nth-last-column(2) {
    background-color: lightblue;
}
```

**Què fa aquesta regla?**

- La segona columna (`td`) de la taula començant pel final tindrà el fons de color **blau clar**.

- Els selectors de nth-last-column s'utilitzen per estils que depenen de la posició de les columnes en una taula, començant pel final.



### **32. Selectors de Nth-Row**


Els selectors de nth-row s'utilitzen per seleccionar files en una **taula**.

#### **Exemple:**
```css

tr:nth-row(2) {
    background-color: lightblue;
}
```

**Què fa aquesta regla?**

- La segona fila (`tr`) de la taula tindrà el fons de color **blau clar**.

- Els selectors de nth-row s'utilitzen per estils que depenen de la posició de les files en una taula.

- Els selectors de nth-row són útils per estils que depenen de la posició de les files en una taula.
- Els selectors de nth-row s'especifiquen amb la paraula `nth-row` seguida de la posició entre parèntesis.


### **33. Selectors de Nth-Last-Row**

Els selectors de nth-last-row s'utilitzen per seleccionar files en una **taula**, començant pel final.

#### **Exemple:**
```css

tr:nth-last-row(2) {
    background-color: lightblue;
}
```

**Què fa aquesta regla?**

- La segona fila (`tr`) de la taula començant pel final tindrà el fons de color **blau clar**.
- Els selectors de nth-last-row s'utilitzen per estils que depenen de la posició de les files en una taula, començant pel final.
- Els selectors de nth-last-row són útils per estils que depenen de la posició de les files en una taula, començant pel final.
- Els selectors de nth-last-row s'especifiquen amb la paraula `nth-last-row` seguida de la posició entre parèntesis.


### **34. Selectors de Nth-Column-Span**

Els selectors de nth-column-span s'utilitzen per seleccionar columnes en una **taula** amb una **amplada específica**.

#### **Exemple:**
```css

td:nth-column-span(2) {
    background-color: lightblue;
}
```

**Què fa aquesta regla?**

- La segona columna (`td`) de la taula amb una amplada específica tindrà el fons de color **blau clar**.
- Els selectors de nth-column-span s'utilitzen per estils que depenen de la posició i amplada de les columnes en una taula.
- Els selectors de nth-column-span són útils per estils que depenen de la posició i amplada de les columnes en una taula.
- Els selectors de nth-column-span s'especifiquen amb la paraula `nth-column-span` seguida de la posició entre parèntesis.


### **35. Selectors de Nth-Last-Column-Span**

Els selectors de nth-last-column-span s'utilitzen per seleccionar columnes en una **taula** amb una **amplada específica**, començant pel final.

#### **Exemple:**
```css

td:nth-last-column-span(2) {
    background-color: lightblue;
}
```

**Què fa aquesta regla?**

- La segona columna (`td`) de la taula amb una amplada específica començant pel final tindrà el fons de color **blau clar**.
- Els selectors de nth-last-column-span s'utilitzen per estils que depenen de la posició i amplada de les columnes en una taula, començant pel final.
- Els selectors de nth-last-column-span són útils per estils que depenen de la posició i amplada de les columnes en una taula, començant pel final.
- Els selectors de nth-last-column-span s'especifiquen amb la paraula `nth-last-column-span` seguida de la posició entre parèntesis.
  

### **36. Selectors de Nth-Row-Span**

Els selectors de nth-row-span s'utilitzen per seleccionar files en una **taula** amb una **amplada específica**.

#### **Exemple:**
```css

tr:nth-row-span(2) {
    background-color: lightblue;
}
```

**Què fa aquesta regla?**

- La segona fila (`tr`) de la taula amb una amplada específica tindrà el fons de color **blau clar**.
- Els selectors de nth-row-span s'utilitzen per estils que depenen de la posició i amplada de les files en una taula.
- Els selectors de nth-row-span són útils per estils que depenen de la posició i amplada de les files en una taula.
- Els selectors de nth-row-span s'especifiquen amb la paraula `nth-row-span` seguida de la posició entre parèntesis.


### **37. Selectors de Nth-Last-Row-Span**

Els selectors de nth-last-row-span s'utilitzen per seleccionar files en una **ta

ula** amb una **amplada específica**, començant pel final.

#### **Exemple:**
```css

tr:nth-last-row-span(2) {
    background-color: lightblue;
}
```

**Què fa aquesta regla?**

- La segona fila (`tr`) de la taula amb una amplada específica començant pel final tindrà el fons de color **blau clar**.

- Els selectors de nth-last-row-span s'utilitzen per estils que depenen de la posició i amplada de les files en una taula, començant pel final.
- Els selectors de nth-last-row-span són útils per estils que depenen de la posició i amplada de les files en una taula, començant pel final.
- Els selectors de nth-last-row-span s'especifiquen amb la paraula `nth-last-row-span` seguida de la posició entre parèntesis.


### **38. Selectors de Nth-Column-Of-Type**

Els selectors de nth-column-of-type s'utilitzen per seleccionar columnes d'un **tipus específic** en una **posició específica** dins d'un altre element.

#### **Exemple:**
```css

td:nth-column-of-type(2) {
    background-color: lightblue;
}
```

**Què fa aquesta regla?**

- La segona columna (`td`) d'un tipus específic d'un element pare tindrà el fons de color **blau clar**.
- Els selectors de nth-column-of-type s'utilitzen per estils que depenen de la posició de les columnes d'un tipus específic dins d'un altre element.
- Els selectors de nth-column-of-type són útils per estils que depenen de la posició de les columnes d'un tipus específic com paràgrafs, llistes, divs, etc.
- Els selectors de nth-column-of-type s'especifiquen amb la paraula `nth-column-of-type` seguida de la posició entre parèntesis.
  

### **39. Selectors de Nth-Last-Column-Of-Type**

Els selectors de nth-last-column-of-type s'utilitzen per seleccionar columnes d'un **tipus específic** en una **posició específica** dins d'un altre element, començant pel final.

#### **Exemple:**
```css

td:nth-last-column-of-type(2) {
    background-color: lightblue;
}
```

**Què fa aquesta regla?**

- La segona columna (`td`) d'un tipus específic d'un element pare començant pel final tindrà el fons de color **blau clar**.

- Els selectors de nth-last-column-of-type s'utilitzen per estils que depenen de la posició de les columnes d'un tipus específic dins d'un altre element, començant pel final.
- Els selectors de nth-last-column-of-type són útils per estils que depenen de la posició de les columnes d'un tipus específic com paràgrafs, llistes, divs, etc.
- Els selectors de nth-last-column-of-type s'especifiquen amb la paraula `nth-last-column-of-type` seguida de la posició entre parèntesis.
  

### **40. Selectors de Nth-Row-Of-Type**

Els selectors de nth-row-of-type s'utilitzen per seleccionar files d'un **tipus específic** en una **posició específica** dins d'un altre element.

#### **Exemple:**
```css

tr:nth-row-of-type(2) {
    background-color: lightblue;
}
```

**Què fa aquesta regla?**

- La segona fila (`tr`) d'un tipus específic d'un element pare tindrà el fons de color **blau clar**.

- Els selectors de nth-row-of-type s'utilitzen per estils que depenen de la posició de les files d'un tipus específic dins d'un altre element.

- Els selectors de nth-row-of-type són útils per estils que depenen de la posició de les files d'un tipus específic com paràgrafs, llistes, divs, etc.
- Els selectors de nth-row-of-type s'especifiquen amb la paraula `nth-row-of-type` seguida de la posició entre parèntesis.


### **41. Selectors de Nth-Last-Row-Of-Type**

Els selectors de nth-last-row-of-type s'utilitzen per seleccionar files d'un **tipus específic** en una **posició específica** dins d'un altre element, començant pel final.

#### **Exemple:**
```css

tr:nth-last-row-of-type(2) {
    background-color: lightblue;
}
```

**Què fa aquesta regla?**

- La segona fila (`tr`) d'un tipus específic d'un element pare començant pel final tindrà el fons de color **blau clar**.

- Els selectors de nth-last-row-of-type s'utilitzen per estils que depenen de la posició de les files d'un tipus específic dins d'un altre element, començant pel final.

- Els selectors de nth-last-row-of-type són útils per estils que depenen de la posició de les files d'un tipus específic com paràgrafs, llistes, divs, etc.

- Els selectors de nth-last-row-of-type s'especifiquen amb la paraula `nth-last-row-of-type` seguida de la posició entre parèntesis.



### **42. Selectors de Nth-Column-Of-Type-Span**


Els selectors de nth-column-of-type-span s'utilitzen per seleccionar columnes d'un **tipus específic** en una **posició específica** dins d'un altre element amb una **amplada específica**.

#### **Exemple:**
```css

td:nth-column-of-type-span(2) {
    background-color: lightblue;
}
```

**Què fa aquesta regla?**

- La segona columna (`td`) d'un tipus específic d'un element pare amb una amplada específica tindrà el fons de color **blau clar**.

- Els selectors de nth-column-of-type-span s'utilitzen per estils que depenen de la posició i amplada de les columnes d'un tipus específic dins d'un altre element.

- Els selectors de nth-column-of-type-span són útils per estils que depenen de la posició i amplada de les columnes d'un tipus específic com paràgrafs, llistes, divs, etc.

- Els selectors de nth-column-of-type-span s'especifiquen amb la paraula `nth-column-of-type-span` seguida de la posició entre parèntesis.




### **43. Selectors de Nth-Last-Column-Of-Type-Span**

Els selectors de nth-last-column-of-type-span s'utilitzen per seleccionar columnes d'un **tipus específic** en una **posició específica** dins d'un altre element, començant pel final, amb una **amplada específica**.


#### **Exemple:**
```css

td:nth-last-column-of-type-span(2) {
    background-color: lightblue;
}
```

**Què fa aquesta regla?**

- La segona columna (`td`) d'un tipus específic d'un element pare començant pel final amb una amplada específica tindrà el fons de color **blau clar**.

- Els selectors de nth-last-column-of-type-span s'utilitzen per estils que depenen de la posició i amplada de les columnes d'un tipus específic dins d'un altre element, començant pel final.

- Els selectors de nth-last-column-of-type-span són útils per estils que depenen de la posició i amplada de les columnes d'un tipus específic com paràgrafs, llistes, divs, etc.

- Els selectors de nth-last-column-of-type-span s'especifiquen amb la paraula `nth-last-column-of-type-span` seguida de la posició entre parèntesis.



### **44. Selectors de Nth-Row-Of-Type-Span**


Els selectors de nth-row-of-type-span s'utilitzen per seleccionar files d'un **tipus específic** en una **posició específica** dins d'un altre element amb una **amplada específica**.

#### **Exemple:**
```css

tr:nth-row-of-type-span(2) {
    background-color: lightblue;
}
```

**Què fa aquesta regla?**

- La segona fila (`tr`) d'un tipus específic d'un element pare amb una amplada específica tindrà el fons de color **blau clar**.

- Els selectors de nth-row-of-type-span s'utilitzen per estils que depenen de la posició i amplada de les files d'un tipus específic dins d'un altre element.

- Els selectors de nth-row-of-type-span són útils per estils que depenen de la posició i amplada de les files d'un tipus específic com paràgrafs, llistes, divs, etc.

- Els selectors de nth-row-of-type-span s'especifiquen amb la paraula `nth-row-of-type-span` seguida de la posició entre parèntesis.



### **45. Selectors de Nth-Last-Row-Of-Type-Span**

Els selectors de nth-last-row-of-type-span s'utilitzen per seleccionar files d'un **tipus específic** en una **posició específica** dins d'un altre element, començant pel final, amb una **amplada específica**.

#### **Exemple:**
```css

tr:nth-last-row-of-type-span(2) {
    background-color: lightblue;
}
```

**Què fa aquesta regla?**

- La segona fila (`tr`) d'un tipus específic d'un element pare començant pel final amb una amplada específica tindrà el fons de color **blau clar**.

- Els selectors de nth-last-row-of-type-span s'utilitzen per estils que depenen de la posició i amplada de les files d'un tipus específic dins d'un altre element, començant pel final.

- Els selectors de nth-last-row-of-type-span són útils per estils que depenen de la posició i amplada de les files d'un tipus específic com paràgrafs, llistes, divs, etc.

- Els selectors de nth-last-row-of-type-span s'especifiquen amb la paraula `nth-last-row-of-type-span` seguida de la posició entre parèntesis.



### **46. Selectors de Nth-Child-Formula**

Els selectors de nth-child-formula s'utilitzen per seleccionar elements HTML en una **posició específica** dins d'un altre element amb una **fórmula específica**.

#### **Exemple:**
```css

p:nth-child(2n+1) {
    color: red;
}
```

**Què fa aquesta regla?**

- Els paràgrafs (`<p>`) en una posició específica d'un element pare amb una fórmula específica tindran el text de color **vermell**.

- Els selectors de nth-child-formula s'utilitzen per estils que depenen de la posició dels elements dins d'un altre element amb una fórmula específica.

- Els selectors de nth-child-formula són útils per estils que depenen de la posició dels elements dins d'un altre element amb una fórmula específica.


### **47. Selectors de Nth-Last-Child-Formula**


Els selectors de nth-last-child-formula s'utilitzen per seleccionar elements HTML en una **posició específica** dins d'un altre element, començant pel final, amb una **fórmula específica**.

#### **Exemple:**
```css

p:nth-last-child(2n+1) {
    color: red;
}
```

**Què fa aquesta regla?**

- Els paràgrafs (`<p>`) en una posició específica d'un element pare començant pel final amb una fórmula específica tindran el text de color **vermell**.


- Els selectors de nth-last-child-formula s'utilitzen per estils que depenen de la posició dels elements dins d'un altre element, començant pel final, amb una fórmula específica.


### **48. Selectors de Nth-Of-Type-Formula**

Els selectors de nth-of-type-formula s'utilitzen per seleccionar elements HTML d'un **tipus específic** en una **posició específica** dins d'un altre element amb una **fórmula específica**.

#### **Exemple:**
```css

p:nth-of-type(2n+1) {
    color: red;
}
```

**Què fa aquesta regla?**

- Els paràgrafs (`<p>`) d'un tipus específic en una posició específica d'un element pare amb una fórmula específica tindran el text de color **vermell**.

- Els selectors de nth-of-type-formula s'utilitzen per estils que depenen de la posició dels elements d'un tipus específic dins d'un altre element amb una fórmula específica.

- Els selectors de nth-of-type-formula són útils per estils que depenen de la posició dels elements d'un tipus específic dins d'un altre element amb una fórmula específica.


### **49. Selectors de Nth-Last-Of-Type-Formula**

Els selectors de nth-last-of-type-formula s'utilitzen per seleccionar elements HTML d'un **tipus específic** en una **posició específica** dins d'un altre element, començant pel final, amb una **fórmula específica**.

#### **Exemple:**
```css

p:nth-last-of-type(2n+1) {
    color: red;
}
```

**Què fa aquesta regla?**

- Els paràgrafs (`<p>`) d'un tipus específic en una posició específica d'un element pare començant pel final amb una fórmula específica tindran el text de color **vermell**.

- Els selectors de nth-last-of-type-formula s'utilitzen per estils que depenen de la posició dels elements d'un tipus específic dins d'un altre element, començant pel final, amb una fórmula específica.



### **50. Selectors de Nth-Column-Formula**

Els selectors de nth-column-formula s'utilitzen per seleccionar columnes en una **taula** amb una **fórmula específica**.


#### **Exemple:**
```css

td:nth-column(2n+1) {
    background-color: lightblue;
}
```

**Què fa aquesta regla?**

- Les columnes (`td`) en una posició específica de la taula amb una fórmula específica tindran el fons de color **blau clar**.

- Els selectors de nth-column-formula s'utilitzen per estils que depenen de la posició de les columnes en una taula amb una fórmula específica.



### **51. Selectors de Nth-Last-Column-Formula**

Els selectors de nth-last-column-formula s'utilitzen per seleccionar columnes en una **taula** amb una **fórmula específica**, començant pel final.


#### **Exemple:**
```css

td:nth-last-column(2n+1) {
    background-color: lightblue;
}
```

**Què fa aquesta regla?**


- Les columnes (`td`) en una posició específica de la taula començant pel final amb una fórmula específica tindran el fons de color **blau clar**.

- Els selectors de nth-last-column-formula s'utilitzen per estils que depenen de la posició de les columnes en una taula amb una fórmula específica, començant pel final.



### **52. Selectors de Nth-Row-Formula**


Els selectors de nth-row-formula s'utilitzen per seleccionar files en una **taula** amb una **fórmula específica**.

```css

tr:nth-row(2n+1) {
    background-color: lightblue;
}
```

**Què fa aquesta regla?**

- Les files (`tr`) en una posició específica de la taula amb una fórmula específica tindran el fons de color **blau clar**.

- Els selectors de nth-row-formula s'utilitzen per estils que depenen de la posició de les files en una taula amb una fórmula específica.



### **53. Selectors de Nth-Last-Row-Formula**

Els selectors de nth-last-row-formula s'utilitzen per seleccionar files en una **ta

ula** amb una **fórmula específica**, començant pel final.

#### **Exemple:**
```css

tr:nth-last-row(2n+1) {
    background-color: lightblue;
}
```

**Què fa aquesta regla?**

- Les files (`tr`) en una posició específica de la taula començant pel final amb una fórmula específica tindran el fons de color **blau clar**.

- Els selectors de nth-last-row-formula s'utilitzen per estils que depenen de la posició de les files en una taula amb una fórmula específica, començant pel final.



### **54. Selectors de Nth-Column-Of-Type-Formula**


Els selectors de nth-column-of-type-formula s'utilitzen per seleccionar columnes d'un **tipus específic** en una **posició específica** dins d'un altre element amb una **fórmula específica**.


#### **Exemple:**
```css

td:nth-column-of-type(2n+1) {
    background-color: lightblue;
}
```

**Què fa aquesta regla?**

- Les columnes (`td`) d'un tipus específic en una posició específica d'un element pare amb una fórmula específica tindran el fons de color **blau clar**.

- Els selectors de nth-column-of-type-formula s'utilitzen per estils que depenen de la posició de les columnes d'un tipus específic dins d'un altre element amb una fórmula específica.




### **55. Selectors de Nth-Last-Column-Of-Type-Formula**

Els selectors de nth-last-column-of-type-formula s'utilitzen per seleccionar columnes d'un **tipus específic** en una **posició específica** dins d'un altre element, començant pel final, amb una **fórmula específica**.


#### **Exemple:**
```css

td:nth-last-column-of-type(2n+1) {
    background-color: lightblue;
}
```

**Què fa aquesta regla?**

- Les columnes (`td`) d'un tipus específic en una posició específica d'un element pare començant pel final amb una fórmula específica tindran el fons de color **blau clar**.

- Els selectors de nth-last-column-of-type-formula s'utilitzen per estils que depenen de la posició de les columnes d'un tipus específic dins d'un altre element, començant pel final, amb una fórmula específica.



### **56. Selectors de Nth-Row-Of-Type-Formula**

### **57. Selectors de Nth-Last-Row-Of-Type-Formula**

### **58. Selectors de Nth-Column-Of-Type-Span-Formula**

### **59. Selectors de Nth-Last-Column-Of-Type-Span-Formula**

### **60. Selectors de Nth-Row-Of-Type-Span-Formula**

### **61. Selectors de Nth-Last-Row-Of-Type-Span-Formula**

### **62. Selectors de Nth-Column-Of-Type-Span-Formula**

### **63. Selectors de Nth-Last-Column-Of-Type-Span-Formula**

### **64. Selectors de Nth-Row-Of-Type-Span-Formula**

### **65. Selectors de Nth-Last-Row-Of-Type-Span-Formula**

### **66. Selectors de Nth-Column-Formula**

### **67. Selectors de Nth-Last-Column-Formula**

### **68. Selectors de Nth-Row-Formula**

### **69. Selectors de Nth-Last-Row-Formula**

### **70. Selectors de Nth-Column-Of-Type-Formula**

### **71. Selectors de Nth-Last-Column-Of-Type-Formula**

### **72. Selectors de Nth-Row-Of-Type-Formula**

### **73. Selectors de Nth-Last-Row-Of-Type-Formula**

# **Llenguatges de Marques - CSS**

## **Animacions amb CSS**

Les animacions en CSS es defineixen amb la propietat **`animation`** i la regla **`@keyframes`**, que ens permet especificar els estats clau d'una animació per controlar els canvis visuals de manera precisa.

### **1. Exemples pràctics**

#### **1.1. Animació de desplaçament**
Definim una animació anomenada **`move`** que mou un element horitzontalment.

```css
@keyframes move {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100px);
  }
}

.element {
  animation: move 2s ease-in-out infinite alternate;
}
```

**Explicació:**
- **`from`**: L'estat inicial sense desplaçament.
- **`to`**: L'estat final desplaçat 100px cap a la dreta.
- La classe `.element` aplica l'animació amb les propietats següents:
  - **Duració**: 2 segons.
  - **Funció de temporització**: "ease-in-out".
  - **Repetició**: Infinitament.
  - **Alterna** entre els estats inicial i final.

---

#### **1.2. Animació de canvi de color**

```css
@keyframes changeColor {
  from {
    color: red;
  }
  to {
    color: blue;
  }
}

.element {
  animation: changeColor 2s infinite alternate;
}
```

**Explicació:**
- Canvia el color del text de roig a blau:
  - **`from`**: Color inicial roig.
  - **`to`**: Color final blau.
- L'animació es repeteix infinitament i alterna entre els dos colors.

---

#### **1.3. Animació de canvi de color de fons**

```css
@keyframes changeBackground {
  0% {
    background-color: red;
  }
  50% {
    background-color: yellow;
  }
  100% {
    background-color: blue;
  }
}

.element {
  animation: changeBackground 3s infinite;
}
```

**Explicació:**
- Aquesta animació canvia el color de fons seguint estos passos:
  - **0%**: Color inicial roig.
  - **50%**: Color intermedi groc.
  - **100%**: Color final blau.
- Es repeteix cada 3 segons de forma infinita.

---

#### **1.4. Animació de rotació**

```css
@keyframes rotate {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

.element {
  animation: rotate 2s linear infinite;
}
```

**Explicació:**
- L'element rota 360 graus:
  - **`from`**: Rotació inicial de 0 graus.
  - **`to`**: Rotació final de 360 graus.
- La velocitat és constant gràcies a la funció de temporització **`linear`**.

---

#### **1.5. Animació de desplaçament amb estats intermedis**

```css
@keyframes move {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(100px);
  }
  100% {
    transform: translateX(0);
  }
}

.element {
  animation: move 3s ease-in-out infinite;
}
```

**Explicació:**
- El desplaçament segueix una trajectòria d'anada i tornada:
  - **0%**: Estat inicial.
  - **50%**: Desplaçat 100px cap a la dreta.
  - **100%**: Torna al punt inicial.
- Es repeteix infinitament amb una transició suau.

---

#### **1.6. Animació d'opacitat**

```css
@keyframes fade {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.5;
  }
}

.element {
  animation: fade 2s infinite alternate;
}
```

**Explicació:**
- Modifica l'opacitat de l'element:
  - **`from`**: Totalment opac (1).
  - **`to`**: Semiopac (0.5).
- Es repeteix infinitament alternant entre els estats inicial i final.

---

#### **1.7. Animació de mida**

```css
@keyframes resize {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.5);
  }
}

.element {
  animation: resize 2s ease-in-out infinite alternate;
}
```

**Explicació:**
- L'element augmenta i disminueix de mida:
  - **`from`**: Mida inicial.
  - **`to`**: Augmenta un 50% de mida.
- Es repeteix infinitament amb una transició suau.

---

### **2. Propietats clau d'animació**

| **Propietat**                | **Descripció**                                                                 |
|------------------------------|-------------------------------------------------------------------------------|
| **`animation-name`**         | Nom de l'animació definida amb `@keyframes`.                                  |
| **`animation-duration`**     | Durada de l'animació en segons o milisegons.                                   |
| **`animation-timing-function`** | Controla la velocitat de l'animació (ex. `ease`, `linear`, `ease-in-out`).        |
| **`animation-delay`**        | Retard abans que comence l'animació.                                           |
| **`animation-iteration-count`** | Nombre de vegades que es repeteix l'animació (ex. `infinite`, `1`, `3`).         |
| **`animation-direction`**    | Direcció de l'animació (ex. `normal`, `reverse`, `alternate`).                 |
| **`animation-fill-mode`**    | Controla com es comporta l'element abans/després de l'animació (`forwards`, `backwards`). |

---

### **3. Exercici Pràctic**

Crea les animacions següents utilitzant el codi HTML proporcionat i combina-ho amb **CSS Grid** per organitzar els elements.

#### **HTML inicial**
```html
<!DOCTYPE html>
<html lang="ca">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Animacions CSS amb CSS Grid</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="grid-container">
    <div class="animated-element" id="color-animation">Color</div>
    <div class="animated-element" id="background-animation">Fons</div>
    <div class="animated-element" id="rotate-animation">Rotació</div>
    <div class="animated-element" id="move-animation">Desplaçament</div>
    <div class="animated-element" id="fade-animation">Opacitat</div>
    <div class="animated-element" id="resize-animation">Mida</div>
  </div>
</body>
</html>
```

#### **CSS suggerit**
```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.animated-element {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  border: 1px solid black;
}

/* Aplica les animacions als elements */
#color-animation {
  animation: changeColor 2s infinite alternate;
}

#background-animation {
  animation: changeBackground 3s infinite;
}

#rotate-animation {
  animation: rotate 2s linear infinite;
}

#move-animation {
  animation: move 3s ease-in-out infinite;
}

#fade-animation {
  animation: fade 2s infinite alternate;
}

#resize-animation {
  animation: resize 2s ease-in-out infinite alternate;
}
```

---








### **4. Regles `@media` i `@supports`**

#### **4.1. `@media`: Estils adaptatius segons condicions del dispositiu**

La regla **`@media`** ens permet aplicar estils que només es faran efectius si es compleixen certes condicions del dispositiu, com la mida de la pantalla, l'orientació o la resolució. És essencial per a dissenys responsius.

---

##### **Exemple bàsic: Mida de pantalla**
```css
body {
  font-size: 16px;
}

@media (max-width: 768px) {
  body {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  body {
    font-size: 12px;
  }
}
```

**Explicació:**
- Per pantalles més grans de 768px, el text tindrà una mida de 16px.
- Quan la pantalla és de 768px o menys, la mida del text es redueix a 14px.
- Per pantalles molt xicotetes (480px o menys), el text es fa encara més menut (12px).

---

##### **Altres condicions útils de `@media`**

1. **Orientació del dispositiu**:
   ```css
   @media (orientation: landscape) {
     body {
       background-color: lightblue;
     }
   }

   @media (orientation: portrait) {
     body {
       background-color: lightgreen;
     }
   }
   ```
   - **`landscape`**: Mode horitzontal.
   - **`portrait`**: Mode vertical.

2. **Resolució del dispositiu**:
   ```css
   @media (min-resolution: 300dpi) {
     img {
       border: 5px solid red;
     }
   }
   ```
   - Aplica estils només en dispositius d'alta resolució.

---

##### **Exemple complet amb disseny responsiu**
Disseny d'una pàgina amb una estructura diferent segons la mida de pantalla.

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

@media (max-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}
```

**Explicació:**
- Per pantalles grans: 4 columnes.
- Per pantalles mitjanes (1024px o menys): 2 columnes.
- Per pantalles menudes (600px o menys): 1 columna.

---

#### **4.2. `@supports`: Detectar compatibilitat de funcionalitats CSS**

Amb **`@supports`**, podem aplicar estils només si el navegador suporta certes propietats CSS. Això és especialment útil quan s'utilitzen característiques modernes.

---

##### **Exemple bàsic**
```css
@supports (display: grid) {
  .contenidor {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}

@supports not (display: grid) {
  .contenidor {
    display: flex;
    flex-direction: column;
  }
}
```

**Explicació:**
- Si el navegador suporta **CSS Grid**, el contenidor s'organitza en dues columnes.
- Si no és compatible, es fa servir **Flexbox** com a alternativa.

---

##### **Combinació de condicions amb `@supports`**
1. **Múltiples condicions amb `and` i `or`**:
   ```css
   @supports (display: grid) and (display: flex) {
     .contenidor {
       display: grid;
     }
   }
   ```

2. **Condicions negades amb `not`**:
   ```css
   @supports not (position: sticky) {
     header {
       position: fixed;
     }
   }
   ```

---

##### **Exemple complet amb compatibilitat**
Dissenyem un botó amb efectes visuals només si el navegador suporta **gradients CSS**.

```css
button {
  background-color: #0078d7;
  color: white;
  padding: 10px 20px;
  border: none;
}

@supports (background: linear-gradient(to right, #0078d7, #00a1ff)) {
  button {
    background: linear-gradient(to right, #0078d7, #00a1ff);
  }
}
```

**Explicació:**
- Si el navegador suporta **`linear-gradient`**, el botó tindrà un fons degradat.
- Si no, es mantindrà el color blau predeterminat.

---

### **5. Exercici final amb combinació**

Combina **`@media`**, **`@supports`** i **`@keyframes`** per crear un disseny dinàmic:
1. Defineix estils responsius amb `@media` per adaptar els elements segons la mida de pantalla.
2. Utilitza `@supports` per assegurar que es mostren efectes avançats només si el navegador els suporta.
3. Afegix animacions amb `@keyframes` per millorar l'experiència visual.

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.animated-element {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  animation: fade 2s infinite alternate;
}

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
  .animated-element {
    animation: resize 2s infinite alternate;
  }
}

@supports (display: grid) and (background: linear-gradient(to right, red, blue)) {
  .grid-container {
    background: linear-gradient(to right, red, blue);
  }
}
```

Amb aquestes eines pots aconseguir dissenys adaptatius, dinàmics i compatibles amb diferents navegadors. Si necessites més exemples o ajustos, només digues-ho! 😊







A part de **`:hover`**, hi ha moltes propietats i pseudoelements en **CSS** que pots utilitzar per activar i controlar animacions. Algunes d'aquestes són molt útils per a crear interaccions dinàmiques i transicions fluides.

---

## **Pseudoelements i pseudoclasses per activar animacions**

### **1. :focus**
- Activa animacions quan un element rep el focus (exemple: camps de formularis o botons seleccionats).
```css
input:focus {
  outline: none;
  animation: focusEffect 0.5s ease-in-out;
}

@keyframes focusEffect {
  from {
    border-color: transparent;
  }
  to {
    border-color: blue;
  }
}
```

---

### **2. :active**
- Activa animacions quan un element està sent clicat.
```css
button:active {
  animation: clickEffect 0.3s ease-in-out;
}

@keyframes clickEffect {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.95);
  }
}
```

---

### **3. :checked**
- Ideal per a inputs com **checkboxes** o **radios**, permet activar animacions quan estan seleccionats.
```css
input[type="checkbox"]:checked + label {
  animation: checkEffect 0.5s ease-in-out;
}

@keyframes checkEffect {
  from {
    color: black;
  }
  to {
    color: green;
  }
}
```

---

### **4. :disabled**
- Aplica animacions a elements deshabilitats, com botons o inputs.
```css
button:disabled {
  animation: fadeOut 1s ease-in-out;
  cursor: not-allowed;
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.5;
  }
}
```

---

### **5. :nth-child()**
- Permet animar elements segons la seva posició dins d'un contenidor.
```css
div:nth-child(odd) {
  animation: oddEffect 2s infinite;
}

@keyframes oddEffect {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(10px);
  }
}
```

---

### **6. :before i :after**
- Amb aquests pseudoelements, pots afegir animacions a continguts generats.
```css
button::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background: red;
  animation: lineMove 1s infinite;
}

@keyframes lineMove {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}
```

---

## **Propietats CSS que poden activar animacions**

### **1. `animation`**
L'animació s'inicia automàticament quan la pàgina es carrega.

```css
.element {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-20px);
  }
}
```

---

### **2. `transition`**
Permet una animació suau quan una propietat canvia.

```css
.button {
  background-color: blue;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: green;
}
```

---

## **Eventualitats per a animacions basades en CSS**

### **1. Animacions en carregar la pàgina (`:root`)**
Activa una animació global per a tota la pàgina quan es carrega.

```css
:root {
  animation: fadeIn 2s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

---

### **2. Animacions en scroll**
No es controla directament amb pseudoclases, però combinant **`position: sticky`** o **`scroll-behavior`** amb JavaScript pots animar elements en fer scroll.

---

### **3. Interaccions amb JavaScript**
Si necessites més control, pots utilitzar **classes CSS** activades per **event listeners** en JavaScript:
```javascript
document.querySelector(".button").addEventListener("click", function () {
  this.classList.add("clicked");
});
```

```css
.button.clicked {
  animation: buttonClick 0.3s ease;
}

@keyframes buttonClick {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.9);
  }
}
```

---

Amb aquestes propietats i pseudoelements, pots aconseguir animacions molt diverses i dinàmiques sense necessitat de dependre completament de JavaScript. 😊








**Nota:** Si tens qualsevol dubte o necessites més explicacions, no dubtes a preguntar!


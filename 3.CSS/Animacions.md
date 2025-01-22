

# **Animacions amb CSS**


Les animacions en CSS permeten crear canvis visuals dinàmics i atractius sense la necessitat de JavaScript. Mitjançant la propietat **`animation`** i la regla **`@keyframes`**, podem definir i aplicar comportaments animats que canvien les propietats d'un element al llarg del temps.

---

## **Regla `@keyframes`**

La regla **`@keyframes`** defineix els **estats clau** d'una animació, especificant com canvien les propietats CSS d'un element en moments determinats. Cada estat clau és una instantània en el temps, que descriu un conjunt de propietats i els seus valors.

**Funcionament**
- **Definició del nom**: Cada animació definida amb `@keyframes` necessita un nom únic.
- **Estats clau (`from`, `to` o percentatges)**:
  - **`from`**: Representa l'estat inicial (equivalent al **0%**).
  - **`to`**: Representa l'estat final (equivalent al **100%**).
  - Percentatges (ex. **`0%`**, **`50%`**, **`100%`**) permeten afegir passos intermedis.

**Exemple:**
```css
@keyframes exemple {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```
- Al `@keyframes` aunterior, un element passa d'una opacitat de **0** (invisible) a **1** (totalment visible).

---

### **Propietat `animation`?

La propietat **`animation`** aplica les animacions definides amb `@keyframes` als elements seleccionats. 
És una propietat **abreujada** que encapsula múltiples paràmetres per controlar com es comporta l'animació.

**Sintaxi general:**
```css
animation: nom-animacio duracio funcio-temporitzacio retard iteracions direccio mode-final estat-joc;
```

#### **Exemple bàsic:**
```css
.element {
  animation: fadeIn 2s ease-in-out 1s infinite alternate;
}
```

- **`fadeIn`**: Nom de l'animació definida amb `@keyframes`.
- **`2s`**: Durada de l'animació.
- **`ease-in-out`**: La velocitat és suau al principi i al final.
- **`1s`**: Retard abans que comenci l'animació.
- **`infinite`**: L'animació es repeteix indefinidament.
- **`alternate`**: L'animació alterna entre els estats inicial i final.

---

### **Propietats de `animation`**

| **Propietat**                | **Descripció**                                                                 |
|------------------------------|-------------------------------------------------------------------------------|
| **`animation-name`**         | Nom de l'animació definida amb `@keyframes`.                                  |
| **`animation-@keyframesduration`**     | Temps que dura l'animació (en segons o mil·lisegons).                         |
| **`animation-timing-function`** | Defineix la velocitat de l'animació (`ease`, `linear`, `ease-in`, etc.).        |
| **`animation-delay`**        | Temps d'espera abans de començar l'animació.                                  |
| **`animation-iteration-count`** | Nombre de vegades que es repeteix l'animació (`1`, `infinite`, etc.).           |
| **`animation-direction`**    | Direcció de l'animació (`normal`, `reverse`, `alternate`, etc.).               |
| **`animation-fill-mode`**    | Defineix com es comporta l'element abans o després de l'animació (`forwards`, `backwards`, etc.). |
| **`animation-play-state`**   | Pausa o reprèn l'animació (`running`, `paused`).                              |

---

- **Com funcionen `@keyframes` i `animation` junts?**

1. **Definim l'animació amb `@keyframes`:**
   ```css
   @keyframes move {
     from {
       transform: translateX(0);
     }
     to {
       transform: translateX(100px);
     }
   }
   ```

2. **Apliquem l'animació a un element amb `animation`:**
   ```css
   .element {
     animation: move 3s ease-in-out infinite alternate;
   }
   ```

- L'element es mou 100px cap a la dreta en **3 segons**, amb una transició suau, alternant entre els estats inicial i final, i es repeteix infinitament.

---



## Exemples d'animació

### **1.- Animació de desplaçament**: `move`
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

- **`from`**: L'estat inicial sense desplaçament.
- **`to`**: L'estat final desplaçat 100px cap a la dreta.
- La classe `.element` aplica l'animació amb les propietats següents:
  - **Duració**: 2 segons.
  - **Funció de temporització**: "ease-in-out".
  - **Repetició**: Infinitament.
  - **Alterna** entre els estats inicial i final.

---

### **2. Animació de canvi de color**: `changeColor`



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

- Canvia el color del text de roig a blau:
  - **`from`**: Color inicial roig.
  - **`to`**: Color final blau.
- L'animació es repeteix infinitament i alterna entre els dos colors.

---

### **3. Animació de canvi de color de fons**: `changeBackground`

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

- Aquesta animació canvia el color de fons seguint estos passos:
  - **0%**: Color inicial roig.
  - **50%**: Color intermedi groc.
  - **100%**: Color final blau.
- Es repeteix cada 3 segons de forma infinita.

---

### **4. Animació de rotació**: `rotate`

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

- L'element rota 360 graus:
  - **`from`**: Rotació inicial de 0 graus.
  - **`to`**: Rotació final de 360 graus.
- La velocitat és constant gràcies a la funció de temporització **`linear`**.

---

### **5. Animació de desplaçament amb estats intermedis**: `move`

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

- El desplaçament segueix una trajectòria d'anada i tornada:
  - **0%**: Estat inicial.
  - **50%**: Desplaçat 100px cap a la dreta.
  - **100%**: Torna al punt inicial.
- Es repeteix infinitament amb una transició suau.

---

### **6. Animació d'opacitat** `fade`

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

- Modifica l'opacitat de l'element:
  - **`from`**: Totalment opac (1).
  - **`to`**: Semiopac (0.5).
- Es repeteix infinitament alternant entre els estats inicial i final.

---

### **7. Animació de mida**: `resize`

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

- L'element augmenta i disminueix de mida:
  - **`from`**: Mida inicial.
  - **`to`**: Augmenta un 50% de mida.
- Es repeteix infinitament amb una transició suau.

---













## **4. Regles `@media` i `@supports`**

### **`@media`: Estils adaptatius segons condicions del dispositiu**

La regla **`@media`** ens permet aplicar estils que només es faran efectius si es compleixen certes condicions del dispositiu, com la mida de la pantalla, l'orientació o la resolució. És essencial per a dissenys responsius.

---

**Exemple bàsic: Mida de pantalla**
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


- Per pantalles més grans de 768px, el text tindrà una mida de 16px.
- Quan la pantalla és de 768px o menys, la mida del text es redueix a 14px.
- Per pantalles molt xicotetes (480px o menys), el text es fa encara més menut (12px).

---

**Altres condicions útils de `@media`**

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

**Exemple complet amb disseny responsiu**
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


- Per pantalles grans: 4 columnes.
- Per pantalles mitjanes (1024px o menys): 2 columnes.
- Per pantalles menudes (600px o menys): 1 columna.

---













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


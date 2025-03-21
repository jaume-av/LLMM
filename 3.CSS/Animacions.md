# **Animacions amb CSS**

Les animacions en CSS ens permeten crear efectes visuals dinàmics i atractius sense necessitat de JavaScript. Amb la propietat **`animation`** i la regla **`@keyframes`**, podem definir i aplicar comportaments animats que alteren les propietats d'un element al llarg del temps.

---

## **Regla `@keyframes`**

La regla **`@keyframes`** defineix els **estats clau** d'una animació, especificant com canvien les propietats CSS en moments concrets. Cada estat clau representa un conjunt de propietats i els seus valors en un moment determinat.

### **Funcionament**
1. **Definició del nom**: Cada animació necessita un nom únic.
2. **Estats clau (`from`, `to` o percentatges)**:
   - **`from`**: Estat inicial (equivalent a **0%**).
   - **`to`**: Estat final (equivalent a **100%**).
   - Percentatges (**`0%`**, **`50%`**, **`100%`**) per definir passos intermedis.

### **Exemple:**
```css
/* Definim l'animació "exemple" */
@keyframes exemple {
  from { /* Estat inicial: invisible */
    opacity: 0;
  }
  to { /* Estat final: visible */
    opacity: 1;
  }
}
```

En l'exemple, l'element passa d'una opacitat de **0** (invisible) a **1** (completament visible).

---

## **Propietat `animation`**

La propietat **`animation`** aplica les animacions definides amb `@keyframes` als elements seleccionats.

### **Sintaxi:**
```css
animation: <nom-animacio> <duracio> <funcio-temporitzacio> <retard> <iteracions> <direccio> <mode-final> <estat-joc>;
```

### **Exemple explicat:**
```css
.element {
  animation: fadeIn 2s ease-in-out 1s infinite alternate;
  /* fadeIn: Nom de l'animació definida amb @keyframes */
  /* 2s: Durada de l'animació (2 segons) */
  /* ease-in-out: Transició suau al principi i al final */
  /* 1s: Retard abans de començar l'animació */
  /* infinite: L'animació es repeteix indefinidament */
  /* alternate: Alterna entre els estats inicial i final */
}
```

---

## **Propietats de `animation`**

### **Propietats individuals**

| **Propietat**                | **Descripció**                                                                 | **Valors possibles**                                                                                      |
|------------------------------|-------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| **`animation-name`**         | Nom de l'animació definida amb `@keyframes`.                                  | Nom de l'animació o `none` si no hi ha cap animació.                                                     |
| **`animation-duration`**     | Temps que dura l'animació (en segons o mil·lisegons).                         | Temps (ex. `2s`, `500ms`).                                                                               |
| **`animation-timing-function`** | Defineix la velocitat de l'animació.                                          | `ease` (per defecte), `linear`, `ease-in`, `ease-out`, `ease-in-out`, funcions personalitzades (`cubic-bezier`). |
| **`animation-delay`**        | Temps d'espera abans de començar l'animació.                                  | Temps (ex. `1s`, `250ms`).                                                                               |
| **`animation-iteration-count`** | Nombre de vegades que es repeteix l'animació.                                | Nombre enter (ex. `1`, `3`) o `infinite`.                                                               |
| **`animation-direction`**    | Direcció de l'animació.                                                       | `normal`, `reverse`, `alternate`, `alternate-reverse`.                                                  |
| **`animation-fill-mode`**    | Com es comporta l'element abans o després de l'animació.                      | `none` (per defecte), `forwards`, `backwards`, `both`.                                                  |
| **`animation-play-state`**   | Pausa o reprèn l'animació.                                                    | `running`, `paused`.                                                                                    |

---

### **Valors detallats**

1. **`animation-timing-function`:**
   - **`ease`**: Suau al principi i al final (per defecte).
   - **`linear`**: Velocitat constant.
   - **`ease-in`**: Comença suau i accelera.
   - **`ease-out`**: Comença ràpid i acaba suau.
   - **`ease-in-out`**: Suau al principi i al final.
   - **`cubic-bezier(x1, y1, x2, y2)`**: Funció personalitzada.

2. **`animation-direction`:**
   - **`normal`**: Executa l'animació des de l'inici fins al final.
   - **`reverse`**: Executa l'animació des del final fins a l'inici.
   - **`alternate`**: Alterna entre normal i reverse.
   - **`alternate-reverse`**: Alterna començant pel reverse.

3. **`animation-fill-mode`:**
   - **`none`**: L'animació no afecta l'element fora de la durada.
   - **`forwards`**: L'element manté l'estat final de l'animació.
   - **`backwards`**: L'element assumeix l'estat inicial durant el retard.
   - **`both`**: Combina `forwards` i `backwards`.

4. **`animation-iteration-count`:**
   - Qualsevol número enter positiu (ex. `1`, `3`).
   - **`infinite`**: L'animació es repeteix indefinidament.

---

## **Exemple complet:**

1. **Definim l'animació amb `@keyframes`:**
   ```css
   /* L'element es mou 100px cap a la dreta */
   @keyframes move {
     from { /* Estat inicial: posició original */
       transform: translateX(0);
     }
     to { /* Estat final: 100px a la dreta */
       transform: translateX(100px);
     }
   }
   ```

2. **Apliquem l'animació a un element:**
   ```css
   .element {
     animation: move 3s ease-in-out infinite alternate;
     /* move: Nom de l'animació definida amb @keyframes */
     /* 3s: Durada de l'animació (3 segons) */
     /* ease-in-out: Transició suau al principi i al final */
     /* infinite: L'animació es repeteix indefinidament */
     /* alternate: Alterna entre els estats inicial i final */
   }
   ```

En aquest exemple, l'element es mourà 100px cap a la dreta i després tornarà a la seva posició inicial, repetint-ho indefinidament amb una transició suau.

---

## Us conjunt de`@keyframes` i `animation`**

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

### **1.- Animació de desplaçament**: `moure` (move)

- Nom: `moure`.  
- Desplaça un element horitzontalment entre dos punts fixats.

```css
@keyframes moure {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100px);
  }
}

.element {
  animation: moure 2s ease-in-out infinite alternate;
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

### **2. Animació de canvi de color**: `canviColor` (changeColor)

- Nom: `canviColor`.  
- Alterna el color del text entre roig i blau.

```css
@keyframes canviColor {
  from {
    color: red;
  }
  to {
    color: blue;
  }
}

.element {
  animation: canviColor 2s infinite alternate;
}
```

- **`from`**: Color inicial roig.
- **`to`**: Color final blau.
- L'animació es repeteix infinitament i alterna entre els dos colors.

---

### **3. Animació de canvi de color de fons**: `canviFons` (changeBackground)

- Nom: `canviFons`.  
- Modifica el color de fons en tres fases: roig, groc i blau.

```css
@keyframes canviFons {
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
  animation: canviFons 3s infinite;
}
```

- **0%**: Color inicial roig.
- **50%**: Color intermedi groc.
- **100%**: Color final blau.
- Es repeteix cada 3 segons de forma infinita.

---

### **4. Animació de rotació**: `rotar` (rotate)

- Nom: `rotar`.  
- Fa girar un element completant una volta de 360 graus.

```css
@keyframes rotar {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

.element {
  animation: rotar 2s linear infinite;
}
```

- **`from`**: Rotació inicial de 0 graus.
- **`to`**: Rotació final de 360 graus.
- La velocitat és constant gràcies a la funció de temporització **`linear`**.

---

### **5. Animació de desplaçament amb estats intermedis**: `moure` (move)

- Nom: `moure`.  
- Desplaça un element 100px cap a la dreta amb un estat intermedi de tornada.

```css
@keyframes moure {
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
  animation: moure 3s ease-in-out infinite;
}
```

- **0%**: Estat inicial.
- **50%**: Desplaçat 100px cap a la dreta.
- **100%**: Torna al punt inicial.
- Es repeteix infinitament amb una transició suau.

---

### **6. Animació d'opacitat**: `fondre` (fade)

- Nom: `fondre`.  
- Altera l'opacitat d'un element entre totalment visible i semiopac.

```css
@keyframes fondre {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.5;
  }
}

.element {
  animation: fondre 2s infinite alternate;
}
```

- **`from`**: Totalment opac (1).
- **`to`**: Semiopac (0.5).
- Es repeteix infinitament alternant entre els estats inicial i final.

---

### **7. Animació de mida**: `redimensionar` (resize)

- Nom: `redimensionar`.  
- Augmenta la mida d'un element fins a un 50% més gran i torna al seu estat inicial.

```css
@keyframes redimensionar {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.5);
  }
}

.element {
  animation: redimensionar 2s ease-in-out infinite alternate;
}
```

- **`from`**: Mida inicial.
- **`to`**: Augmenta un 50% de mida.
- Es repeteix infinitament amb una transició suau.

---




## **. Regles `@media` i `@supports`**

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




## Animacions amb pseudoclases, pseudoelements i propietats CSS

Les **pseudoclases** i **pseudoelements** en **CSS** són molt útils per activar animacions i millorar la interactivitat dels elements de la pàgina. Algunes, com **`:hover`**, són bàsiques per a interaccions dinàmiques, mentre que altres, com **`:nth-child()`**, permeten efectes més avançats.

---

### **Exemple genèric d'ús**

Les pseudoclases es combinen amb les **propietats CSS** per definir animacions senzilles i fluides:

```css
.element:hover {
  animation: exampleEffect 0.5s ease-in-out;
}

@keyframes exampleEffect {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}
```

En aquest exemple:
- **`:hover`** activa l'animació quan el ratolí passa per damunt de l'element.
- L'animació augmenta lleugerament la mida de l'element.

---

### **Taula resum de propietats i pseudoclases**

| **Propietat/Pseudoclasse** | **Descripció**                                                                 | **Exemple d'ús**                                           |
|----------------------------|-------------------------------------------------------------------------------|-----------------------------------------------------------|
| `:hover`                   | Activa animacions quan el ratolí passa per damunt de l'element.               | Canviar el color o escalar un element.                   |
| `:focus`                   | Activa animacions quan un element rep el focus (inputs o botons).             | Ressaltar el contorn d’un input seleccionat.             |
| `:active`                  | Activa animacions quan un element està sent clicat.                          | Reduir la mida d’un botó temporalment.                   |
| `:checked`                 | Activa animacions per a checkboxes o radios seleccionats.                    | Canviar el color d’un text associat a un checkbox marcat.|
| `:disabled`                | Aplica animacions a elements deshabilitats.                                  | Reduir l’opacitat d’un botó deshabilitat.                |
| `:nth-child()`             | Aplica animacions segons la posició de l’element dins del contenidor.         | Moure elements imparells lleugerament.                   |
| `:before` / `:after`       | Genera continguts animats abans o després d’un element.                      | Afegir una línia animada o decoració a botons.           |
| `animation`                | Defineix animacions completes que s’inicien automàticament.                  | Crear un efecte de rebot o desplaçament automàtic.       |
| `transition`               | Defineix transicions suaus entre canvis d’estil.                             | Canviar el color d’un botó en passar el ratolí.          |

---


### Exemple  d'ús d'animacions amb pseudoclases, pseudoelements i propietats CSS

Aquest exemple combina diverses **pseudoclases**, **pseudoelements** i **propietats CSS** per crear un botó interactiu amb animacions suaus.

#### **HTML**
```html
<button class="interactive-button">Clica'm</button>
```

#### **CSS**
```css
/* Estils inicials del botó */
.interactive-button {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: blue;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

/* Canvi de color en passar el ratolí */
.interactive-button:hover {
  background-color: darkblue;
  transform: scale(1.05);
}

/* Animació quan es clica */
.interactive-button:active {
  transform: scale(0.95);
  animation: clickEffect 0.3s ease-in-out;
}

/* Decoració animada abans del contingut */
.interactive-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  transform: scaleX(0);
  transform-origin: left;
  z-index: 0;
  transition: transform 0.3s ease-in-out;
}

/* Activar la decoració en passar el ratolí */
.interactive-button:hover::before {
  transform: scaleX(1);
}

/* Animació per canviar el color quan el botó està deshabilitat */
.interactive-button:disabled {
  background-color: gray;
  cursor: not-allowed;
  animation: fadeOut 0.5s ease-in-out;
}

/* Efecte clic */
@keyframes clickEffect {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.95);
  }
}

/* Efecte fade-out per a botons deshabilitats */
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

### **Explicació de les funcionalitats**

1. **Pseudoclases utilitzades**:
   - **`:hover`**: Canvia el color de fons i augmenta la mida lleugerament quan el ratolí passa pel botó.
   - **`:active`**: Redueix la mida del botó quan es clica.
   - **`:disabled`**: Canvia el color de fons i redueix l’opacitat quan el botó està deshabilitat.

2. **Pseudoelements**:
   - **`::before`**: Afegeix una decoració animada (un efecte de brillantor) al botó en passar el ratolí.

3. **Propietats CSS**:
   - **`transition`**: Suavitza els canvis d’estil (color de fons i mida).
   - **`animation`**: Aplica efectes definits a través de `@keyframes`, com el clic i la desactivació.

---


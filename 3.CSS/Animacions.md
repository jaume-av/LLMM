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

**Nota:** Si tens qualsevol dubte o necessites més explicacions, no dubtes a preguntar!


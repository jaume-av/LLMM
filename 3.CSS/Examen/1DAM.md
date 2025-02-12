

### **1.- Distribució amb Flexbox (1 punt)**  
Tenim un contenidor `.contenidor` amb tres elements dins. Completa el CSS perquè:  
1. Els elements s'alineen horitzontalment i es distribuisquen equitativament amb espai al voltant de cadascun.  
2. Els elements es mantinguen alineats en la part superior del contenidor.  

🔹 **HTML donat:**  


```html
<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox</title>
    <link rel="stylesheet" href="ex1.css">
</head>
<body>
    <div class="contenidor">
        <div class="element">1</div>
        <div class="element">2</div>
        <div class="element">3</div>
    </div>
</body>
</html>

```



🔹 **CSS incomplet:**  
```css
.contenidor {
    /* COMPLETA ACÍ */
}

.element {
    width: 100px;
    height: 100px;
    background-color: lightblue;
    text-align: center;
    line-height: 100px;
}
```
SOLUCIO:

```css
.contenidor {
    display: flex; /* 1️ Fa que els elements s'alineen horitzontalment */
    justify-content: space-around; /* 1️ Espai uniforme entre els elements */
    align-items: flex-start; /* 2️ Els elements es mantenen alineats en la part superior */
}
```





---

### **2.- CSS Grid i estructura de galeria (1 punt)**  
Tenim un contenidor `.grid` amb sis elements dins. Completa el CSS perquè:  
1. La quadrícula tinga **tres columnes i dues files**, però que les columnes tinguen amplades diferents: la primera un 50% de l’ample total, les altres dos un 25% cadascuna.  
2. Els elements estiguen separats per un espai de **10px** entre ells.  

🔹 **HTML donat:**  

```html
<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Grid</title>
    <link rel="stylesheet" href="ex2.css">
</head>
<body>
    <div class="grid">
        <div class="item">A</div>
        <div class="item">B</div>
        <div class="item">C</div>
        <div class="item">D</div>
        <div class="item">E</div>
        <div class="item">F</div>
    </div>
</body>
</html>
```


🔹 **CSS incomplet:**  
```css
.grid {
    /* COMPLETA ACÍ */
}

.item {
    background-color: lightcoral;
    text-align: center;
    padding: 20px;
    border: 1px solid black;
}
```


```css
.grid {
    display: grid; /* 1️ Activa CSS Grid per al contenidor */
    grid-template-columns: 50% 25% 25%; /* 1️ Defineix tres columnes amb les amplades indicades */
    grid-template-rows: repeat(2, 1fr); /* 1️ Defineix dues files de la mateixa mida */
    gap: 10px; /* 2️ Separa els elements amb un espai de 10px */
}

```

---

### **3.- Efecte de pulsació amb animació CSS (1 punt)**  
Crea una animació CSS perquè:  
1. Es cree una regla `pulsacio` que faça que l’element `.canvi-color` augmente i disminuïsca la seua mida lleugerament cada segon.  
2. L'animació siga infinita i suau.  

🔹 **CSS incomplet:**  
```css
.canvi-color {
    animation: pulsacio 1s infinite alternate ease-in-out;
}

/* COMPLETA ACÍ */
```
```css

@keyframes pulsacio {
    0% {
        transform: scale(1); /* 1️ L'element té la seua mida normal */
    }
    100% {
        transform: scale(1.1); /* 1️ L'element augmenta lleugerament la seua mida */
    }
}

.canvi-color {
    animation: pulsacio 1s infinite alternate ease-in-out; /* 2️ Animació infinita i suau */
}
```
---


### **HTML Base**



```html
<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercici CSS Bàsic</title>
    <link rel="stylesheet" type="text/css" href="estils.css">
</head>
<body>
    <header>
        <h1>Benvingut al meu lloc web</h1>
        <p>Aquesta és una introducció breu al contingut del lloc web.</p>
    </header>
    <main>
        <section>
            <h2>Secció 1</h2>
            <p>Aquest és un paràgraf dins de la primera secció.</p>
        </section>
        <section>
            <h2>Secció 2</h2>
            <div>
                <p>Aquest és un paràgraf dins d'un bloc.</p>
            </div>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 Nom de l'Alumne. Tots els drets reservats.</p>
    </footer>
</body>
</html>
```

---

## Exercicis**

### **Exercici 1: Estilitzar els Paràgrafs**
Dona un estil bàsic a tots els paràgrafs `<p>` del document:
- Color del text: blau.
- Mida de la lletra: 16px.
- Espaiat entre línies: 1.5.

---

### **Exercici 2: Estilitzar un Bloc amb Classe**
Afegeix un estil al `<div>` de la segona secció mitjançant una classe:
- Fons de color: blau clar (#f0f8ff).
- Vora: 1px sòlida de color gris (#ccc).
- Marge: 10px a dalt i a baix.
- Padding: 10px.

---

### **Exercici 3: Estilitzar un Element amb ID**
Estilitza el `<header>` del document utilitzant un ID:
- Fons de color: gris clar.
- Color del text: blau fosc.
- Text centrat.
- Padding: 20px.

---

### **Exercici 4: Estilitzar Títols amb Classe**
Aplica un estil als títols `<h2>` utilitzant una classe:
- Mida de lletra: 24px.
- Gruix de lletra: negreta (bold).
- Color del text: verd fosc.

---

### **Exercici 5: Selecció de Descendents**
Estilitza només els paràgrafs `<p>` que són descendents de `<section>`:
- Cursiva.
- Marges laterals: 20px.

---

### **Exercici 6: Afegir Fons i Dimensions al Cos**
Aplica un color de fons i ajusta l’amplada del document:
- Fons: gris molt clar (#fafafa).
- Amplada del cos: 80%.
- Centrat horitzontalment.

---

### **Exercici 7: Afegir Vores al Peu de Pàgina**
Dona estil al `<footer>` del document:
- Vora: 2px sòlida de color gris clar.
- Radi de les vores: 10px.
- Padding: 10px.
- Text centrat.

---

## **Solucions Parcials**

### **Solució Exercici 1**
Afegim els estils al fitxer CSS:
```css
p {
    color: blue;
    font-size: 16px;
    line-height: 1.5;
}
```

---

### **Solució Exercici 2**
Afegim una classe al `<div>` del segon bloc HTML:
```html
<div class="important-block">
```

Afegim els estils al fitxer CSS:
```css
.important-block {
    background-color: #f0f8ff;
    border: 1px solid #ccc;
    margin: 10px 0;
    padding: 10px;
}
```

---

### **Solució Exercici 3**
Afegim un ID al `<header>` del document:
```html
<header id="main-header">
```

Afegim els estils al fitxer CSS:
```css
#main-header {
    background-color: lightgray;
    color: darkblue;
    text-align: center;
    padding: 20px;
}
```

---

### **Solució Exercici 4**
Afegim una classe als `<h2>`:
```html
<h2 class="section-title">Secció 1</h2>
<h2 class="section-title">Secció 2</h2>
```

Afegim els estils al fitxer CSS:
```css
.section-title {
    font-size: 24px;
    font-weight: bold;
    color: darkgreen;
}
```

---

### **Solució Exercici 5**
Afegim els estils al fitxer CSS:
```css
section p {
    font-style: italic;
    margin-left: 20px;
}
```

---

### **Solució Exercici 6**
Afegim els estils al fitxer CSS:
```css
body {
    background-color: #fafafa;
    width: 80%;
    margin: 0 auto;
}
```

---

### **Solució Exercici 7**
Afegim una classe al `<footer>`:
```html
<footer class="footer-style">
```

Afegim els estils al fitxer CSS:
```css
.footer-style {
    border: 2px solid #ccc;
    border-radius: 10px;
    padding: 10px;
    text-align: center;
}
```

---

### **Fitxers Finals**

### **HTML Final**
```html
<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercici CSS Bàsic</title>
    <link rel="stylesheet" type="text/css" href="estils.css">
</head>
<body>
    <header id="main-header">
        <h1>Benvingut al meu lloc web</h1>
        <p>Aquesta és una introducció breu al contingut del lloc web.</p>
    </header>
    <main>
        <section>
            <h2 class="section-title">Secció 1</h2>
            <p>Aquest és un paràgraf dins de la primera secció.</p>
        </section>
        <section>
            <h2 class="section-title">Secció 2</h2>
            <div class="important-block">
                <p>Aquest és un paràgraf dins d'un bloc.</p>
            </div>
        </section>
    </main>
    <footer class="footer-style">
        <p>&copy; 2024 Nom de l'Alumne. Tots els drets reservats.</p>
    </footer>
</body>
</html>
```

### **CSS Final**
```css
/* Exercici 1 */
p {
    color: blue;
    font-size: 16px;
    line-height: 1.5;
}

/* Exercici 2 */
.important-block {
    background-color: #f0f8ff;
    border: 1px solid #ccc;
    margin: 10px 0;
    padding: 10px;
}

/* Exercici 3 */
#main-header {
    background-color: lightgray;
    color: darkblue;
    text-align: center;
    padding: 20px;
}

/* Exercici 4 */
.section-title {
    font-size: 24px;
    font-weight: bold;
    color: darkgreen;
}

/* Exercici 5 */
section p {
    font-style: italic;
    margin-left: 20px;
}

/* Exercici 6 */
body {
    background-color: #fafafa;
    width: 80%;
    margin: 0 auto;
}

/* Exercici 7 */
.footer-style {
    border: 2px solid #ccc;
    border-radius: 10px;
    padding: 10px;
    text-align: center;
}
```
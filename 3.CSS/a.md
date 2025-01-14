### Explicació detallada de **`grid-template-areas`**

La propietat **`grid-template-areas`** en **CSS Grid** permet assignar **noms semàntics** a diferents parts del grid, facilitant l'organització i la lectura del codi. Amb aquesta tècnica, podem definir una estructura de layout de manera clara i visual.

---

### **Com funciona?**

1. **Definir àrees del grid**:
   - Utilitzem **`grid-template-areas`** al **Grid Container** per especificar com es disposaran les diferents àrees de la graella.
   - Cada àrea rep un nom personalitzat, com ara `header`, `menu`, `main`, o `footer`.

2. **Assignar noms als Grid Items**:
   - Utilitzem la propietat **`grid-area`** als **Grid Items** per assignar-los als noms definits en `grid-template-areas`.

3. **Especificar dimensions**:
   - Amb **`grid-template-columns`** i **`grid-template-rows`**, definim les dimensions de les columnes i files.

---

### **Anàlisi de l'exemple**

#### **HTML:**
Aquest HTML conté quatre elements dins del **Grid Container**, cadascun amb una classe semàntica:
```html
<div class="container">
    <header class="header">Capçalera</header>
    <nav class="menu">Menú</nav>
    <main class="main">Contingut</main>
    <footer class="footer">Peu de pàgina</footer>
</div>
```

---

#### **CSS del Contenidor:**
```css
.container {
    display: grid;
    grid-template-areas:
        "header header header"
        "menu main main"
        "footer footer footer";
    grid-template-columns: 1fr 2fr; /* Primera columna: 1 fracció, Segona columna: 2 fraccions */
    grid-template-rows: auto 1fr auto; /* Primera i tercera fila automàtiques, segona fila flexible */
}
```

1. **`grid-template-areas`**:
   - Definim una estructura de layout:
     - La primera fila (`"header header header"`) conté només l'àrea `header`, que ocupa totes les columnes.
     - La segona fila (`"menu main main"`) té `menu` a la primera columna i `main` a les altres dues.
     - La tercera fila (`"footer footer footer"`) conté només l'àrea `footer`, que ocupa tot l'ample.

2. **`grid-template-columns`**:
   - Primera columna: Ocupa **1 fracció** de l'espai disponible.
   - Segona columna: Ocupa **2 fraccions** de l'espai disponible.

3. **`grid-template-rows`**:
   - Primera i tercera fila: Tenen una alçada automàtica que s'adapta al contingut.
   - Segona fila: Té una alçada flexible (`1fr`), ocupant l'espai restant.

---

#### **CSS dels Grid Items:**
Cada **Grid Item** s'assigna a una àrea definida:
```css
.header { grid-area: header; } /* Assignem l'element al nom d'àrea "header" */
.menu { grid-area: menu; }     /* Assignem l'element al nom d'àrea "menu" */
.main { grid-area: main; }     /* Assignem l'element al nom d'àrea "main" */
.footer { grid-area: footer; } /* Assignem l'element al nom d'àrea "footer" */
```

---

### **Visualització del Grid**

Amb aquestes configuracions, el layout es veu així:

```
    header   header   header
    menu     main     main
    footer   footer   footer
```

- **Fila 1**: `header` ocupa totes les columnes.
- **Fila 2**: 
  - `menu` ocupa la primera columna.
  - `main` ocupa les dues columnes restants.
- **Fila 3**: `footer` ocupa totes les columnes.

---

### **Per què utilitzar `grid-template-areas`?**

1. **Semàntica**:
   - Els noms d'àrees fan el codi més llegible i organitzat.

2. **Flexibilitat**:
   - És fàcil modificar l'estructura canviant només les definicions de `grid-template-areas`.

3. **Visualització**:
   - La configuració de layout és clara fins i tot en el codi CSS.

---


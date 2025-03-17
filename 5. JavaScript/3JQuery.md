







{: .text-center }
![alt text](imatges/jquery.png)
{:toc}


## 1. Introducció a jQuery

**jQuery** és una llibreria de **JavaScript** que facilita la manipulació del **DOM**, la gestió d'esdeveniments, els efectes visuals i les crides **AJAX**.  

El seu lema és:  
> *"Write less, do more"* (escriu menys, fes més).  

Amb jQuery, podem fer en poques línies de codi accions que en **JavaScript pur (Vanilla JS)** requeririen més esforç i més línies de codi.  

> **Nota:** Podem imaginar una **llibreria** com una **caixa d'eines** plena de funcions ja creades per altres desenvolupadors. En lloc d'escriure codi des de zero cada vegada que necessitem fer alguna cosa, podem utilitzar aquestes funcions per estalviar temps i esforç. **jQuery**, permet realitzar tasques complexes, com modificar el contingut d'una pàgina o gestionar esdeveniments, de manera **més senzilla i eficient**, ja que la llibreria ja inclou les funcions per fer-ho. 
---

### **Característiques de jQuery**  
- **Sintaxi senzilla** per manipular elements HTML.  
- **Facilita** la selecció i modificació del **DOM**.  
- **Simplifica** la gestió d’esdeveniments (clics, tecles, etc.).  
- **Inclou** efectes visuals i animacions.  
- **Permet** fer crides **AJAX** per interactuar amb el servidor sense recarregar la pàgina.  
- **Funciona** en quasi tots els navegadors, incloent-ne alguns antics.  

---

### AJAX
**AJAX  (Asynchronous JavaScript and XML)** és una tecnologia que permet actualitzar parts d'una pàgina web **sense necessitat de recarregar-la completament**. Això fa que les aplicacions web siguen més ràpides i dinàmiques, millorant l'experiència de l'usuari.  

- **Funcionament de Ajax**  
Quan fem una petició AJAX, la pàgina pot:  
- **Obtenir dades** del servidor (per exemple, carregar comentaris sense recarregar la web).  
- **Enviar informació** al servidor (com guardar dades d’un formulari sense perdre la navegació).  

Un exemple molt comú és quan escrivim en una barra de cerca i ens apareixen suggeriments sense haver d'enviar el formulari: això és AJAX en acció.  

- **AJAX i jQuery**  
Sense jQuery, fer peticions AJAX en **JavaScript pur** pot ser llarg i complicat. Amb jQuery, tenim mètodes simplificats que fan el procés més ràpid i intuïtiu:  
- **`$.get()`** i **`$.post()`** per obtenir o enviar informació.  
- **`$.ajax()`** per personalitzar completament la petició.  

*Amb AJAX, podem crear aplicacions web més dinàmiques i fluides, evitant recarregaments innecessaris.*




## 2. Instal·lació i Inicialització de Jquery

Hem d’agregar jQuery a la página web per a que estiga disponible per a ser utilitzat en el codi de JavaScript.
Podem agregar jQuery des d’un **CDN** extern (**Content Deliery Network**). Això ens permet utilitzar la versió més recent de jQuery sense necessitat de descarregar-la i mantenir-la al nostre servidor.

>Nota: Un CDN és un grup de servidors que distribueixen contingut a través d’Internet. Això permet que el contingut estiga disponible per a ser descarregat per molts usuaris al mateix temps.
[CDN](https://aws.amazon.com/es/what-is/cdn/)



Podem afegir jQuery a un projecte de dos maneres:  

- **1. Utilitzant un CDN (recomanat)**  
Afegim esta línia dins de `<head>` o abans del tancament de `</body>`:  
```html
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
```

- **2. Descarregant-lo manualment**  
Si preferim descarregar-lo, el podem trobar a [https://jquery.com/](https://jquery.com/) i incloure'l així:  
```html
<script src="js/jquery.min.js"></script>
```


Podem trovar les diferents versions de jQuery CDN a:
[https://releases.jquery.com/](https://releases.jquery.com/) 

---


### Esperar a que la pàgina estiga carregada** 

Després de carregar **jQuery** ens hem d’assegurar que la pàgina **estiga completament carregada abans de
començar a executar el codi**. Ho farem **envoltant** el codi jQuery dins d’una funció que es crida quan el
document està completament carregat, ho fem amb la funció: `$(document).ready()`

```js
$(document).ready(function() {
    console.log("El document està carregat!");

// Aci posem tot el nostre codi jQuery

});
```
**Alternativa en JavaScript pur** (sense jQuery):  
```js
document.addEventListener("DOMContentLoaded", function() {
    console.log("El document està carregat!");
});
```

---

## **3. Selecció d'elements (Selectors de jQuery)**  
jQuery utilitza una sintaxi similar a **CSS** per seleccionar elements HTML de la pàgina.  

```js
$(selector).acció();
```

Utilitzem el **$** per accedir a **jQuery**, seguit d'un **selector CSS** per identificar els elements sobre els quals
volem actuar, i finalment una acció que s'executarà sobre estos elements


### **Selectors bàsics**  
```js
$("#idElement");      // Selecciona un element per ID
$(".classeElement");  // Selecciona tots els elements amb una classe
$("p");              // Selecciona tots els elements <p>
```

### **Selectors avançats**  
```js
$("ul > li");       // Selecciona només els fills directes d'una llista <ul>
$("ul li");         // Selecciona tots els <li> dins de <ul>
$("[type='text']"); // Selecciona tots els <input> de tipus text
```

- **Exemples**

```js
$("p").hide(); // Amaga tots els elements <p>.
$(".test").show(); // Mostra tots els elements amb class="test".
$("#test").fadeIn(); // Mostra poc a poc l'element amb id="test".
$(":button").toggle(); // Per a tots els elements <button> o inputs amb type
button, alterna entre hide i show.
```



## **4. Manipulació del DOM**  

Quan treballem amb jQuery, una de les funcionalitats més útils és la capacitat de **modificar elements del DOM dinàmicament**. Podem canviar el contingut d’un element HTML, modificar els seus atributs o interactuar amb elements de formularis de manera senzilla.  

### **Modificar text i HTML**  
Amb jQuery, podem modificar el text i el contingut HTML d’un element fàcilment amb els mètodes `.text()` i `.html()`.  

- **`.text()`** → Modifica només el text d’un element, sense interpretar etiquetes HTML.  
- **`.html()`** → Modifica el contingut de l’element i interpreta etiquetes HTML.  

**Exemple**  
```html
<p id="miParagraf">Text original.</p>
<button id="canviarText">Canviar Text</button>
<button id="canviarHTML">Canviar HTML</button>

<script>
$(document).ready(function() {
    $("#canviarText").click(function() {
        $("#miParagraf").text("Este és el nou text!");  
    });

    $("#canviarHTML").click(function() {
        $("#miParagraf").html("<b>Este és el nou text en negreta!</b>");  
    });
});
</script>
```
*Quan premem el botó "Canviar Text", es reemplaça el text sense permetre etiquetes HTML. En canvi, si premem "Canviar HTML", el text s’actualitza amb format HTML.*  

---

### **Modificar atributs**  
Els atributs d’un element HTML, com `href`, `src` o `value`, també es poden modificar fàcilment amb jQuery utilitzant `.attr()` i `.val()`.  

- **`.attr("atribut", "valor")`** → Modifica el valor d’un atribut d’un element.  
- **`.val("valor")`** → Modifica el valor d’un camp d’entrada (`<input>`, `<textarea>`, etc.).  

**Exemple**  
```html
<a id="miEnllac" href="https://original.com">Visita la web</a>
<button id="modificarEnllac">Modificar Enllaç</button>

<input type="text" id="miInput" value="Valor inicial">
<button id="modificarInput">Modificar Input</button>

<script>
$(document).ready(function() {
    $("#modificarEnllac").click(function() {
        $("#miEnllac").attr("href", "https://example.com");  
        $("#miEnllac").text("Nou Enllaç");
    });

    $("#modificarInput").click(function() {
        $("#miInput").val("Nou valor dins de l'input");
    });
});
</script>
```
*Quan premem "Modificar Enllaç", el text de l’enllaç i la seua URL canvien. Quan premem "Modificar Input", es modifica el contingut del camp de text.*  

---

### **Resum `.text()`, `.html()`, `.attr()` i `.val()**  

| Funció | Ús principal | Exemple |
|--------|-------------|---------|
| `.text()` | Modificar només el text sense HTML | `$("#paragraf").text("Text nou");` |
| `.html()` | Modificar el text i interpretar HTML | `$("#paragraf").html("<b>Text en negreta</b>");` |
| `.attr()` | Modificar atributs d’un element | `$("#enllac").attr("href", "https://example.com");` |
| `.val()` | Modificar el valor d’un `<input>` o `<textarea>` | `$("#input").val("Nou valor");` |

---


### **Afegir elements al DOM amb jQuery**  

jQuery ens permet **afegir elements nous** a la pàgina de manera dinàmica. Per fer-ho, tenim diversos mètodes que ens ajuden a inserir contingut abans, després o dins d’un element existent.  

**Mètodes per afegir elements**  

- **`.append()`** → Afegeix un element **al final** de l’element seleccionat.  
  ```js
  $("p").append("<span>Adeu</span>"); 
  // Afegeix un <span> amb el text "Adeu" al final de cada <p>
  ```

- **`.prepend()`** → Afegeix un element **al principi** de l’element seleccionat.  
  ```js
  $("p").prepend("<span>Hola</span> ");
  // Afegeix un <span> amb el text "Hola" al principi de cada <p>
  ```

- **`.before()`** → Insereix un element **abans** de l’element seleccionat.  
  ```js
  $("p").before("<b>Salutació: </b>");
  // Afegeix un <b> amb el text "Salutació" abans de cada <p>
  ```

- **`.after()`** → Insereix un element **després** de l’element seleccionat.  
  ```js
  $("p").after("<br>");
  // Afegeix un salt de línia (<br>) després de tots els <p>
  ```

- **`.wrap()`** → Envolta cada element seleccionat amb un altre element HTML.  
  ```js
  $("p").wrap("<div class='container'></div>");
  // Envolta tots els <p> amb un <div> de classe "container"
  ```


### **Eliminar elements o atributs del DOM amb jQuery**  

Per **esborrar elements o buidar el seu contingut** de manera senzilla jQueyr ens proporciona diferents mètodes segons si volem eliminar només el contingut, l’element sencer o un atribut específic.  

**Mètodes per esborrar elements**  

- **`.empty()`** → Buida el contingut dels elements seleccionats, però **manté l’element en el DOM**.  
  ```js
  $("div").empty();  
  // Buida tots els elements <div>, eliminant el seu contingut intern
  ```

- **`.remove()`** → Elimina completament els elements seleccionats del **DOM** (tant l’element com el seu contingut).  
  ```js
  $("div").remove();  
  // Elimina completament tots els <div> de la pàgina
  ```

- **`.unwrap()`** → Elimina **el contenidor** d’un element, però manté el seu contingut.  
  ```html
  <div class="contenidor">
      <p>Contingut aquí</p>
  </div>
  ```
  ```js
  $("p").unwrap();  
  // Elimina el <div class="contenidor">, però deixa el <p> intacte
  ```

#### **Eliminar atributs d'un element**  

- **`.removeAttr()`** → Elimina un atribut d’un element seleccionat.  
  ```js
  $("a").removeAttr("href");  
  // Elimina l'atribut href de tots els enllaços <a>
  ```

---

## **4. Gestió d'Esdeveniments**  

Un **esdeveniment** és qualsevol acció que un usuari realitza en la pàgina web, com ara:

- Fer clic en un botó.
- Polzar una tecla dins d’un camp de text.
- Passar el ratolí per damunt d’un element.
- Enviar un formulari.

Amb jQuery, podem capturar aquests esdeveniments i executar una funció en resposta a ells.

Els mètodes com `.click()` o `.keypress()` ens permeten afegir directament un esdeveniment a un element específic.

### **Esdeveniments bàsics**  
- **`.click()`** → Detecta quan es fa **clic en un element** i executa una acció.  
  ```js
  $("#miBotó").click(function() {
      alert("Has fet clic!");
  });
  ```
*Quan l'usuari fa clic en el botó amb `id="miBotó"`, apareix una alerta.*  

---

- **`.keypress()`** → Detecta quan es prem **una tecla** dins d’un `<input>` o un altre element.  
  ```js
  $("#miInput").keypress(function(event) {
      console.log("Tecla premuda: " + event.key);
  });
  ```
*Cada volta que l’usuari prem una tecla dins del `<input>` amb `id="miInput"`, es mostra en la consola el nom de la tecla premuda.*  

---


### **Esdeveniments amb `.on()` (més eficient)**  


- **`.on()`** → Assigna un esdeveniment a un element i és especialment útil quan treballem amb elements creats dinàmicament.  

- **Sintaxi:**

```js
$(elementPare).on("esdeveniment", "elementFill", funció);
```

- **Exemple:**

  ```js
  $(document).on("click", "#miBotó", function() {
      alert("Botó clicat!");
  });
  ```
*Encara que el botó es genere dinàmicament després de carregar la pàgina, aquest codi capturarà el clic correctament.*

### Resum Esdeveniments:


| **Tipus d'Esdeveniment** | **Mètode jQuery** | **Descripció** |
|--------------------|------------------|----------------|
| **Esdeveniments de ratolí** | `.click()` | Detecta quan es fa clic en un element. |
|  | `.dblclick()` | Detecta quan es fa doble clic en un element. |
|  | `.mouseenter()` | Detecta quan el ratolí entra dins d’un element. |
|  | `.mouseleave()` | Detecta quan el ratolí ix d’un element. |
| **Esdeveniments de teclat** | `.keypress()` | Detecta quan es prem una tecla dins d’un `<input>`. |
|  | `.keydown()` | Detecta quan es prem qualsevol tecla (inclou Ctrl, Alt, etc.). |
|  | `.keyup()` | Detecta quan es deixa de polsar una tecla. |
| **Esdeveniments de formulari** | `.submit()` | Detecta quan s’envia un formulari. |
|  | `.focus()` | Detecta quan un `<input>` rep el focus. |
|  | `.blur()` | Detecta quan un `<input>` perd el focus. |
|  | `.change()` | Detecta quan el valor d’un `<input>`, `<select>` o `<textarea>` canvia. |
| **Esdeveniments de document i finestra** | `.ready()` | S'executa quan el document HTML ha carregat completament. |
|  | `.resize()` | Detecta quan la finestra del navegador canvia de mida. |
|  | `.scroll()` | Detecta quan l’usuari fa scroll dins d’un element o en la pàgina. |


Tots estos esdeveniments es poden gestionar directament amb el seu mètode (`.click()`, `.submit()`, etc.) o amb `.on()`.



---

## **5. Efectes i Animacions en jQuery**  

Els **efectes i animacions** ens permeten **mostrar, ocultar i modificar elements de manera dinàmica**, millorant la interacció amb la pàgina web. Amb jQuery, podem afegir transicions suaus sense necessitat de codi CSS avançat o JavaScript complex.  

---

### Estructura 

Els efectes en jQuery segueixen una estructura comuna:  

```js
$(selector).mètodeEfecte(durada, callback);
```

🔹 **`selector`** → L'element sobre el qual aplicarem l'efecte.  
🔹 **`mètodeEfecte`** → El tipus d’efecte (`show()`, `fadeIn()`, `slideUp()`, etc.).  
🔹 **`durada`** *(opcional)* → Temps en mil·lisegons (`1000` per a 1 segon) o valors com `"fast"` o `"slow"`.  
🔹 **`callback`** *(opcional)* → Una funció que s’executa quan acaba l'animació.  

---

**Per Exemple:**  
 

- **Mostrar un element:**  
  ```js
  $("#miElement").show(500);
  ```
  *L'element es farà visible en mig segon.*  

- **Ocultar un element:**  
  ```js
  $("#miElement").hide(500);
  ```
  *L'element desapareixerà gradualment en mig segon.*  

- **Fer aparéixer un element suaument:**  
  ```js
  $("#miElement").fadeIn(1000);
  ```
  *L’element anirà apareixent durant 1 segon.*  

- **Fer desaparéixer un element suaument:**  
  ```js
  $("#miElement").fadeOut(1000);
  ```
  
### **Mètodes d'Efectes i Animacions**  

| **Tipus d'Efecte** | **Mètode jQuery** | **Descripció** |
|--------------------|------------------|----------------|
| **Mostrar i Ocultar** | `.show()` | Mostra un element ocult. |
|  | `.hide()` | Oculta un element de la pàgina. |
|  | `.toggle()` | Alterna entre mostrar i ocultar un element. |
| **Efectes de Desaparició i Aparició** | `.fadeIn()` | Fa que un element aparega amb transició suau. |
|  | `.fadeOut()` | Fa que un element desaparega amb transició suau. |
|  | `.fadeToggle()` | Alterna entre `fadeIn()` i `fadeOut()`. |
|  | `.fadeTo()` | Ajusta l’opacitat d’un element. |
| **Efectes de Desplaçament** | `.slideDown()` | Mostra un element lliscant-lo cap avall. |
|  | `.slideUp()` | Oculta un element lliscant-lo cap amunt. |
|  | `.slideToggle()` | Alterna entre `slideDown()` i `slideUp()`. |
| **Animacions Personalitzades** | `.animate()` | Modifica propietats CSS amb transicions animades. |
| **Control d'Animacions** | `.stop()` | Deté l’animació en marxa. |
|  | `.finish()` | Deté l’animació i la completa immediatament. |

---

Tots aquests efectes es poden utilitzar amb **una duració opcional** i **una funció de callback** per executar accions quan finalitza l’animació.

---

## **6. AJAX amb jQuery**  

### **Petició GET**  
```js
$.get("dades.json", function(data) {
    console.log("Dades carregades:", data);
});
```

### **Petició POST**  
```js
$.post("servidor.php", { nom: "Jaume", edat: 30 }, function(resposta) {
    console.log("Resposta:", resposta);
});
```

---

## **9. Manipulació de CSS**  

Amb jQuery, podem modificar els **estils CSS** d'un element de manera **dinàmica** sense necessitat de canviar directament el codi CSS. Això ens permet canviar colors, mides, marges i altres propietats visualment en resposta a interaccions de l’usuari.

Hi ha dues maneres principals de modificar els estils en jQuery:

1. Modificar els estils directament amb `.css()`.
2. Afegir, eliminar o alternar classes CSS amb .`addClass()`, .`removeClass()` i `.toggleClass()`.

### **Modificar estils directament**  
```js
$("#miDiv").css("background-color", "blue");
```

### **Afegir i eliminar classes**  

Una altra manera més recomanada de modificar estils és **treballar amb classes CSS**, ja que permet separar la lògica de l'estil i mantindre el codi més net.  


- **`.addClass("classe")`** → Afegeix una classe a un element.  
- **`.removeClass("classe")`** → Elimina una classe d’un element.  
- **`.toggleClass("classe")`** → Alterna entre afegir i eliminar una classe.  

**Exemples**  

- **Afegir una classe CSS**  
  ```js
  $("#miDiv").addClass("classeNova");
  ```
  *Afegeix la classe `.classeNova` a `#miDiv`.*  

- **Eliminar una classe CSS**  
  ```js
  $("#miDiv").removeClass("classeAntiga");
  ```
*Elimina la classe `.classeAntiga` de `#miDiv`.*  

- **Alternar una classe CSS** *(activa/desactiva estils al fer clic, per exemple)*  
  ```js
  $("#miDiv").toggleClass("actiu");
  ```
  *Si `#miDiv` té la classe `actiu`, se li eliminarà; si no la té, se li afegirà.*  

-Este enfocament és ideal per canvis d'estils en resposta a esdeveniments, com quan un botó canvia d'estat:  
```js
$("#miBotó").click(function() {
    $("#miDiv").toggleClass("resaltat");
});
```
*Cada vegada que es fa clic en `#miBotó`, `#miDiv` alternarà la classe `.resaltat`.*  

---


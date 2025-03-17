







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
document està completament carregat, ho fem amb la funció. `$(document).ready()`

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

---

## **4. Manipulació del DOM**  

### **Modificar text i HTML**  
```js
$("#miParagraf").text("Nou text!");  // Modifica només el text
$("#miParagraf").html("<b>Nou text!</b>"); // Modifica amb HTML
```

### **Modificar atributs**  
```js
$("#miEnllac").attr("href", "https://example.com");
$("#miInput").val("Valor predefinit");
```

---

## **5. Afegir i Esborrar Elements**  

### **Afegir elements**  
```js
$("ul").append("<li>Nou Element</li>"); // Afegeix al final
$("ul").prepend("<li>Primer Element</li>"); // Afegeix al principi
```

### **Esborrar elements**  
```js
$("#miParagraf").remove(); // Elimina l'element
$("#contenidor").empty(); // Buida el contingut sense eliminar el contenidor
```

---

## **6. Gestió d'Esdeveniments**  

### **Esdeveniments bàsics**  
```js
$("#miBotó").click(function() {
    alert("Has fet clic!");
});
```

```js
$("#miInput").keypress(function(event) {
    console.log("Tecla premuda: " + event.key);
});
```

### **Esdeveniments amb `.on()` (més eficient)**  
```js
$(document).on("click", "#miBotó", function() {
    alert("Botó clicat!");
});
```

---

## **7. Efectes i Animacions**  

### **Mostrar i Ocultar**  
```js
$("#miElement").hide();  // Oculta l'element
$("#miElement").show();  // Mostra l'element
$("#miElement").toggle(); // Alterna entre visible i ocult
```

### **Efectes avançats**  
```js
$("#miElement").fadeOut(1000);  // Desapareix lentament (1 segon)
$("#miElement").slideDown(500); // Baixa amb animació (0.5 segons)
```

---

## **8. AJAX amb jQuery**  

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

### **Modificar estils directament**  
```js
$("#miDiv").css("background-color", "blue");
```

### **Afegir i eliminar classes**  
```js
$("#miDiv").addClass("classeNova");
$("#miDiv").removeClass("classeAntiga");
$("#miDiv").toggleClass("actiu"); // Alterna entre afegir i eliminar
```

---

## **10. Quan usar jQuery avui dia?**  
Tot i que **jQuery ha perdut popularitat**, encara pot ser útil en situacions com:  
- Projectes **heretats** que ja utilitzen jQuery.  
- Quan es necessita suport per navegadors antics.  
- Petits projectes sense necessitat de llibreries grans com **React o Vue**.  

**Alternativa moderna sense jQuery (JavaScript pur)**  
```js
document.querySelector("#miBotó").addEventListener("click", function() {
    alert("Has fet clic!");
});
```

---

## **Resum Final**  
| Funció | jQuery | Alternativa JavaScript Modern |
|--------|--------|------------------------------|
| Seleccionar un element | `$("#id")` | `document.querySelector("#id")` |
| Afegir contingut | `$("#id").html("<b>Hola</b>")` | `document.getElementById("id").innerHTML = "<b>Hola</b>";` |
| Canviar estil | `$("#id").css("color", "red")` | `document.getElementById("id").style.color = "red";` |
| Detectar clic | `$("#id").click(fn)` | `document.getElementById("id").addEventListener("click", fn);` |

---


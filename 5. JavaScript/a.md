## **9. Manipulació de CSS amb jQuery**  

Amb jQuery, podem modificar els **estils CSS** d'un element de manera dinàmica sense necessitat de canviar directament el codi CSS. Això ens permet **canviar colors, mides, marges i altres propietats visualment** en resposta a interaccions de l’usuari.  

Hi ha dues maneres principals de modificar els estils en jQuery:  
1. **Modificar els estils directament** amb `.css()`.  
2. **Afegir, eliminar o alternar classes CSS** amb `.addClass()`, `.removeClass()` i `.toggleClass()`.  

---

### **1️⃣ Modificar estils directament**  

El mètode `.css()` permet modificar qualsevol propietat CSS d’un element mitjançant jQuery.  

#### **Sintaxi**  
```js
$(selector).css("propietat-css", "valor");
```
📌 *On `propietat-css` és la propietat CSS que volem modificar i `valor` és el nou valor que li assignarem.*  

#### **Exemple**  
```js
$("#miDiv").css("background-color", "blue");
```
📌 *Aquest codi canvia el color de fons de `#miDiv` a blau.*  

🔹 També podem modificar **múltiples propietats CSS alhora** passant un objecte:  
```js
$("#miDiv").css({
    "color": "white",
    "font-size": "20px",
    "border": "2px solid black"
});
```
📌 *Això canvia el color del text a blanc, la mida de la lletra a 20 píxels i afegeix un contorn negre de 2 píxels.*  

---

### **2️⃣ Afegir, eliminar i alternar classes CSS**  

Una altra manera més recomanada de modificar estils és **treballar amb classes CSS**, ja que permet separar la lògica de l'estil i mantindre el codi més net.  

- **`.addClass("classe")`** → Afegeix una classe a un element.  
- **`.removeClass("classe")`** → Elimina una classe d’un element.  
- **`.toggleClass("classe")`** → Alterna entre afegir i eliminar una classe.  

#### **Exemples**  

- **Afegir una classe CSS**  
  ```js
  $("#miDiv").addClass("classeNova");
  ```
  📌 *Afegeix la classe `.classeNova` a `#miDiv`.*  

- **Eliminar una classe CSS**  
  ```js
  $("#miDiv").removeClass("classeAntiga");
  ```
  📌 *Elimina la classe `.classeAntiga` de `#miDiv`.*  

- **Alternar una classe CSS** *(activa/desactiva estils al fer clic, per exemple)*  
  ```js
  $("#miDiv").toggleClass("actiu");
  ```
  📌 *Si `#miDiv` té la classe `actiu`, se li eliminarà; si no la té, se li afegirà.*  

🔹 Aquest enfocament és ideal per canvis d'estils en resposta a esdeveniments, com quan un botó canvia d'estat:  
```js
$("#miBotó").click(function() {
    $("#miDiv").toggleClass("resaltat");
});
```
📌 *Cada vegada que es fa clic en `#miBotó`, `#miDiv` alternarà la classe `.resaltat`.*  

---

📌 **Conclusió**  
Modificar estils amb jQuery és molt senzill. En general:  
- Si volem **fer canvis puntuals**, podem utilitzar `.css()`.  
- Si volem **modificar estils de manera més organitzada**, és millor usar `.addClass()`, `.removeClass()` i `.toggleClass()`. 🚀
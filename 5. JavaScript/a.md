## **Gestió d'Esdeveniments en jQuery**  

Quan treballem amb pàgines web, és important poder reaccionar a les accions de l’usuari, com **clics, tecles premudes o enviament de formularis**. jQuery ens ofereix diversos mètodes per gestionar aquests esdeveniments de manera senzilla i eficient.  

---

### **Mètodes per gestionar esdeveniments**  

- **`.click()`** → Detecta quan es fa **clic en un element** i executa una acció.  
  ```js
  $("#miBotó").click(function() {
      alert("Has fet clic!");
  });
  ```
  📌 *Quan l'usuari fa clic en el botó amb `id="miBotó"`, apareix una alerta.*  

---

- **`.keypress()`** → Detecta quan es prem **una tecla** dins d’un `<input>` o un altre element.  
  ```js
  $("#miInput").keypress(function(event) {
      console.log("Tecla premuda: " + event.key);
  });
  ```
  📌 *Cada vegada que l’usuari prem una tecla dins del `<input>` amb `id="miInput"`, es mostra en la consola el nom de la tecla premuda.*  

---

- **`.on()`** → Assigna un esdeveniment a un element i és especialment útil quan treballem amb elements creats dinàmicament.  
  ```js
  $(document).on("click", "#miBotó", function() {
      alert("Botó clicat!");
  });
  ```
  📌 *Encara que el botó es genere dinàmicament després de carregar la pàgina, aquest codi capturarà el clic correctament.*  

---

### **Quan utilitzar `.on()` en lloc de `.click()` o `.keypress()`?**  

| Cas | Mètode recomanat |
|-----|-----------------|
| L'element ja existix en el HTML quan es carrega la pàgina | `.click()`, `.keypress()` |
| L'element es genera dinàmicament amb JavaScript o AJAX | `.on("event", "selector", function())` |

---

💡 *Amb aquests mètodes, podem fer que la nostra pàgina web siga més interactiva, reaccionant a les accions de l’usuari de manera eficient.* 🚀
**Introducció JQUERY – DOM - AJAX**

- **JQUERY**  
  [https://jquery.com/](https://jquery.com/)  
  jQuery és una llibreria de JavaScript molt popular, que simplifica la manipulació del DOM (Document Object Model) i la gestió d’esdeveniments (events) en pàgines web.  
  El lema de jQuery és *"write less, do more”* (escriu menys, fes més) i ens oferix una manera eficient de treballar amb JavaScript en el desenvolupament web.  

  Les seues principals característiques són:
  - És la llibreria JavaScript més utilitzada, amb una amplia adopció a nivell mundial.
  - Conté una sintaxi senzilla i funcions optimitzades, el que simplifica enormement la tasca de codificar en JS.
  - Facilita la selecció i manipulació d'elements del DOM.
  - Simplifica el maneig d'esdeveniments.
  - Ofereix una àmplia gamma d'efectes i animacions.
  - Proporciona compatibilitat amb Ajax per realitzar crides asíncrones al servidor.

  **Nota:** Per entendre el concepte de llibreria. Podriem dir que una llibreria és com una caixa d'eines plena de funcions que ja estan escrites per altres persones.  
  En comptes de començar des de zero cada vegada que necessitem fer alguna cosa, podem usar les funcions de la llibreria per fer-ho més fàcilment i ràpidament. Amb llibreries com jQuery, podem realitzar tasques complicades en la construcció de pàgines web de manera més senzilla i eficient, ja que ja tenen les funcions necessàries per fer-ho. És com tenir un conjunt d'eines que et faciliten la feina.

- **Funcions de jQuery**  
  De totes les funcions que ens ofereix jQuery per a re diverses tasques en el desenvolupament web. Algunes de les funcions més importants inclouen:
  - **Manipulació del DOM**: Per afegir, eliminar o modificar elements de la página web (document HTML) dinàmicament.
  - **Manipulació de CSS**: Per canviar estils CSS dels elements seleccionats, i per tant. L’aspecte de la web.
  - **Gestió d'esdeveniments**: Afegir o eliminar gestors d'esdeveniments com clics, desplaçaments, etc.
  - **Efectes i Animacions**: Per crear animacions i efectes visuals en els elements del document.
  - **AJAX**: Per realitzar crides asíncrones al servidor i actualitzar parts de la pàgina web sense necessitat de recarregar-la completament.
  - **Utilitats**: Per a diverses tasques com treballar amb arrays, objectes, etc.

  jQuery també inclou altres funcions avançades i pràctiques com l'animació, la manipulació d'esdeveniments, el tractament de formularis i la validació, entre altres, que fan que siga una eina valuosa per a qualsevol desenvolupador web.

---

- **AJAX**  
  AJAX, o *Asynchronous JavaScript and XML*, és una tecnologia utilitzada en desenvolupament web que permet als navegadors web realitzar crides asíncrones al servidor sense necessitat de recarregar completament la pàgina web. Això significa que es poden actualitzar les parts específiques de la pàgina web amb dades noves del servidor en segon pla, sense interrompre l'experiència de l'usuari.

  Les cridades AJAX impliquen enviar una petició HTTP al servidor des de la pàgina web, normalment a través de JavaScript. Aquesta petició pot ser:
  - per recuperar dades, com ara informació de la base de dades o contingut dinàmic.
  - per enviar dades al servidor, com ara formularis emplenats per l'usuari.  

  Un cop rebuda la resposta del servidor, JavaScript pot manipular el contingut de la pàgina per actualitzar-la amb les dades noves, tot sense necessitat de recarregar la pàgina completa.  

  jQuery facilita l'ús d'AJAX amb les seves funcions i mètodes simplificats. En lloc d'escriure el codi AJAX pur, que pot ser complicat i repetitiu, jQuery ofereix mètodes com `$.ajax()`, `$.get()`, i `$.post()` que simplifiquen la creació i gestió de cridades AJAX, amb només unes poques línies de codi, fent que siga més fàcil implementar funcionalitats com la càrrega dinàmica de contingut, l'enviament de dades de formulari, o l'actualització de la interfície d'usuari sense recarregar la pàgina completa.

---

- **Integració jQuery, DOM i AJAX**  
  La integració del DOM, AJAX i jQuery permet als desenvolupadors web crear aplicacions web dinàmiques i interactives amb facilitat i eficàcia.

  - **DOM (Document Object Model)**: Proporciona una representació estructurada d'un document HTML o XML com un arbre de nodes, permetent accedir i manipular el contingut, l'estil i la estructura d'una pàgina web mitjançant codi JavaScript. El DOM és la base que permet la interactivitat i la dinàmica en una pàgina web.
  - **AJAX (Asynchronous JavaScript and XML)**: És una tecnologia que permet fer crides asíncrones al servidor des de JavaScript sense necessitat de recarregar completament la pàgina web. Això permet actualitzar parts específiques de la pàgina amb dades noves del servidor en segon pla, oferint una experiència d'usuari més fluida i ràpida.

  La integració del **DOM**, **AJAX** i **jQuery** és comuna en el desenvolupament web modern. Per exemple:
  - **Manipulació del DOM amb jQuery**: jQuery facilita l'accés i la manipulació del DOM amb mètodes com `$(selector).html()`, `$(selector).text()`, `$(selector).attr()`, etc. Això permet als desenvolupadors canviar el contingut, l'estil i la estructura de la pàgina web de manera més senzilla i concisa.
  - **Ús d'AJAX amb jQuery**: jQuery simplifica la creació i gestió de crides AJAX amb mètodes com `$.ajax()`, `$.get()`, `$.post()`, etc. Això permet als desenvolupadors realitzar crides asíncrones al servidor i actualitzar parts específiques de la pàgina web sense necessitat de recarregar-la completament.
  - **Gestió d'esdeveniments amb jQuery**: jQuery facilita l'afegiment de gestors d'esdeveniments als elements del DOM amb mètodes com `$(selector).click()`, `$(selector).hover()`, `$(selector).on()`, etc. Això permet als desenvolupadors respondre a les accions de l'usuari de manera més senzilla i eficient.

---

En els últims anys, **jQuery** està experimentant una disminució en la seua popularitat com a resultat de l’evolució de les tecnologies web. Encara que segueix sent àmpliament utilitzat, la tendència actual és utilitzar tecnologies més modernes i frameworks *front-end* com **React, Vue.js i Angular**, així com l'ús de JavaScript modern *(ES6+)*.

---

Aquest és el text exactament com l'has proporcionat, sense modificacions en el contingut ni en l'estructura.
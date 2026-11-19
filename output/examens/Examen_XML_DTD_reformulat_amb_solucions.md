# Examen XML i DTD — 1r DAW

**Proposta reformulada amb solucions comentades · Total: 10 punts**

Nom i cognoms: ____________________________________

> Document de revisió per al professorat. La solució apareix després de cada exercici; cal retirar-la de la versió que es lliure a l’alumnat.

## Instruccions

- Escriu només les declaracions, fragments o correccions demanats. No copies els documents proporcionats.
- En les correccions, no modifiques la DTD ni relaxes els requisits, excepte quan s’indique expressament.
- S’accepten solucions equivalents que complisquen totes les condicions.

---

## Exercici 1. Test — 1,5 punts

**Deu preguntes. Correcta: +0,15; incorrecta: −0,05; en blanc: 0.**

### 1. Quina seqüència compleix aquest model?

```dtd
<!ELEMENT trajecte (origen, parada*, desti)>
```

a) origen, desti, parada  
b) origen, parada, parada, desti  
c) origen, parada  
d) parada, origen, desti

### 2. Amb aquesta DTD, com es classifica `<llista/>`?

```dtd
<!ELEMENT llista (item+)>
<!ELEMENT item (#PCDATA)>
```

a) No està ben format perquè està buit.  
b) És vàlid: `+` permet zero elements.  
c) Està ben format, però no és vàlid: falta almenys un `item`.  
d) No està ben format perquè no té declaració XML.

### 3. Quin fragment està ben format?

a) `<registre><!-- pendent --><entrada/></registre>`  
b) `<registre><entrada></registre></entrada>`  
c) `<registre data=2026><entrada/></registre>`  
d) `<registre><Entrada></entrada></registre>`

### 4. Què declara aquesta línia?

```dtd
<!ENTITY % estats "(pendent | en_proces | finalitzada)">
```

a) Una entitat general, referenciada amb `&estats;`.  
b) Un atribut de tipus `ENTITY`.  
c) Una entitat que només es pot usar en les dades XML.  
d) Una entitat de paràmetre, referenciada en la DTD amb `%estats;`.

### 5. Quina afirmació és correcta?

```xml
<!-- A -->
<codi>if (a &lt; b &amp;&amp; c &gt; d)</codi>
<!-- B -->
<codi><![CDATA[if (a < b && c > d)]]></codi>
```

a) Només A està ben format.  
b) Només B està ben format.  
c) Els dos estan ben formats i representen el mateix text.  
d) Cap dels dos està ben format.

### 6. Per què poden coexistir aquests dos elements `nom`?

```xml
<document xmlns:a="urn:alumnes" xmlns:c="urn:cursos">
    <a:nom>Aina</a:nom>
    <c:nom>Programació</c:nom>
</document>
```

a) Perquè contenen textos diferents.  
b) Perquè pertanyen a espais de noms diferents.  
c) Perquè els prefixos substitueixen la DTD.  
d) Perquè XML no diferencia els noms.

### 7. Quina afirmació descriu correctament aquests models?

```dtd
<!ELEMENT contingut ANY>
<!ELEMENT paragraf (#PCDATA | destacat)*>
<!ELEMENT destacat (#PCDATA)>
```

a) Els dos elements han d’estar buits.  
b) `paragraf` només admet text.  
c) `contingut` només admet elements `destacat`.  
d) `contingut` admet text i elements declarats; `paragraf`, text i elements `destacat`.

### 8. Quin text conté l’element `codi`?

```xml
<codi><![CDATA[&lt;]]></codi>
```

a) `<`  
b) `&lt;`  
c) Una cadena buida.  
d) El fragment no està ben format.

### 9. Quina afirmació diferencia `SYSTEM` i `PUBLIC` en una referència a DTD externa?

a) `SYSTEM` indica una ruta o URL; `PUBLIC` inclou un identificador públic i un identificador de sistema.  
b) `SYSTEM` només serveix per a DTD internes.  
c) `SYSTEM` valida elements i `PUBLIC`, atributs.  
d) Són dues paraules intercanviables amb la mateixa sintaxi.

### 10. Un XML usa `&empresa;`, declarada només en una DTD externa. Quin valor de `standalone` és coherent?

a) `"yes"`, perquè la referència apareix en l’XML.  
b) `"no"`, perquè el document depén d’una declaració externa.  
c) Qualsevol: només indica la codificació.  
d) No pot incloure `standalone`.

### Solució comentada de l’exercici 1

| Pregunta | Resposta | Comentari |
|---|---|---|
| 1 | b | L’ordre és obligatori; `parada*` permet zero o més parades entre origen i destí. |
| 2 | c | Un element buit pot estar ben format. El problema de validesa és que `item+` exigeix almenys un fill. |
| 3 | a | Els altres fragments tenen, respectivament, imbricació incorrecta, un valor d’atribut sense cometes i tancament amb majúscules diferents. |
| 4 | d | El símbol `%` identifica una entitat de paràmetre. La pregunta no demana inserir-ne la referència en una declaració interna. |
| 5 | c | Les entitats d’A produeixen els mateixos caràcters que el text literal de B. |
| 6 | b | Els noms locals coincideixen, però les URI dels espais de noms són diferents. |
| 7 | d | `ANY` no elimina l’obligació de declarar els elements utilitzats. El model mixt de `paragraf` només permet el fill `destacat`, a més de text. |
| 8 | b | Dins de CDATA no s’expandeixen les referències a entitats: es conserven els quatre caràcters `&lt;`. |
| 9 | a | La referència `PUBLIC` a una DTD externa incorpora també l’identificador de sistema. |
| 10 | b | `standalone="yes"` no és coherent amb aquesta dependència. La declaració `standalone` es pot ometre, però entre les opcions proposades la correcta és b. |

---

## Exercici 2. Diagnòstic i correcció mínima — 2,5 punts

Considera aquestes declaracions:

```dtd
<!ELEMENT incidencia (titol, descripcio, resolta?)>
<!ATTLIST incidencia
    categoria NMTOKEN #REQUIRED
    etiquetes NMTOKENS #IMPLIED
    detall CDATA #IMPLIED
    estat (oberta | tancada) "oberta"
    revisio (manual | automatica) #FIXED "manual">
<!ELEMENT titol (#PCDATA)>
<!ELEMENT descripcio (#PCDATA)>
<!ELEMENT resolta EMPTY>
```

**a) Indica si cada fragment respecta les declaracions. Per a cada error, escriu el canvi mínim. No copies els fragments. — 2 punts**

**A**

```xml
<incidencia categoria="xarxa" etiquetes="urgent intern">
    <titol>Sense connexió</titol>
    <descripcio>No hi ha accés a Internet.</descripcio>
</incidencia>
```

**B**

```xml
<incidencia categoria="error sistema" revisio="automatica"
            detall="Error en l’aplicació principal">
    <titol>Error d’inici</titol>
    <descripcio>L’aplicació no respon.</descripcio>
</incidencia>
```

**C**

```xml
<incidencia categoria="maquinari">
    <descripcio>Algunes tecles no funcionen.</descripcio>
    <titol>Teclat avariat</titol>
    <resolta>sí</resolta>
</incidencia>
```

**D**

```xml
<incidencia>
    <titol>Pantalla apagada</titol>
    <descripcio>El monitor no mostra cap imatge.</descripcio>
</incidencia>
```

**b) En D, quins valors s’apliquen a `estat` i `revisio` si es corregeix l’omissió de `categoria`? Per què `categoria` no es pot ometre? — 0,5 punts**

### Solució comentada de l’exercici 2

| Fragment | Correcte? | Error i correcció mínima possible |
|---|---|---|
| A | Sí | `categoria` és un token; `etiquetes` conté dos tokens separats per un espai; l’ordre dels fills és correcte. |
| B | No | `categoria="error sistema"` conté un espai: substituir-lo, per exemple, per `categoria="error_sistema"`. `revisio="automatica"` contradiu el valor fix: substituir-lo per `revisio="manual"` o ometre l’atribut. |
| C | No | Intercanviar `titol` i `descripcio`. Substituir `<resolta>sí</resolta>` per `<resolta/>`, perquè l’element és buit. |
| D | No | Afegir `categoria` amb un valor vàlid, per exemple `categoria="pantalla"`. |

**b)** S’apliquen `estat="oberta"` i `revisio="manual"`. El primer és un valor predeterminat; el segon és un valor fix que també s’aplica quan s’omet l’atribut. `categoria` és `#REQUIRED` i no té un valor que suplisca l’omissió.

**Criteri orientatiu:** A: 0,2; B: 0,7; C: 0,7; D: 0,4. En b: valors, 0,2; distinció entre predeterminat i fix, 0,15; obligatorietat de categoria, 0,15. No és un error que `detall`, de tipus CDATA, continga espais.

---

## Exercici 3. DTD interna i models de contingut — 2,5 punts

Una DTD interna ha de descriure un document de manteniment amb aquests requisits:

| Element | Contingut, en ordre |
|---|---|
| `part` | Una capçalera, una o més tasques i un resultat. |
| `capcalera` | Un centre i una data. |
| `tasca` | Una descripció i, opcionalment, una observació. |
| `resultat` | Un element `correcte` o un element `error`, però no els dos. |

- `part` i `tasca` tenen `estat` obligatori: `pendent`, `en_proces` o `finalitzada`.
- `tasca` té `tipus` obligatori: `preventiu` o `correctiu`.
- `&empresa;` ha de produir el text `Manteniment Delta`.

Ja estan declarats com a `(#PCDATA)` els elements `centre`, `data`, `descripcio`, `observacio`, `correcte` i `error`.

**a) Escriu només les quatre declaracions estructurals, els atributs indicats i l’entitat general. No utilitzes `ANY`. — 2 punts**

**b) Per al contingut de `tasca`, quin model compleix els requisits? Dona una seqüència de fills no buida que l’altre admeta indegudament. Pots respondre només amb noms d’elements. — 0,5 punts**

```text
A: (descripcio, observacio?)
B: (descripcio, observacio)*
```

### Solució comentada de l’exercici 3

**a)**

```dtd
<!ELEMENT part (capcalera, tasca+, resultat)>
<!ELEMENT capcalera (centre, data)>
<!ELEMENT tasca (descripcio, observacio?)>
<!ELEMENT resultat (correcte | error)>

<!ATTLIST part estat (pendent | en_proces | finalitzada) #REQUIRED>
<!ATTLIST tasca
    estat (pendent | en_proces | finalitzada) #REQUIRED
    tipus (preventiu | correctiu) #REQUIRED>

<!ENTITY empresa "Manteniment Delta">
```

- `tasca+` exigeix almenys una tasca i permet repetir-la.
- `observacio?` afecta només l’observació, no la descripció.
- `|` selecciona una alternativa en `resultat`.
- Es poden escriure els atributs en declaracions ATTLIST separades.
- L’entitat és general: es declara sense `%` i es referencia amb `&empresa;`.
- No es demana repetir les sis declaracions de text ja proporcionades.
- Com que es tracta d’una DTD interna, no s’ha de substituir l’enumeració per una referència a una entitat de paràmetre dins d’ATTLIST.

**b)** El model correcte és **A**. Un contraexemple admés per B és:

```text
descripcio, observacio, descripcio, observacio
```

B repeteix el grup complet i, per tant, permet més d’una descripció. També permet zero grups i exigeix una observació en cada grup present. No es demana escriure etiquetes XML ni contingut de text.

**Criteri orientatiu:** a: models estructurals, 1 punt; atributs, 0,75; entitat, 0,25. b: selecció d’A, 0,15; contraexemple vàlid i incompatible amb els requisits, 0,35.

---

## Exercici 4. Projectes: definició i coherència — 3,5 punts

Una empresa usa `empresa.dtd`. Ja estan declarats:

```dtd
<!ELEMENT empresa (empleats, projectes)>
<!ELEMENT empleats (empleat+)>
<!ELEMENT projectes (projecte+)>
<!ELEMENT nom (#PCDATA)>
<!ELEMENT correu (#PCDATA)>
<!ELEMENT telefon (#PCDATA)>
<!ELEMENT data_inici (#PCDATA)>
<!ELEMENT descripcio (#PCDATA)>
```

Falten les declaracions necessàries per complir aquests requisits:

| Element | Contingut, en ordre |
|---|---|
| `empleat` | Nom, correu i telèfon opcional. |
| `projecte` | Nom, data d’inici, descripció opcional i `urgent` buit opcional. |

| Atribut | Restricció |
|---|---|
| `empleat/@id` | Identificador únic obligatori. |
| `empleat/@perfil` | Obligatori: `programacio`, `disseny` o `analisi`. |
| `projecte/@codi` | Identificador únic obligatori. |
| `projecte/@responsable` | Referència obligatòria a un ID existent. |
| `projecte/@equip` | Una o més referències a IDs existents; atribut obligatori. |
| `projecte/@estat` | `planificat`, `actiu` o `finalitzat`; predeterminat: `planificat`. |

Aquest document és vàlid respecte de la DTD que has de completar:

```xml
<empresa>
    <empleats>
        <empleat id="E1" perfil="programacio">
            <nom>Ada</nom><correu>ada@empresa.test</correu>
        </empleat>
        <empleat id="E2" perfil="disseny">
            <nom>Pau</nom><correu>pau@empresa.test</correu>
        </empleat>
    </empleats>
    <projectes>
        <projecte codi="P1" responsable="E1" equip="E1 E2" estat="actiu">
            <nom>Gestor de tasques</nom>
            <data_inici>2026-11-10</data_inici>
            <urgent/>
        </projecte>
    </projectes>
</empresa>
```

**a) Escriu les declaracions dels elements `empleat`, `projecte` i `urgent`, i dels seus atributs. No declares entitats. — 1,75 punts**

**b) Escriu només: — 0,75 punts**

- La línia DOCTYPE que vincula aquest document amb `empresa.dtd`. **0,25 punts.**
- Un nou element `empleat`, amb ID `E4`, perfil `analisi`, nom `Mar` i correu `mar@empresa.test`, sense telèfon. **0,5 punts.**

**c) Es proposa afegir aquest projecte al document anterior. Té tres incompliments de la DTD. Escriu les tres correccions mínimes, sense copiar el fragment. — 0,75 punts**

```xml
<projecte codi="E1" responsable="E2" equip="E1 E3">
    <data_inici>2027-01-15</data_inici>
    <nom>Aplicació mòbil</nom>
</projecte>
```

Considera aquest apartat independent de b: els únics IDs previs són `E1`, `E2` i `P1`.

**d) Torna al document vàlid proporcionat, sense afegir els fragments de b o c. Si l’ID de l’empleat Ada canvia d’`E1` a `E7`, quins valors d’atribut del projecte cal actualitzar? — 0,25 punts**

### Solució comentada de l’exercici 4

**a)**

```dtd
<!ELEMENT empleat (nom, correu, telefon?)>
<!ATTLIST empleat
    id ID #REQUIRED
    perfil (programacio | disseny | analisi) #REQUIRED>

<!ELEMENT projecte (nom, data_inici, descripcio?, urgent?)>
<!ATTLIST projecte
    codi ID #REQUIRED
    responsable IDREF #REQUIRED
    equip IDREFS #REQUIRED
    estat (planificat | actiu | finalitzat) "planificat">

<!ELEMENT urgent EMPTY>
```

- Els valors de tipus ID han de ser únics en tot el document, encara que els atributs tinguen noms diferents.
- `IDREF` conté una referència; `IDREFS`, una o més referències separades per espais.
- No s’ha de declarar l’estat com a `#FIXED`: els altres valors enumerats han d’estar permesos.
- Les dues interrogacions fan independents les omissions de descripció i urgent.
- Per precisió tècnica, els requisits demanen referències a IDs existents. La DTD no restringeix per si mateixa el tipus d’element destinatari; aquesta limitació no es pregunta ni es puntua.

**b)**

```xml
<!DOCTYPE empresa SYSTEM "empresa.dtd">
```

```xml
<empleat id="E4" perfil="analisi">
    <nom>Mar</nom>
    <correu>mar@empresa.test</correu>
</empleat>
```

El DOCTYPE es col·locaria abans de l’element arrel. El nou empleat s’inseriria dins d’`empleats`; no cal copiar eixos contenidors. El telèfon és opcional i es pot ometre.

**c)** Una resposta suficient és:

1. `codi="E1"` → `codi="P2"`: E1 ja identifica un empleat; no pot tornar a usar-se com a ID d’un projecte.
2. `equip="E1 E3"` → `equip="E1 E2"`: E3 no existeix. També s’accepta eliminar només E3 i deixar `equip="E1"`.
3. Situar `nom` abans de `data_inici`: el model de contingut fixa aquest ordre.

Ometre `estat` és correcte: s’aplica `planificat`. També es poden ometre `descripcio` i `urgent`. No s’ha de penalitzar aquestes omissions.

**d)** Cal canviar els dos atributs del projecte que referencien E1:

```text
responsable="E1" → responsable="E7"
equip="E1 E2" → equip="E7 E2"
```

`codi="P1"` es conserva. Canviar només `responsable` deixaria una referència inexistent en `equip`.

**Criteri orientatiu:** a: models i element buit, 0,6; atributs d’empleat, 0,4; atributs de projecte, 0,75. b: DOCTYPE, 0,25; fragment XML, 0,5. c: 0,25 per correcció vàlida amb identificació de la causa. d: 0,125 per cada actualització.

---

## Notes per al professorat: abast i canvis

Aquest apartat tampoc forma part de la versió per a l’alumnat.

- Es mantenen els quatre contextos de l’examen original i la distribució 1,5 + 2,5 + 2,5 + 3,5 = 10 punts.
- Es redueix la construcció repetida de declaracions `(#PCDATA)` i la còpia de dades. Es conserva producció autònoma de declaracions DTD i d’un fragment XML.
- El test substitueix la pregunta d’ENTITY/ENTITIES i entitats externes no analitzades per interpretació literal de CDATA, practicada en els materials aportats.
- La comparació de models aplica els quantificadors i les agrupacions treballats en els exercicis d’elements. No exigeix teoria formal de llenguatges.
- El canvi d’ID aplica la coherència de referències treballada en Geografia, Pizzes, Cine i la pràctica de videojocs.
- NMTOKEN, NMTOKENS, #FIXED, entitats generals i de paràmetre, SYSTEM/PUBLIC i standalone es mantenen dels continguts de l’examen original i dels apunts consultats. Els fitxers d’exercicis aportats no documenten per si sols tots aquests continguts: convé mantindre’ls només si els apartats corresponents dels apunts s’han treballat a classe.
- No s’avaluen limitacions noves de les DTD, tipatge de dates, regles de negoci no expressades ni destinataris de referència restringits a un tipus d’element.
- L’augment de raonament és modest i deliberat: comparar dos models i seguir l’efecte d’un canvi d’identificador. No s’afegeix un altre exercici extens.
- La duració no està fixada: cal ajustar-la després d’una lectura i resolució pilot. Menys escriptura no implica necessàriament una reducció equivalent del temps de raonament.

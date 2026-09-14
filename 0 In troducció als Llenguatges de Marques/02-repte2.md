---
title: "Repte 2 — CSI: Quin llenguatge és?"
layout: default
parent: 0.- Introducció als Llenguatges de Marques
nav_order: 12
has_toc: true
---

## REPTE 2 — CSI: QUIN LLENGUATGE ÉS?
### CAIXA D'EINES — APRENDRE A LLEGIR MARQUES
Observa aquest fragment:

```xml

<alumne id="23">

    <nom>Marc</nom>

    <cicle>DAM</cicle>

</alumne>

```

#### Etiquetes
Indiquen l'inici i el final d'un element:

```xml

<alumne>        </alumne>

```

`<alumne>` és l'etiqueta d'obertura i `</alumne>` la de tancament.

#### Elements
Un element està format per les etiquetes i el seu contingut:

```xml

<nom>Marc</nom>

```

#### Atributs
Afigen informació a un element:

```xml

<alumne id="23">

```

`id` és l'atribut i `23` és el seu valor.

#### Estructura jeràrquica
Els elements poden estar dins d'altres elements:

```text

             alumne

            /      \

          nom      cicle

           |         |

          Marc       DAM

```

Aquesta organització en forma d'arbre és habitual en els llenguatges de marques.

---

### EL REPTE
A continuació tens **cinc fragments de codi**.

Investiga cada fragment i determina:

**LLENGUATGE → PISTES → FINALITAT → ÚS REAL**

Per identificar-lo, fixa't en les marques, etiquetes, atributs o paraules que apareixen al codi.

Pots utilitzar **cercadors, documentació, IA, l'editor de codi i el navegador** per investigar i provar els fragments.

---

### PROVA A
```text

# Projecte Gestió Acadèmica

## Tecnologies

- Java

- PostgreSQL

- Git

**Cicle:** DAM

```

---

### PROVA B
```html

<!DOCTYPE html>

<html lang="ca">

<head>

    <meta charset="UTF-8">

    <title>IES Benigasló</title>

</head>

<body>

    <h1>Cicles d'Informàtica</h1>

    <p>Oferta formativa del centre.</p>

</body>

</html>

```

---

### PROVA C
```xml

<centre>

    <cicle codi="DAM">

        <nom>Desenvolupament d'Aplicacions Multiplataforma</nom>

        <modul curs="1">

            <nom>Llenguatges de Marques</nom>

        </modul>

    </cicle>

</centre>

```

---

### PROVA D
```xml

<svg width="300" height="180"

     xmlns="http://www.w3.org/2000/svg">

    <rect x="20" y="20"

          width="260" height="140"

          fill="lightgray"/>

    <circle cx="80" cy="90"

            r="35"

            fill="orange"/>

    <text x="135" y="100">DAM</text>

</svg>

```

Guarda aquest fragment com `prova-d.svg` i obri'l amb el navegador per comprovar què genera.

---

### PROVA E
```xml

<math xmlns="http://www.w3.org/1998/Math/MathML">

    <msup>

        <mi>x</mi>

        <mn>2</mn>

    </msup>

</math>

```

---


Crea un únic:

### PANELL CSI DELS LLENGUATGES DE MARQUES
Divideix-lo en **cinc zones**, una per cada prova.

En cada zona ha d'aparéixer:

**1. LLENGUATGE**

Nom del llenguatge identificat.

**2. PISTES**

Dos o tres elements del codi que t'han permés identificar-lo.

**3. FINALITAT**

Per a què serveix, explicat breument.

**4. ÚS REAL**

Un exemple d'on podem trobar aquest llenguatge en la realitat.

Per exemple:

```text

┌──────────────────────────────┐

│ PROVA __                     │

│                              │

│ LLENGUATGE: _______________  │

│                              │

│ PISTES                       │

│ __________                   │

│ __________                   │

│                              │

│ FINALITAT                    │

│ ___________________________  │

│                              │

│ ÚS REAL                      │

│ ___________________________  │

└──────────────────────────────┘

```

Utilitza **fragments de codi, captures, fletxes, anotacions i paraules clau**. Evita les explicacions llargues.

Pots crear el panell amb **Canva, Genially, PowerPoint, Google Slides, LibreOffice Impress o una altra eina visual similar**.

---

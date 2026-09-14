---
title: "Repte 6 — Construeix amb marques"
layout: default
parent: 0.- Introducció als Llenguatges de Marques
nav_order: 16
has_toc: true
---

## REPTE 6 — CONSTRUEIX AMB MARQUES
### CAIXA D'EINES 6 — SVG
SVG significa **Scalable Vector Graphics**.

Permet descriure gràfics vectorials utilitzant marques.

Un document mínim pot ser:

```xml

<svg width="400"

     height="200"

     xmlns="http://www.w3.org/2000/svg">

</svg>

```

Podem dibuixar un rectangle:

```xml

<rect

    x="20"

    y="20"

    width="150"

    height="80"

    fill="orange"/>

```

Un cercle:

```xml

<circle

    cx="100"

    cy="100"

    r="40"

    fill="blue"/>

```

Una línia:

```xml

<line

    x1="20"

    y1="20"

    x2="200"

    y2="150"

    stroke="black"/>

```

I text:

```xml

<text

    x="100"

    y="100"

    font-size="24">

    DAM

</text>

```

Alguns atributs importants són:

| Atribut           | Funció             |

| ----------------- | ------------------ |

| `x`, `y`          | Posició            |

| `width`, `height` | Dimensions         |

| `cx`, `cy`        | Centre d'un cercle |

| `r`               | Radi               |

| `fill`            | Color interior     |

| `stroke`          | Contorn            |

| `font-size`       | Grandària del text |

---

### MINIEXPERIMENT
Crea:

`prova.svg`

Copia únicament l'estructura mínima i crea un cercle.

Obri'l amb el navegador.

Ara modifica:

`cx`

`r`

`fill`

No canvies tots els valors alhora.

**MODIFICA → GUARDA → ACTUALITZA → OBSERVA**

Comprova què controla cadascun.

---

### EL REPTE
Crea una **insígnia digital relacionada amb DAM, DAW o la informàtica**.

Ha d'incloure almenys:

* `<rect>`;

* `<circle>`;

* `<line>`;

* `<text>`;

* `<g>` per agrupar elements.

Ha de contindre:

**DAM/DAW + element relacionat amb informàtica + inicials o identificador**

El disseny ha de ser propi.

No es pot generar automàticament el SVG amb un editor gràfic.

### Producte
`insignia.svg`

Acompanya'l d'una breu explicació visual:

**ELEMENT → ETIQUETA → ATRIBUTS**

Per exemple:

`Cercle central → <circle> → cx, cy, r, fill`

---

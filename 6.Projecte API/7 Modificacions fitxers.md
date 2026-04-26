## Fitxer: `routes/ciutats.js`

```javascript
var express = require('express');
var router = express.Router();

var knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: './db/projecte.sqlite'
    },
    useNullAsDefault: true
});

router.get('/', function(req, res) {
    knex('CIUTAT')
        .join('PROVINCIA', 'CIUTAT.PROVINCIA_ID', 'PROVINCIA.ID')
        .select(
            'CIUTAT.ID',
            'CIUTAT.NOM',
            'CIUTAT.DESCRIPCIO',
            'CIUTAT.POBLACIO',
            'CIUTAT.IMATGE',
            'PROVINCIA.NOM as PROVINCIA_NOM'
        )
        .then(function(dades) {
            res.json(dades);
        });
});

router.post('/', function(req, res) {
    knex('CIUTAT')
        .insert({
            NOM: req.body.NOM,
            DESCRIPCIO: req.body.DESCRIPCIO,
            IMATGE: req.body.IMATGE,
            POBLACIO: req.body.POBLACIO,
            PROVINCIA_ID: req.body.PROVINCIA_ID
        })
        .then(function() {
            res.json({
                missatge: 'Ciutat creada correctament'
            });
        })
        .catch(function() {
            res.status(500).json({
                error: 'Error en la base de dades'
            });
        });
});

module.exports = router;
```

---

## Fitxer: `public/js/ciutats-vista.js`

```javascript
function vistaCiutats() {
    return `
        <section x-data="ciutatsApp()" x-init="carregarCiutats()">

            <h2>Llista de ciutats</h2>

            <p>
                <button onclick="mostrarNovaCiutat()">
                    Nova ciutat
                </button>
            </p>

            <table class="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nom</th>
                        <th>Descripció</th>
                        <th>Població</th>
                        <th>Província</th>
                        <th>Imatge</th>
                        <th>Accions</th>
                    </tr>
                </thead>

                <tbody>
                    <template x-for="ciutat in ciutats" :key="ciutat.ID">
                        <tr>
                            <td x-text="ciutat.ID"></td>
                            <td x-text="ciutat.NOM"></td>
                            <td x-text="ciutat.DESCRIPCIO"></td>
                            <td x-text="ciutat.POBLACIO"></td>
                            <td x-text="ciutat.PROVINCIA_NOM"></td>

                            <td>
                                <img
                                    :src="ciutat.IMATGE.startsWith('http')
                                        ? ciutat.IMATGE
                                        : 'images/ciutats/' + ciutat.IMATGE"
                                    width="100">
                            </td>

                            <td>
                                <button class="success">
                                    Modificar
                                </button>

                                <button class="error">
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>

        </section>
    `;
}

window.ciutatsApp = function () {
    return {
        ciutats: [],

        carregarCiutats() {
            fetch('/api/ciutats')
                .then(function (resposta) {
                    return resposta.json();
                })
                .then((dades) => {
                    this.ciutats = dades;
                });
        }
    };
};

function vistaNovaCiutat() {
    return `
        <section x-data="novaCiutatApp()">

            <h2>Nova ciutat</h2>

            <form @submit.prevent="afegirCiutat()">

                <label for="nom">Nom</label>
                <input id="nom"
                       type="text"
                       x-model="novaCiutat.NOM">

                <label for="descripcio">Descripció</label>
                <input id="descripcio"
                       type="text"
                       x-model="novaCiutat.DESCRIPCIO">

                <label for="poblacio">Població</label>
                <input id="poblacio"
                       type="number"
                       x-model="novaCiutat.POBLACIO">

                <label for="provincia">Província</label>
                <input id="provincia"
                       type="number"
                       x-model="novaCiutat.PROVINCIA_ID">

                <label for="imatge">Imatge</label>
                <input id="imatge"
                       type="text"
                       x-model="novaCiutat.IMATGE">

                <p>
                    <button type="submit">
                        Guardar ciutat
                    </button>

                    <button type="button"
                            class="warning"
                            onclick="mostrarCiutats()">
                        Cancel·lar
                    </button>
                </p>

            </form>

        </section>
    `;
}

window.novaCiutatApp = function () {
    return {
        novaCiutat: {
            NOM: '',
            DESCRIPCIO: '',
            IMATGE: '',
            POBLACIO: '',
            PROVINCIA_ID: ''
        },

        afegirCiutat() {
            fetch('/api/ciutats', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.novaCiutat)
            })
                .then(function (resposta) {
                    return resposta.json();
                })
                .then(function () {
                    mostrarCiutats();
                });
        }
    };
};
```

---






## Fitxer: `routes/paisos.js`

```javascript
var express = require('express');
var router = express.Router();

var knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: './db/projecte.sqlite'
    },
    useNullAsDefault: true
});

router.get('/', function(req, res) {
    knex('PAIS')
        .select(
            'ID',
            'NOM',
            'IMATGE'
        )
        .then(function(dades) {
            res.json(dades);
        });
});

router.post('/', function(req, res) {
    knex('PAIS')
        .insert({
            NOM: req.body.NOM,
            IMATGE: req.body.IMATGE
        })
        .then(function() {
            res.json({
                missatge: 'País creat correctament'
            });
        })
        .catch(function() {
            res.status(500).json({
                error: 'Error en la base de dades'
            });
        });
});

module.exports = router;
```


---

## Fitxer: `public/js/paisos-vista.js`

```javascript
function vistaPaisos() {
    return `
        <section x-data="paisosApp()" x-init="carregarPaisos()">

            <h2>Llista de països</h2>

            <p>
                <button onclick="mostrarNouPais()">
                    Nou país
                </button>
            </p>

            <table class="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nom</th>
                        <th>Imatge</th>
                        <th>Accions</th>
                    </tr>
                </thead>

                <tbody>
                    <template x-for="pais in paisos" :key="pais.ID">
                        <tr>
                            <td x-text="pais.ID"></td>

                            <td x-text="pais.NOM"></td>

                            <td>
                                <img
                                    :src="pais.IMATGE.startsWith('http')
                                        ? pais.IMATGE
                                        : 'images/paisos/' + pais.IMATGE"
                                    width="100">
                            </td>

                            <td>
                                <button class="success">
                                    Modificar
                                </button>

                                <button class="error">
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>

        </section>
    `;
}

window.paisosApp = function () {
    return {
        paisos: [],

        carregarPaisos() {
            fetch('/api/paisos')
                .then(function(resposta) {
                    return resposta.json();
                })
                .then((dades) => {
                    this.paisos = dades;
                });
        }
    };
};

function vistaNouPais() {
    return `
        <section x-data="nouPaisApp()">

            <h2>Nou país</h2>

            <form @submit.prevent="afegirPais()">

                <label for="nom">Nom</label>
                <input id="nom"
                       type="text"
                       x-model="nouPais.NOM">

                <label for="imatge">Imatge</label>
                <input id="imatge"
                       type="text"
                       x-model="nouPais.IMATGE">

                <p>
                    <button type="submit">
                        Guardar país
                    </button>

                    <button type="button"
                            class="warning"
                            onclick="mostrarPaisos()">
                        Cancel·lar
                    </button>
                </p>

            </form>

        </section>
    `;
}

window.nouPaisApp = function () {
    return {
        nouPais: {
            NOM: '',
            IMATGE: ''
        },

        afegirPais() {
            fetch('/api/paisos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.nouPais)
            })
                .then(function(resposta) {
                    return resposta.json();
                })
                .then(function() {
                    mostrarPaisos();
                });
        }
    };
};
```


## Fitxer: `routes/provincies.js`

```javascript id="8o3klp"
var express = require('express');
var router = express.Router();

var knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: './db/projecte.sqlite'
    },
    useNullAsDefault: true
});

router.get('/', function(req, res) {
    knex('PROVINCIA')
        .join('PAIS', 'PROVINCIA.PAIS_ID', 'PAIS.ID')
        .select(
            'PROVINCIA.ID',
            'PROVINCIA.NOM',
            'PROVINCIA.IMATGE',
            'PAIS.NOM as PAIS_NOM'
        )
        .then(function(dades) {
            res.json(dades);
        });
});

router.post('/', function(req, res) {
    knex('PROVINCIA')
        .insert({
            NOM: req.body.NOM,
            IMATGE: req.body.IMATGE,
            PAIS_ID: req.body.PAIS_ID
        })
        .then(function() {
            res.json({
                missatge: 'Província creada correctament'
            });
        })
        .catch(function() {
            res.status(500).json({
                error: 'Error en la base de dades'
            });
        });
});

module.exports = router;
```

---


---

## Fitxer: `public/js/provincies-vista.js`

```javascript id="v1u9fp"
function vistaProvincies() {
    return `
        <section x-data="provinciesApp()" x-init="carregarProvincies()">

            <h2>Llista de províncies</h2>

            <p>
                <button onclick="mostrarNovaProvincia()">
                    Nova província
                </button>
            </p>

            <table class="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nom</th>
                        <th>País</th>
                        <th>Imatge</th>
                        <th>Accions</th>
                    </tr>
                </thead>

                <tbody>
                    <template x-for="provincia in provincies" :key="provincia.ID">
                        <tr>
                            <td x-text="provincia.ID"></td>

                            <td x-text="provincia.NOM"></td>

                            <td x-text="provincia.PAIS_NOM"></td>

                            <td>
                                <img
                                    :src="provincia.IMATGE.startsWith('http')
                                        ? provincia.IMATGE
                                        : 'images/provincies/' + provincia.IMATGE"
                                    width="100">
                            </td>

                            <td>
                                <button class="success">
                                    Modificar
                                </button>

                                <button class="error">
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>

        </section>
    `;
}

window.provinciesApp = function () {
    return {
        provincies: [],

        carregarProvincies() {
            fetch('/api/provincies')
                .then(function(resposta) {
                    return resposta.json();
                })
                .then((dades) => {
                    this.provincies = dades;
                });
        }
    };
};

function vistaNovaProvincia() {
    return `
        <section x-data="novaProvinciaApp()">

            <h2>Nova província</h2>

            <form @submit.prevent="afegirProvincia()">

                <label for="nom">Nom</label>
                <input id="nom"
                       type="text"
                       x-model="novaProvincia.NOM">

                <label for="pais">País</label>
                <input id="pais"
                       type="number"
                       x-model="novaProvincia.PAIS_ID">

                <label for="imatge">Imatge</label>
                <input id="imatge"
                       type="text"
                       x-model="novaProvincia.IMATGE">

                <p>
                    <button type="submit">
                        Guardar província
                    </button>

                    <button type="button"
                            class="warning"
                            onclick="mostrarProvincies()">
                        Cancel·lar
                    </button>
                </p>

            </form>

        </section>
    `;
}

window.novaProvinciaApp = function () {
    return {
        novaProvincia: {
            NOM: '',
            PAIS_ID: '',
            IMATGE: ''
        },

        afegirProvincia() {
            fetch('/api/provincies', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.novaProvincia)
            })
                .then(function(resposta) {
                    return resposta.json();
                })
                .then(function() {
                    mostrarProvincies();
                });
        }
    };
};
```




## Fitxer: `public/js/spa.js`

```javascript id="r0m3ka"
function mostrarCiutats() {
    document.getElementById("spa").innerHTML = vistaCiutats();
    Alpine.initTree(document.getElementById("spa"));
}

function mostrarPaisos() {
    document.getElementById("spa").innerHTML = vistaPaisos();
    Alpine.initTree(document.getElementById("spa"));
}

function mostrarProvincies() {
    document.getElementById("spa").innerHTML = vistaProvincies();
    Alpine.initTree(document.getElementById("spa"));
}

function mostrarNovaCiutat() {
    document.getElementById("spa").innerHTML = vistaNovaCiutat();
    Alpine.initTree(document.getElementById("spa"));
}

function mostrarNouPais() {
    document.getElementById("spa").innerHTML = vistaNouPais();
    Alpine.initTree(document.getElementById("spa"));
}

function mostrarNovaProvincia() {
    document.getElementById("spa").innerHTML = vistaNovaProvincia();
    Alpine.initTree(document.getElementById("spa"));
}

window.onload = function () {
    mostrarCiutats();
};
```




## Fitxer: `public/index.html`

```html
<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <title>Projecte API</title>

    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/picnic/7.1.0/picnic.min.css">

    <link rel="stylesheet"
          href="stylesheets/estilsPersonalitzats.css">

    <script src="js/spa.js" defer></script>
    <script src="js/ciutats-vista.js" defer></script>
    <script src="js/paisos-vista.js" defer></script>
    <script src="js/provincies-vista.js" defer></script>

    <script defer
            src="https://cdnjs.cloudflare.com/ajax/libs/alpinejs/3.15.0/cdn.min.js">
    </script>
</head>

<body>

<main class="container">

    <h1>Aplicació Ciutats</h1>

    <div id="spa"></div>

    <hr>

    <div class="botons">
        <button onclick="mostrarCiutats()">
            Ciutats
        </button>

        <button class="success"
                onclick="mostrarPaisos()">
            Països
        </button>

        <button class="warning"
                onclick="mostrarProvincies()">
            Províncies
        </button>
    </div>

</main>

</body>
</html>
```
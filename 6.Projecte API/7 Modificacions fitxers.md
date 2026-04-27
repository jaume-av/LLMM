D’acord. Mantinc la mateixa estructura i només afegisc el POST i les vistes noves.

## `routes/ciutats.js`

```javascript
var express = require('express');
var router = express.Router();
const db = require('../db');

router.get('/', function(req, res) {
    db('CIUTAT')
        .join('PROVINCIA', 'CIUTAT.PROVINCIA_ID', '=', 'PROVINCIA.ID')
        .join('PAIS', 'PROVINCIA.PAIS_ID', '=', 'PAIS.ID')
        .select(
            'CIUTAT.ID',
            'CIUTAT.NOM',
            'CIUTAT.DESCRIPCIO',
            'CIUTAT.IMATGE',
            'CIUTAT.POBLACIO',
            'CIUTAT.PROVINCIA_ID',
            'PROVINCIA.NOM as PROVINCIA_NOM',
            'PAIS.NOM as PAIS_NOM'
        )
        .then(function(rows) {
            res.json(rows);
        })
        .catch(function(error) {
            res.status(500).json({ error: 'Error en la base de dades' });
        });
});

router.get('/:id', function(req, res) {
    db('CIUTAT')
        .join('PROVINCIA', 'CIUTAT.PROVINCIA_ID', '=', 'PROVINCIA.ID')
        .join('PAIS', 'PROVINCIA.PAIS_ID', '=', 'PAIS.ID')
        .select(
            'CIUTAT.ID',
            'CIUTAT.NOM',
            'CIUTAT.DESCRIPCIO',
            'CIUTAT.IMATGE',
            'CIUTAT.POBLACIO',
            'CIUTAT.PROVINCIA_ID',
            'PROVINCIA.NOM as PROVINCIA_NOM',
            'PAIS.NOM as PAIS_NOM'
        )
        .where('CIUTAT.ID', req.params.id)
        .first()
        .then(function(row) {
            if (!row) {
                res.status(404).json({ error: 'No trobat' });
            } else {
                res.json(row);
            }
        })
        .catch(function(error) {
            res.status(500).json({ error: 'Error en la base de dades' });
        });
});

router.post('/', function(req, res) {
    db('CIUTAT')
        .insert({
            NOM: req.body.NOM,
            DESCRIPCIO: req.body.DESCRIPCIO,
            IMATGE: req.body.IMATGE,
            POBLACIO: req.body.POBLACIO,
            PROVINCIA_ID: req.body.PROVINCIA_ID
        })
        .then(function(resultat) {
            res.json({ missatge: 'Ciutat creada correctament' });
        })
        .catch(function(error) {
            res.status(500).json({ error: 'Error en la base de dades' });
        });
});

module.exports = router;
```

## `routes/paisos.js`

```javascript
var express = require('express');
var router = express.Router();
const db = require('../db');

router.get('/', function(req, res) {
    db('PAIS')
        .select(
            'ID',
            'NOM'
        )
        .then(function(rows) {
            res.json(rows);
        })
        .catch(function(error) {
            res.status(500).json({ error: 'Error en la base de dades' });
        });
});

router.get('/:id', function(req, res) {
    db('PAIS')
        .where('ID', req.params.id)
        .first()
        .then(function(row) {
            if (!row) {
                res.status(404).json({ error: 'No trobat' });
            } else {
                res.json(row);
            }
        })
        .catch(function(error) {
            res.status(500).json({ error: 'Error en la base de dades' });
        });
});

router.post('/', function(req, res) {
    db('PAIS')
        .insert({
            NOM: req.body.NOM
        })
        .then(function(resultat) {
            res.json({ missatge: 'País creat correctament' });
        })
        .catch(function(error) {
            res.status(500).json({ error: 'Error en la base de dades' });
        });
});

module.exports = router;
```

## `routes/provincies.js`

```javascript
var express = require('express');
var router = express.Router();
const db = require('../db');

router.get('/', function(req, res) {
    db('PROVINCIA')
        .join('PAIS', 'PROVINCIA.PAIS_ID', '=', 'PAIS.ID')
        .select(
            'PROVINCIA.ID',
            'PROVINCIA.NOM',
            'PROVINCIA.PAIS_ID',
            'PAIS.NOM as PAIS_NOM'
        )
        .then(function(rows) {
            res.json(rows);
        })
        .catch(function(error) {
            res.status(500).json({ error: 'Error en la base de dades' });
        });
});

router.get('/:id', function(req, res) {
    db('PROVINCIA')
        .join('PAIS', 'PROVINCIA.PAIS_ID', '=', 'PAIS.ID')
        .select(
            'PROVINCIA.ID',
            'PROVINCIA.NOM',
            'PROVINCIA.PAIS_ID',
            'PAIS.NOM as PAIS_NOM'
        )
        .where('PROVINCIA.ID', req.params.id)
        .first()
        .then(function(row) {
            if (!row) {
                res.status(404).json({ error: 'No trobat' });
            } else {
                res.json(row);
            }
        })
        .catch(function(error) {
            res.status(500).json({ error: 'Error en la base de dades' });
        });
});

router.post('/', function(req, res) {
    db('PROVINCIA')
        .insert({
            NOM: req.body.NOM,
            PAIS_ID: req.body.PAIS_ID
        })
        .then(function(resultat) {
            res.json({ missatge: 'Província creada correctament' });
        })
        .catch(function(error) {
            res.status(500).json({ error: 'Error en la base de dades' });
        });
});

module.exports = router;
```

## `public/js/spa.js`

```javascript
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

## `public/js/ciutats-vista.js`

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
                                    :src="ciutat.IMATGE
                                        ? (ciutat.IMATGE.startsWith('http')
                                            ? ciutat.IMATGE
                                            : 'images/ciutats/' + ciutat.IMATGE)
                                        : 'images/ciutats/default.jpg'"
                                    width="100">
                            </td>

                            <td>
                                <button class="success">Modificar</button>
                                <button class="error">Eliminar</button>
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
                <input id="nom" type="text" x-model="novaCiutat.NOM">

                <label for="descripcio">Descripció</label>
                <input id="descripcio" type="text" x-model="novaCiutat.DESCRIPCIO">

                <label for="poblacio">Població</label>
                <input id="poblacio" type="number" x-model="novaCiutat.POBLACIO">

                <label for="provincia">Província</label>
                <input id="provincia" type="number" x-model="novaCiutat.PROVINCIA_ID">

                <label for="imatge">Imatge</label>
                <input id="imatge" type="text" x-model="novaCiutat.IMATGE">

                <p>
                    <button type="submit">Guardar ciutat</button>

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

## `public/js/paisos-vista.js`

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
                        <th>Accions</th>
                    </tr>
                </thead>

                <tbody>
                    <template x-for="pais in paisos" :key="pais.ID">
                        <tr>
                            <td x-text="pais.ID"></td>
                            <td x-text="pais.NOM"></td>
                            <td>
                                <button class="success">Modificar</button>
                                <button class="error">Eliminar</button>
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
                <input id="nom" type="text" x-model="nouPais.NOM">

                <p>
                    <button type="submit">Guardar país</button>

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
            NOM: ''
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

## `public/js/provincies-vista.js`

```javascript
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
                                <button class="success">Modificar</button>
                                <button class="error">Eliminar</button>
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
                <input id="nom" type="text" x-model="novaProvincia.NOM">

                <label for="pais">País</label>
                <input id="pais" type="number" x-model="novaProvincia.PAIS_ID">

                <p>
                    <button type="submit">Guardar província</button>

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
            PAIS_ID: ''
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



D’acord. Mantinc la mateixa estructura i només afegisc el POST i les vistes noves.

## `routes/ciutats.js`

```javascript
var express = require('express');
var router = express.Router();
const db = require('../db');

router.get('/', function(req, res) {
    db('CIUTAT')
        .join('PROVINCIA', 'CIUTAT.PROVINCIA_ID', '=', 'PROVINCIA.ID')
        .join('PAIS', 'PROVINCIA.PAIS_ID', '=', 'PAIS.ID')
        .select(
            'CIUTAT.ID',
            'CIUTAT.NOM',
            'CIUTAT.DESCRIPCIO',
            'CIUTAT.IMATGE',
            'CIUTAT.POBLACIO',
            'CIUTAT.PROVINCIA_ID',
            'PROVINCIA.NOM as PROVINCIA_NOM',
            'PAIS.NOM as PAIS_NOM'
        )
        .then(function(rows) {
            res.json(rows);
        })
        .catch(function(error) {
            res.status(500).json({ error: 'Error en la base de dades' });
        });
});

router.get('/:id', function(req, res) {
    db('CIUTAT')
        .join('PROVINCIA', 'CIUTAT.PROVINCIA_ID', '=', 'PROVINCIA.ID')
        .join('PAIS', 'PROVINCIA.PAIS_ID', '=', 'PAIS.ID')
        .select(
            'CIUTAT.ID',
            'CIUTAT.NOM',
            'CIUTAT.DESCRIPCIO',
            'CIUTAT.IMATGE',
            'CIUTAT.POBLACIO',
            'CIUTAT.PROVINCIA_ID',
            'PROVINCIA.NOM as PROVINCIA_NOM',
            'PAIS.NOM as PAIS_NOM'
        )
        .where('CIUTAT.ID', req.params.id)
        .first()
        .then(function(row) {
            if (!row) {
                res.status(404).json({ error: 'No trobat' });
            } else {
                res.json(row);
            }
        })
        .catch(function(error) {
            res.status(500).json({ error: 'Error en la base de dades' });
        });
});

router.post('/', function(req, res) {
    db('CIUTAT')
        .insert({
            NOM: req.body.NOM,
            DESCRIPCIO: req.body.DESCRIPCIO,
            IMATGE: req.body.IMATGE,
            POBLACIO: req.body.POBLACIO,
            PROVINCIA_ID: req.body.PROVINCIA_ID
        })
        .then(function(resultat) {
            res.json({ missatge: 'Ciutat creada correctament' });
        })
        .catch(function(error) {
            res.status(500).json({ error: 'Error en la base de dades' });
        });
});

module.exports = router;
```

## `routes/paisos.js`

```javascript
var express = require('express');
var router = express.Router();
const db = require('../db');

router.get('/', function(req, res) {
    db('PAIS')
        .select(
            'ID',
            'NOM'
        )
        .then(function(rows) {
            res.json(rows);
        })
        .catch(function(error) {
            res.status(500).json({ error: 'Error en la base de dades' });
        });
});

router.get('/:id', function(req, res) {
    db('PAIS')
        .where('ID', req.params.id)
        .first()
        .then(function(row) {
            if (!row) {
                res.status(404).json({ error: 'No trobat' });
            } else {
                res.json(row);
            }
        })
        .catch(function(error) {
            res.status(500).json({ error: 'Error en la base de dades' });
        });
});

router.post('/', function(req, res) {
    db('PAIS')
        .insert({
            NOM: req.body.NOM
        })
        .then(function(resultat) {
            res.json({ missatge: 'País creat correctament' });
        })
        .catch(function(error) {
            res.status(500).json({ error: 'Error en la base de dades' });
        });
});

module.exports = router;
```

## `routes/provincies.js`

```javascript
var express = require('express');
var router = express.Router();
const db = require('../db');

router.get('/', function(req, res) {
    db('PROVINCIA')
        .join('PAIS', 'PROVINCIA.PAIS_ID', '=', 'PAIS.ID')
        .select(
            'PROVINCIA.ID',
            'PROVINCIA.NOM',
            'PROVINCIA.PAIS_ID',
            'PAIS.NOM as PAIS_NOM'
        )
        .then(function(rows) {
            res.json(rows);
        })
        .catch(function(error) {
            res.status(500).json({ error: 'Error en la base de dades' });
        });
});

router.get('/:id', function(req, res) {
    db('PROVINCIA')
        .join('PAIS', 'PROVINCIA.PAIS_ID', '=', 'PAIS.ID')
        .select(
            'PROVINCIA.ID',
            'PROVINCIA.NOM',
            'PROVINCIA.PAIS_ID',
            'PAIS.NOM as PAIS_NOM'
        )
        .where('PROVINCIA.ID', req.params.id)
        .first()
        .then(function(row) {
            if (!row) {
                res.status(404).json({ error: 'No trobat' });
            } else {
                res.json(row);
            }
        })
        .catch(function(error) {
            res.status(500).json({ error: 'Error en la base de dades' });
        });
});

router.post('/', function(req, res) {
    db('PROVINCIA')
        .insert({
            NOM: req.body.NOM,
            PAIS_ID: req.body.PAIS_ID
        })
        .then(function(resultat) {
            res.json({ missatge: 'Província creada correctament' });
        })
        .catch(function(error) {
            res.status(500).json({ error: 'Error en la base de dades' });
        });
});

module.exports = router;
```

## `public/js/spa.js`

```javascript
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

## `public/js/ciutats-vista.js`

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
                                    :src="ciutat.IMATGE
                                        ? (ciutat.IMATGE.startsWith('http')
                                            ? ciutat.IMATGE
                                            : 'images/ciutats/' + ciutat.IMATGE)
                                        : 'images/ciutats/default.jpg'"
                                    width="100">
                            </td>

                            <td>
                                <button class="success">Modificar</button>
                                <button class="error">Eliminar</button>
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
                <input id="nom" type="text" x-model="novaCiutat.NOM">

                <label for="descripcio">Descripció</label>
                <input id="descripcio" type="text" x-model="novaCiutat.DESCRIPCIO">

                <label for="poblacio">Població</label>
                <input id="poblacio" type="number" x-model="novaCiutat.POBLACIO">

                <label for="provincia">Província</label>
                <input id="provincia" type="number" x-model="novaCiutat.PROVINCIA_ID">

                <label for="imatge">Imatge</label>
                <input id="imatge" type="text" x-model="novaCiutat.IMATGE">

                <p>
                    <button type="submit">Guardar ciutat</button>

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

## `public/js/paisos-vista.js`

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
                        <th>Accions</th>
                    </tr>
                </thead>

                <tbody>
                    <template x-for="pais in paisos" :key="pais.ID">
                        <tr>
                            <td x-text="pais.ID"></td>
                            <td x-text="pais.NOM"></td>
                            <td>
                                <button class="success">Modificar</button>
                                <button class="error">Eliminar</button>
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
                <input id="nom" type="text" x-model="nouPais.NOM">

                <p>
                    <button type="submit">Guardar país</button>

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
            NOM: ''
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

## `public/js/provincies-vista.js`

```javascript
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
                                <button class="success">Modificar</button>
                                <button class="error">Eliminar</button>
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
                <input id="nom" type="text" x-model="novaProvincia.NOM">

                <label for="pais">País</label>
                <input id="pais" type="number" x-model="novaProvincia.PAIS_ID">

                <p>
                    <button type="submit">Guardar província</button>

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
            PAIS_ID: ''
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

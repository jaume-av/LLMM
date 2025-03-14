// Seleccionem els elements principals
const inputTasca = document.getElementById('novaTasca');
const botoAfegir = document.getElementById('afegir');
const llistaTasques = document.getElementById('llistaTasques');

// Funció per afegir una nova tasca
function afegirTasca() {
    const text = inputTasca.value.trim(); // Eliminem espais en blanc

    if (text === "") return; // Evitem afegir tasques buides

    // Creem un nou element <li>
    const novaTasca = document.createElement('li');
    novaTasca.textContent = text;

    // Creem botó de completar
    const botoCompletar = document.createElement('button');
    botoCompletar.textContent = '✔';
    botoCompletar.onclick = function() {
        novaTasca.classList.toggle('completed'); // Marca/desmarca com a completada
    };

    // Creem botó d'eliminar
    const botoEliminar = document.createElement('button');
    botoEliminar.textContent = '🗑';
    botoEliminar.onclick = function() {
        llistaTasques.removeChild(novaTasca); // Eliminem la tasca
    };

    // Afegim els botons al <li>
    novaTasca.appendChild(botoCompletar);
    novaTasca.appendChild(botoEliminar);

    // Afegim la tasca a la llista
    llistaTasques.appendChild(novaTasca);

    // Buidem l'input
    inputTasca.value = "";
}

// Afegim esdeveniment al botó "Afegir"
botoAfegir.addEventListener('click', afegirTasca);

// També afegim la tasca si premem "Enter"
inputTasca.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        afegirTasca();
    }
});

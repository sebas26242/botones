console.log('Script.js cargado correctamente');

const destinos = [
    {
        nombre: "Isla de Ometepe",
        descripcion: "Una isla única formada por dos imponentes volcanes en medio del Gran Lago de Nicaragua.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Ometepe_Nicaragua.jpg/800px-Ometepe_Nicaragua.jpg",
        evento: "click_ometepe"
    },
    {
        nombre: "Granada e Isletas",
        descripcion: "Ciudad colonial vibrante con un archipiélago de 365 pequeñas islas de origen volcánico.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Granada_Nicaragua_Cathedral_2005.jpg/800px-Granada_Nicaragua_Cathedral_2005.jpg",
        evento: "click_granada"
    },
    {
        nombre: "Corn Islands",
        descripcion: "El paraíso caribeño de Nicaragua con aguas cristalinas color turquesa y arena blanca.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Little_Corn_Island.jpg/800px-Little_Corn_Island.jpg",
        evento: "click_corn_islands"
    },
    {
        nombre: "Cañón de Somoto",
        descripcion: "Una de las formaciones geológicas más antiguas de Centroamérica, ideal para el turismo de aventura.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ca%C3%B1on_de_Somoto.jpg/800px-Ca%C3%B1on_de_Somoto.jpg",
        evento: "click_somoto"
    }
];

let currentIndex = 0;

// Verificación de AdBlocker
function checkAdBlock() {
    if (typeof gtag === 'undefined' || !window.google_tag_manager) {
        const warning = document.getElementById('adblock-warning');
        if (warning) warning.style.display = 'block';
    }
}

function trackCustomEvent(eventName, category) {
    console.log('--- Evento GA4: ' + eventName + ' ---');
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, {
            'event_category': category,
            'event_label': 'Nicaragua Turística',
            'debug_mode': true
        });
    }
}

function actualizarUI() {
    console.log('Actualizando UI para el índice:', currentIndex);
    const destino = destinos[currentIndex];
    
    const name = document.getElementById('dest-name');
    const desc = document.getElementById('dest-desc');
    const img = document.getElementById('dest-img');
    const log = document.getElementById('log');

    if (name && desc && img) {
        name.innerText = destino.nombre;
        desc.innerText = destino.descripcion;
        img.src = destino.imagen;
        if (log) log.innerHTML = '📍 Viendo: <b>' + destino.nombre + '</b>';
    } else {
        console.error('No se encontraron los elementos de la UI');
    }
}

function mostrarSiguienteDestino() {
    currentIndex = (currentIndex + 1) % destinos.length;
    actualizarUI();
    trackCustomEvent(destinos[currentIndex].evento, 'Exploración de Destinos');
}

// Ejecución inmediata e inicio de comprobaciones
actualizarUI();
setTimeout(checkAdBlock, 2000);

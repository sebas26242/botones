console.log('Script.js cargado correctamente');

const destinos = [
    {
        nombre: "Cañón de Somoto",
        descripcion: "Un monumento nacional con paredes de roca de hasta 150 metros de altura y aguas frescas color turquesa.",
        imagen: "https://www.visitanicaragua.com/wp-content/uploads/2015/02/Ca%C3%B1on-de-Somoto-Madriz.jpg",
        evento: "click_somoto"
    },
    {
        nombre: "Isla de Ometepe",
        descripcion: "La isla más grande del mundo en un lago de agua dulce, formada por dos volcanes: Concepción y Maderas.",
        imagen: "https://www.renunciamosyviajamos.com/wp-content/uploads/2015/07/Moyogalpa-Isla-Ometepe-Renunciamos-y-viajamos1.jpg",
        evento: "click_ometepe"
    },
    {
        nombre: "Las Isletas de Granada",
        descripcion: "Un archipiélago de 365 pequeñas islas volcánicas en el Gran Lago de Nicaragua, famoso por su naturaleza y paseos en bote.",
        imagen: "https://nicadestino.com/wp-content/uploads/listing-uploads/logo/2022/01/Isletas-de-granada-2.jpg",
        evento: "click_isletas"
    },
    {
        nombre: "Volcán Masaya",
        descripcion: "Uno de los pocos lugares en el mundo donde puedes ver un lago de lava activa directamente desde el borde del cráter.",
        imagen: "https://www.visitcentroamerica.com/wp-content/uploads/2025/04/Masaya-Volcano-National-Park-Nicaragua-03.webp",
        evento: "click_masaya"
    },
    {
        nombre: "San Juan del Sur",
        descripcion: "La bahía más famosa de Nicaragua, conocida por su ambiente vibrante, sus playas de surf y el Cristo de la Misericordia.",
        imagen: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/2a/b7/4f/caption.jpg?w=1200&h=-1&s=1",
        evento: "click_sjds"
    },
    {
        nombre: "Corn Islands",
        descripcion: "Dos joyas en el Mar Caribe con playas de arena blanca, cocoteros y arrecifes de coral perfectos para el buceo.",
        imagen: "https://yemayalittlecorn.com/wp-content/uploads/2024/07/YEMAYA-Home-1-2-1-scaled.jpg",
        evento: "click_corn_islands"
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
    console.log('Actualizando UI para:', destinos[currentIndex].nombre);
    const destino = destinos[currentIndex];
    
    const name = document.getElementById('dest-name');
    const desc = document.getElementById('dest-desc');
    const img = document.getElementById('dest-img');
    const log = document.getElementById('log');

    if (name && desc && img) {
        // Efecto de parpadeo suave al cambiar
        img.style.opacity = '0.7';
        
        name.innerText = destino.nombre;
        desc.innerText = destino.descripcion;
        img.src = destino.imagen;
        
        img.onload = () => { img.style.opacity = '1'; };
        
        if (log) log.innerHTML = '📍 Viendo: <b>' + destino.nombre + '</b>';
    }
}

function mostrarSiguienteDestino() {
    currentIndex = (currentIndex + 1) % destinos.length;
    actualizarUI();
    trackCustomEvent(destinos[currentIndex].evento, 'Exploración de Destinos');
}

// Inicialización
window.onload = () => {
    actualizarUI();
    setTimeout(checkAdBlock, 2000);
};

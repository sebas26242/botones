const destinos = [
    {
        nombre: "Isla de Ometepe",
        descripcion: "Una isla única formada por dos imponentes volcanes en medio del Gran Lago de Nicaragua.",
        imagen: "https://images.unsplash.com/photo-1594910323315-998f4df6d501?auto=format&fit=crop&w=800&q=80",
        evento: "click_ometepe"
    },
    {
        nombre: "Granada e Isletas",
        descripcion: "Ciudad colonial vibrante con un archipiélago de 365 pequeñas islas de origen volcánico.",
        imagen: "https://images.unsplash.com/photo-1594910323067-96a9e8841456?auto=format&fit=crop&w=800&q=80",
        evento: "click_granada"
    },
    {
        nombre: "Corn Islands",
        descripcion: "El paraíso caribeño de Nicaragua con aguas cristalinas color turquesa y arena blanca.",
        imagen: "https://images.unsplash.com/photo-1591122180802-99527ec56588?auto=format&fit=crop&w=800&q=80",
        evento: "click_corn_islands"
    },
    {
        nombre: "Cañón de Somoto",
        descripcion: "Una de las formaciones geológicas más antiguas de Centroamérica, ideal para el turismo de aventura.",
        imagen: "https://images.unsplash.com/photo-1623940176829-f5383f982937?auto=format&fit=crop&w=800&q=80",
        evento: "click_somoto"
    }
];

let currentIndex = 0;

// Verificación de AdBlocker básica
window.addEventListener('load', () => {
    setTimeout(() => {
        if (typeof gtag === 'undefined' || !window.google_tag_manager) {
            const warning = document.getElementById('adblock-warning');
            if (warning) warning.style.display = 'block';
            console.warn('Google Tag Manager no detectado. ¿AdBlock activo?');
        }
    }, 2000);
});

function trackCustomEvent(eventName, category) {
    console.log('--- Enviando Evento a GA4 ---');
    console.log('Evento:', eventName);
    console.log('Categoría:', category);

    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, {
            'event_category': category,
            'event_label': 'Nicaragua Turística',
            'debug_mode': true
        });
        console.log('✅ Éxito: Datos enviados a G-ZBQ51D34SW');
    }
}

function mostrarSiguienteDestino() {
    currentIndex = (currentIndex + 1) % destinos.length;
    actualizarUI();
    
    const destino = destinos[currentIndex];
    trackCustomEvent(destino.evento, 'Exploración de Destinos');
}

function actualizarUI() {
    const destino = destinos[currentIndex];
    const card = document.getElementById('destination-card');
    const name = document.getElementById('dest-name');
    const desc = document.getElementById('dest-desc');
    const img = document.getElementById('dest-img');

    // Efecto de transición simple
    card.style.opacity = '0';
    
    setTimeout(() => {
        name.innerText = destino.nombre;
        desc.innerText = destino.descripcion;
        img.src = destino.imagen;
        card.style.opacity = '1';
        document.getElementById('log').innerHTML = '📍 Viendo: <b>' + destino.nombre + '</b>';
    }, 300);
}

// Inicializar la UI con el primer destino
window.addEventListener('DOMContentLoaded', () => {
    actualizarUI();
});

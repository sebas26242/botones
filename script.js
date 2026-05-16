// Verificación de AdBlocker básica
window.addEventListener('load', () => {
    setTimeout(() => {
        if (typeof gtag === 'undefined' || !window.google_tag_manager) {
            const warning = document.getElementById('adblock-warning');
            if (warning) {
                warning.style.display = 'block';
            }
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
            'event_label': 'Naturaleza UI',
            'debug_mode': true
        });
        
        const log = document.getElementById('log');
        if (log) {
            log.innerHTML = '✅ Evento <b>' + eventName + '</b> enviado con éxito.';
        }
        console.log('✅ Éxito: Datos enviados a G-ZBQ51D34SW');
    } else {
        const log = document.getElementById('log');
        if (log) {
            log.innerHTML = '❌ Error: No se pudo contactar con GA4.';
        }
        console.error('❌ Error: gtag no está definido.');
    }
}

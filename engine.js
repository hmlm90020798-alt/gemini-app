
window.addEventListener('DOMContentLoaded', () => {
    // Esconder o loader com elegância
    setTimeout(() => {
        document.getElementById('loader').style.opacity = '0';
        setTimeout(() => document.getElementById('loader').remove(), 800);
    }, 1500);
});

// Usamos localStorage para almacenar el contador
let visitCount = localStorage.getItem('visitCount');
if (!visitCount) {
    visitCount = 0; // Si es la primera vez que se accede, inicializamos el contador.
}

function incrementVisit() {
    visitCount++;
    localStorage.setItem('visitCount', visitCount); // Guardamos el contador actualizado en localStorage
    document.getElementById('visitorCount').innerText = `La página ha sido visitada ${visitCount} veces.`;
}

// Mostrar el contador al cargar la página
window.onload = function() {
    document.getElementById('visitorCount').innerText = `La página ha sido visitada ${visitCount} veces.`;
};

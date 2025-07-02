const textarea = document.getElementById('nota');
const btnGuardar = document.getElementById('guardarBtn');
const estado = document.getElementById('estado');

// Cargar la nota guardada al iniciar
window.onload = () => {
  const notaGuardada = localStorage.getItem('nota');
  if (notaGuardada) {
    textarea.value = notaGuardada;
    estado.textContent = '🟢 Nota cargada correctamente.';
  }
};

// Guardar la nota manualmente
btnGuardar.addEventListener('click', () => {
  const nota = textarea.value.trim();
  localStorage.setItem('nota', nota);
  estado.textContent = '✅ Nota guardada exitosamente.';
});

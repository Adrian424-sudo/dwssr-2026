// Importando los estilos de la pagina
import './styles/main.css';

// Lógica para que el botón funcione interactivamente
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('button');
  if (btn) {
    btn.addEventListener('click', () => {
      console.log('Botón presionado');
    });
  }
});

console.log('🎉 Vite ⚡+ EXPRESS 🚂 Working!!');

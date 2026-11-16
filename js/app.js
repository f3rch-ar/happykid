import { traerJuegos } from './pedirDatos.js';
import { mostrarLoading, mostrarError, dibujarCards } from './dibujar.js';

// Referencias a los contenedores principales del DOM en index.html
const contenedorEstado = document.getElementById('estado-api');
const contenedorCards = document.getElementById('contenedor-cards');

// Coordina el ciclo de vida de la carga: loading -> petición API -> renderizado o error
async function iniciarCatalogo() {
  mostrarLoading(contenedorEstado, contenedorCards);
  try {
    const juegos = await traerJuegos(6);
    dibujarCards(juegos, contenedorEstado, contenedorCards);
  } catch (error) {
    mostrarError(error.message, contenedorEstado, iniciarCatalogo);
  }
}

// Inicia la carga del catálogo al abrir la página
iniciarCatalogo();
import Juego from './Juego.js';

// Endpoint público de FreeToGame API
const URL_API = 'https://www.freetogame.com/api/games';

// Realiza la petición HTTP con control de tiempo, valida la respuesta y mapea instancias de Juego
export async function traerJuegos(cantidad = 6) {
  const controlador = new AbortController();
  const timeoutId = setTimeout(() => controlador.abort(), 8000);

  try {
    const respuesta = await fetch(URL_API, { signal: controlador.signal });

    // Verificamos que el estado HTTP sea exitoso (200-299)
    if (!respuesta.ok) {
      throw new Error('Error HTTP ' + respuesta.status);
    }

    const datos = await respuesta.json();
    if (!Array.isArray(datos)) {
      throw new Error('Formato de respuesta inesperado');
    }

    // Tomamos la cantidad solicitada y transformamos cada objeto crudo en una instancia de Juego
    return datos.slice(0, cantidad).map((item) => new Juego(item));
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('Tiempo de espera agotado al conectar con la API');
    }
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}
// Renderiza el indicador visual de carga (estado loading)
export function mostrarLoading(contenedorEstado, contenedorCards) {
  contenedorCards.textContent = '';
  contenedorEstado.textContent = '';

  const caja = document.createElement('div');
  caja.className = 'estado-box';
  caja.setAttribute('role', 'status');

  const spinner = document.createElement('div');
  spinner.className = 'spinner';

  const texto = document.createElement('p');
  texto.textContent = 'Cargando catálogo de videojuegos...';

  caja.append(spinner, texto);
  contenedorEstado.appendChild(caja);
}

// Renderiza el mensaje de error con botón de reintento (estado error)
export function mostrarError(mensaje, contenedorEstado, alReintentar) {
  contenedorEstado.textContent = '';

  const caja = document.createElement('div');
  caja.className = 'estado-box error';

  const titulo = document.createElement('h3');
  titulo.textContent = 'No se pudieron cargar los juegos';

  const detalle = document.createElement('p');
  detalle.textContent = 'Detalle: ' + mensaje;

  const boton = document.createElement('button');
  boton.type = 'button';
  boton.className = 'btn-primary';
  boton.textContent = 'Reintentar';
  boton.addEventListener('click', alReintentar);

  caja.append(titulo, detalle, boton);
  contenedorEstado.appendChild(caja);
}

// Construye e inyecta en el DOM las cards de cada juego usando createElement
export function dibujarCards(juegos, contenedorEstado, contenedorCards) {
  contenedorEstado.textContent = '';
  contenedorCards.textContent = '';

  if (!juegos || juegos.length === 0) {
    mostrarError('No se encontraron juegos disponibles.', contenedorEstado, () => location.reload());
    return;
  }

  juegos.forEach((juego) => {
    const card = document.createElement('article');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = juego.imagen;
    img.alt = 'Portada de ' + juego.titulo;
    img.loading = 'lazy';

    const body = document.createElement('div');
    body.className = 'card-body';

    const titulo = document.createElement('h3');
    titulo.className = 'card-title';
    titulo.textContent = juego.titulo;

    const meta = document.createElement('p');
    meta.className = 'card-meta';
    meta.textContent = juego.genero + ' · ' + juego.plataforma;

    const desc = document.createElement('p');
    desc.className = 'card-desc';
    desc.textContent = juego.descripcion;

    body.append(titulo, meta, desc);
    card.append(img, body);
    contenedorCards.appendChild(card);
  });
}
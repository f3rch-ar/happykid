// Referencia al formulario de contacto
const formulario = document.getElementById('form-contacto');

// Intercepta el envío para validar todos los campos obligatorios con alertas específicas
formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const motivo = document.getElementById('motivo').value;
  const plataforma = formulario.querySelector('input[name="plataforma"]:checked');
  const mensaje = document.getElementById('mensaje').value.trim();

  // Validación 1: campo de texto (nombre)
  if (!nombre) {
    alert('Error: Por favor ingresá tu nombre o nickname.');
    return;
  }

  // Validación 2: formato de correo electrónico
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    alert('Error: Por favor ingresá un correo electrónico válido.');
    return;
  }

  // Validación 3: lista desplegable (select)
  if (!motivo) {
    alert('Error: Seleccioná un motivo de consulta.');
    return;
  }

  // Validación 4: botones de opción (radio)
  if (!plataforma) {
    alert('Error: Seleccioná tu plataforma preferida.');
    return;
  }

  // Validación 5: área de texto (mensaje)
  if (!mensaje) {
    alert('Error: Escribí un mensaje antes de enviar.');
    return;
  }

  // Confirmación exitosa y limpieza del formulario
  alert('¡Gracias ' + nombre + '! Tu mensaje para HappyKid fue enviado con éxito.');
  formulario.reset();
});
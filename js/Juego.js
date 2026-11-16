// Clase modelo: filtra y normaliza las propiedades relevantes que devuelve FreeToGame API
export default class Juego {
  constructor(datos) {
    this.titulo = datos.title;
    this.imagen = datos.thumbnail;
    this.genero = datos.genre;
    this.plataforma = datos.platform;
    this.descripcion = datos.short_description;
  }
}
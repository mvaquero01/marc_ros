export const CONFIG = {
  nombre: "MARC ROS",
  slogan: "T'estimo UESA",
  direccion: "Carrer d'Arquímedes 38",
  telefono: "625 46 02 21",
  whatsapp: "34625460221",
  email: "marc.rosg.ia@gmail.com",
  instagram: "https://www.instagram.com/marcrosg_/",
  color: "#1B4F8A",
  semanasSinVisita: 5,
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!3m2!1ses!2ses!4v1782339821782!5m2!1ses!2ses!6m8!1m7!1sZ6DtZ1CUoB1T00PRJOZ6GQ!2m2!1d41.4398590043212!2d2.187358940372504!3f340.7568531476023!4f5.660866824636415!5f1.3366891976977597",
  googleMapsLink: "https://maps.app.goo.gl/GLsufCZ68Yv8Eem8A",

  categorias: [
    { id: 1, nombre: "Corte", foto: "", emoji: "✂️", servicioIds: [1] }
  ],

  horarioGeneral: {
    1: { apertura: "10:00", cierre: "20:00" },
    2: { apertura: "10:00", cierre: "20:00" },
    3: { apertura: "10:00", cierre: "20:00" },
    4: { apertura: "10:00", cierre: "20:00" },
    5: { apertura: "10:00", cierre: "20:00" },
    6: { apertura: "10:00", cierre: "15:00" },
  },

  serviciosDefault: [
    { id: 1, nombre: "Corte", desc: "", duracionMin: 30, precio: 0, emoji: "✂️" }
  ],

  peluqueros: [
    {
      id: 1,
      nombre: "Marc",
      especialidad: "Barbero",
      emoji: "✂️",
      color: "#1B4F8A",
      password: "marc123",
      foto: "",
      horario: {
        1: { entrada: "10:00", salida: "20:00", descanso: null },
        2: { entrada: "10:00", salida: "20:00", descanso: null },
        3: { entrada: "10:00", salida: "20:00", descanso: null },
        4: { entrada: "10:00", salida: "20:00", descanso: null },
        5: { entrada: "10:00", salida: "20:00", descanso: null },
        6: { entrada: "10:00", salida: "15:00", descanso: null },
      }
    }
  ],
};
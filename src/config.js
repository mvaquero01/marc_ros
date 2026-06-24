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
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11963.882505642716!2d2.187358940372504!3d41.4398590043212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4bcde2fdbb3b9%3A0x14b89a432b8ba178!2sCarrer%20d'Arqu%C3%ADmedes%2C%2038%2C%20Sant%20Andreu%2C%2008030%20Barcelona!5e0!3m2!1ses!2ses!4v1782339992363!5m2!1ses!2ses",
  googleMapsLink: "https://maps.app.goo.gl/GyJAdjNP8ArBZHGj9",

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
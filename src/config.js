export const CONFIG = {
  nombre: "MARC ROS",
  slogan: "Cortes en buena compañía",
  direccion: "Carrer d'Arquímedes 38",
  telefono: "625 46 02 21",
  whatsapp: "34625460221",
  email: "marc.rosg.ia@gmail.com",
  instagram: "https://www.instagram.com/marcrosg_/",
  color: "#1B4F8A",
  semanasSinVisita: 5,
  googleMapsEmbed: "",
  googleMapsLink: "",

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
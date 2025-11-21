const path = require('path');
const express = require('express');
const app = express();

// Configuración del motor de vistas Handlebars (hbs)
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Imágenes y recursos
const images = {
  logo: "https://www.figma.com/api/mcp/asset/3bbfa3e0-8bc4-40e7-b435-0f6f6cd202d1",
  hero: "https://www.figma.com/api/mcp/asset/9e8e3901-1718-4212-bb55-cb797674059c",
  luffy: "https://www.figma.com/api/mcp/asset/fb777350-4051-4a4d-882b-c1300f79ca3a",
  zoro: "https://www.figma.com/api/mcp/asset/02b42916-b52b-41d0-a378-b9c9db241221",
  nami: "https://www.figma.com/api/mcp/asset/60e5c4c8-81b1-4caa-b2f6-8a97224c2384",
  usopp: "https://www.figma.com/api/mcp/asset/dc4802fd-5151-461f-b2a2-fa71767abd7c",
  sanji: "https://www.figma.com/api/mcp/asset/2c460496-c0d9-4e33-82f7-223cdfe2600f",
  chopper: "https://www.figma.com/api/mcp/asset/ad677e6b-9f6c-4162-ab10-1230d9d561f6",
  robin: "https://www.figma.com/api/mcp/asset/f6585b0c-dcc9-4f63-988b-5f558cbed679",
  franky: "https://www.figma.com/api/mcp/asset/87e71867-8879-4e7f-84e3-35e504b298a6",
  brook: "https://www.figma.com/api/mcp/asset/4400d814-7b76-4980-b08c-a629e8268369",
  iconAdventure: "https://www.figma.com/api/mcp/asset/d14255e9-18d7-4cbe-9d99-bdd46d450c9f",
  iconBattle: "https://www.figma.com/api/mcp/asset/38eaf10e-fd3b-4afb-997d-4498e69ff80a",
  iconFriendship: "https://www.figma.com/api/mcp/asset/00e44eb6-86b0-4d94-94c0-36e16a02cf64",
  iconDreams: "https://www.figma.com/api/mcp/asset/7ff2b9ed-f0df-4842-a0a3-a75facf8f3db",
  iconSword: "https://www.figma.com/api/mcp/asset/9b317b97-d84f-4052-96f7-8deb25d2266c",
  iconHeart: "https://www.figma.com/api/mcp/asset/a7e0670c-f63c-4ef0-9bdc-4f62a3536257",
  iconBook: "https://www.figma.com/api/mcp/asset/efa380e5-2b3f-46e6-b5e2-1f7217e49ac5",
  iconWrench: "https://www.figma.com/api/mcp/asset/60c150bd-06e8-44fa-bad1-5f9d54226b1a",
  iconMusic: "https://www.figma.com/api/mcp/asset/ad00a72f-4a40-4570-bfae-58b20bb260a5",
  iconStar: "https://www.figma.com/api/mcp/asset/96a749b9-ff6f-4224-8fbb-73c70cd3abc3"
};

// Datos de características (About section)
const features = [
  {
    icon: images.iconAdventure,
    title: "Aventura",
    description: "Una épica travesía por los mares más peligrosos del mundo"
  },
  {
    icon: images.iconBattle,
    title: "Batallas",
    description: "Combates intensos contra los piratas y marines más poderosos"
  },
  {
    icon: images.iconFriendship,
    title: "Amistad",
    description: "Lazos inquebrantables entre la tripulación del Sombrero de Paja"
  },
  {
    icon: images.iconDreams,
    title: "Sueños",
    description: "Cada tripulante persigue su propio sueño imposible"
  }
];

// Datos de la tripulación (puede provenir de BD en escenarios reales)
const crew = [
  {
    nombre: 'Monkey D. Luffy',
    rol: 'Capitán',
    descripcion: 'El capitán optimista con el sueño de convertirse en el Rey de los Piratas',
    imagen: images.luffy,
    icon: images.iconSword,
    borderColor: '#fb2c36'
  },
  {
    nombre: 'Roronoa Zoro',
    rol: 'Espadachín',
    descripcion: 'El espadachín de tres espadas que busca ser el más fuerte del mundo',
    imagen: images.zoro,
    icon: images.iconStar,
    borderColor: '#00c950'
  },
  {
    nombre: 'Nami',
    rol: 'Navegante',
    descripcion: 'La navegante experta que sueña con mapear el mundo entero',
    imagen: images.nami,
    icon: images.iconHeart,
    borderColor: '#ff8904'
  },
  {
    nombre: 'Usopp',
    rol: 'Francotirador',
    descripcion: 'El francotirador valiente que aspira a ser un guerrero del mar',
    imagen: images.usopp,
    icon: images.iconHeart,
    borderColor: '#f0b100'
  },
  {
    nombre: 'Sanji',
    rol: 'Cocinero',
    descripcion: 'El chef apasionado en busca del All Blue legendario',
    imagen: images.sanji,
    icon: images.iconSword,
    borderColor: '#2b7fff'
  },
  {
    nombre: 'Tony Tony Chopper',
    rol: 'Médico',
    descripcion: 'El reno médico que quiere curar cualquier enfermedad',
    imagen: images.chopper,
    icon: images.iconBook,
    borderColor: '#f6339a'
  },
  {
    nombre: 'Nico Robin',
    rol: 'Arqueóloga',
    descripcion: 'La arqueóloga que busca descubrir la historia perdida',
    imagen: images.robin,
    icon: images.iconWrench,
    borderColor: '#ad46ff'
  },
  {
    nombre: 'Franky',
    rol: 'Carpintero',
    descripcion: 'El carpintero cyborg que construyó el Thousand Sunny',
    imagen: images.franky,
    icon: images.iconStar,
    borderColor: '#00b8db'
  },
  {
    nombre: 'Brook',
    rol: 'Músico',
    descripcion: 'El esqueleto músico que promete regresar con un viejo amigo',
    imagen: images.brook,
    icon: images.iconMusic,
    borderColor: '#90a1b9'
  }
];

app.get('/', (req, res) => {
  const year = new Date().getFullYear();
  res.render('index', {
    titulo: 'One Piece - Tripulación del Sombrero de Paja',
    crew,
    features,
    images,
    year
  });
});

// Middleware de ruta no encontrada
app.use((req, res) => {
  res.status(404).send('Recurso no encontrado');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

// Datos de la carta - Café Sami's & Desayunos
// Generado a partir del PDF original

const menuData = {
  cafes: [
    { nombre: "Bombón", precio: 1.70 },
    { nombre: "Expreso", precio: 1.30 },
    { nombre: "Cortado", precio: 1.50 },
    { nombre: "Americano", precio: 1.70 },
    { nombre: "Carajillo", precio: 2.00 },
    { nombre: "Café con leche", precio: 1.70 },
    { nombre: "Grande", precio: 2.00 },
    { nombre: "Extra grande", precio: 2.50 },
    { nombre: "Affogato con helado", precio: 4.00 },
    { nombre: "Cola-Cao", precio: 2.10 },
    { nombre: "Vienés (nata y cacao)", precio: 5.00 }
  ],

  te: [
    { nombre: "Té verde jazmín", precio: 2.00 },
    { nombre: "Té negro pakistaní", precio: 2.00 },
    { nombre: "Té Pu Erh cuerpo del deseo", precio: 2.00 },
    { nombre: "Frutas rojas del bosque", precio: 2.00 },
    { nombre: "Rooibos Copacabana", precio: 2.00 },
    { nombre: "Té moruno con hierbabuena", precio: 2.00 },
    { nombre: "Té negro chocolate y menta", precio: 2.00 },
    { nombre: "Rooibos relax", precio: 2.00 },
    { nombre: "Té negro sueños de canela", precio: 2.00 },
    { nombre: "Té verde", precio: 2.00 },
    { nombre: "Té verde japonés", precio: 2.00 },
    { nombre: "Digest", precio: 2.00 },
    { nombre: "Rooibos vainilla", precio: 2.00 }
  ],

  bebidasFrias: [
    { nombre: "Coca Cola", precio: 2.50 },
    { nombre: "Coca Cola Zero", precio: 2.50 },
    { nombre: "Nestea", precio: 2.50 },
    { nombre: "Nestea Maracuyá", precio: 2.50 },
    { nombre: "Aquarius Limón", precio: 2.50 },
    { nombre: "Aquarius Naranja", precio: 2.50 },
    { nombre: "Fanta Limón", precio: 2.50 },
    { nombre: "Fanta Naranja", precio: 2.50 }
  ],

  zumos: [
    { nombre: "Naranja", precio: 3.00 },
    { nombre: "Piña", precio: 1.80 },
    { nombre: "Melocotón", precio: 1.80 }
  ],

  cappuccino: [
    { nombre: "Caramelo", precio: 3.00 },
    { nombre: "Chocolate blanco", precio: 3.00 },
    { nombre: "Vainilla", precio: 3.00 },
    { nombre: "Crema de leche", precio: 2.20 }
  ],

  macchiatos: [
    { nombre: "Caramelo", precio: 3.50 },
    { nombre: "Chocolate", precio: 3.50 },
    { nombre: "Chocolate blanco", precio: 3.50 }
  ],

  tostadasBasicas: [
    { nombre: "Aceite", precio: 1.30 },
    { nombre: "Tomate", precio: 1.30 },
    { nombre: "Queso manchego", precio: 2.80 },
    { nombre: "Queso fresco", precio: 2.80 },
    { nombre: "Jamón York", precio: 1.90 },
    { nombre: "Jamón York (pavo)", precio: 1.90 },
    { nombre: "Mantequilla", precio: 1.50 },
    { nombre: "Salmón", precio: 3.50 },
    { nombre: "Atún", precio: 2.30 },
    { nombre: "Extra: Aguacate", precio: 1.00 },
    { nombre: "Extra: Otros extras", precio: 0.50 }
  ],

  tostadasPanRustico: [
    { nombre: "Mediterránea", descripcion: "Queso de cabra, miel y nueces", precio: 6.00, imagen: "img/platos/tostada_mediterranea.jpg", alergenos: ["gluten", "lacteos", "frutos-secos"] },
    { nombre: "Serrano verde", descripcion: "Tomate, aguacate y serrano", precio: 4.50, alergenos: ["gluten"] },
    { nombre: "Nórdica delux", descripcion: "Salmón, queso crema y rúcula", precio: 5.00, alergenos: ["gluten", "lacteos", "pescado"] },
    { nombre: "Sabor rústico", descripcion: "Tomate, huevos revueltos y serrano", precio: 6.00, alergenos: ["gluten", "huevo"] },
    { nombre: "Burrata & Berries", descripcion: "Toque de pesto, canónigos, burrata y frutos rojos", precio: 6.00, imagen: "img/platos/tostada_burrata_y_berries.jpg", alergenos: ["gluten", "lacteos", "frutos-secos"] },
    { nombre: "Dulce tentación", descripcion: "Nutella, fresas, plátano y crema de avellanas", precio: 7.00, alergenos: ["gluten", "lacteos", "frutos-secos"] },
    { nombre: "La temporada", descripcion: "Queso crema, higos o granada (según temporada), jamón serrano, queso feta y canónigos", precio: 8.00, alergenos: ["gluten", "lacteos"] }
  ],

  brunchs: [
    { nombre: "Huevos Bennedit", descripcion: "Pan briochet, aguacate, bacon, huevo pochado y salsa holandesa", precio: 11.00, alergenos: ["gluten", "huevo", "lacteos"] },
    { nombre: "Desayuno americano", descripcion: "Tostada de pan rústico, huevos revueltos, bacon y aguacate", precio: 10.00, imagen: "img/platos/brunch_desayuno_americano.jpg", alergenos: ["gluten", "huevo"] },
    { nombre: "Bagel Supreme", descripcion: "Pan bagel, queso chédar, aguacate, pavo, rúcula y huevo frito o revuelto", precio: 10.00, imagen: "img/platos/brunch_bagel_supreme.jpg", alergenos: ["gluten", "lacteos", "huevo"] },
    { nombre: "Suprem Salmón", descripcion: "Pan bagel, queso crema, canónigos, salmón, aguacate y germinados", precio: 12.00, alergenos: ["gluten", "lacteos", "pescado"] },
    { nombre: "El Desmechado", descripcion: "Pan burger, carrillera desmechada, queso chédar y salsa mostaza y miel", precio: 12.00, alergenos: ["gluten", "lacteos"] }
  ],

  crepesSalados: [
    { nombre: "El Supremo", descripcion: "Aguacate, queso crema y salmón", precio: 9.00, imagen: "img/platos/crepe_salado_el_supremo.jpg", alergenos: ["gluten", "lacteos", "pescado"] },
    { nombre: "Sami's Creps", descripcion: "Aguacate, pollo, bacon, mostazamiel", precio: 9.00, alergenos: ["gluten"] },
    { nombre: "Basic", descripcion: "Jamón York o pavo, queso lonchas, miel (opcional)", precio: 3.00, alergenos: ["gluten", "lacteos"] }
  ],

  tablasParaCompartir: [
    { nombre: "Tabla Sami's Amigos", descripcion: "Aguacate, salmón, huevo revuelto, queso, jamón serrano, tomate rayado, mantequilla, croissants, tortitas, mermelada, zumo de naranja, yogur griego y pan", precio: 25.00, alergenos: ["gluten", "lacteos", "huevo", "pescado"] },
    { nombre: "Gran Serrano", descripcion: "Tostada de pan rústico, jamón serrano, huevos revueltos con toque de parmesano, quesos varios, ibéricos y tomate rayado", precio: 15.00, alergenos: ["gluten", "huevo", "lacteos"] },
    { nombre: "Super Tabla Mediterránea", descripcion: "Quesos (curado, manchego, parmesano, semicurado, brie, camembert y trufa), embutidos (jamón serrano, salchichón, lomo, chorizo suave), acompañado de pan rústico, picos, frutos secos y aceitunas variadas, toque dulce de uvas, higos y fruta de temporada, extra de chocolate negro al 70%", precio: 35.00, alergenos: ["gluten", "lacteos", "frutos-secos"] },
    { nombre: "La Ruta del Queso", descripcion: "Queso semicurado, curado de cabra, de romero, de trufa, quesos frutales, acompañado de pan baguette, crackers y mermelada", precio: 18.00, alergenos: ["gluten", "lacteos"] },
    { nombre: "La del Jamón", descripcion: "Selección de jamón ibérico, lomo, chorizo, salchichón, acompañado de rústico y picos", precio: 15.00, alergenos: ["gluten"] }
  ],

  croissants: [
    { nombre: "Lotus Dream", descripcion: "Relleno de lotus, plátano, nata y galletas Lotus", precio: 5.00, imagen: "img/platos/croissant_lotus_dream.jpg", alergenos: ["gluten", "lacteos"] },
    { nombre: "Blanco y Verde", descripcion: "Pistacho y chocolate blanco", precio: 5.00, alergenos: ["gluten", "lacteos", "frutos-secos"] },
    { nombre: "Sami's Paris", descripcion: "Crema pastelera y frutos rojos", precio: 5.00, alergenos: ["gluten", "lacteos", "huevo"] },
    { nombre: "Croissants rellenos", descripcion: "Chocolate, chocolate blanco, crema Kinder", precio: 1.50, alergenos: ["gluten", "lacteos"] }
  ],

  crepesDulces: [
    { nombre: "La Reina", descripcion: "Nutella", precio: 3.50, imagen: "img/platos/crepe_la_reina.jpg", alergenos: ["gluten", "lacteos"] },
    { nombre: "Choco Berry Bliss", descripcion: "Nutella, fresas, plátano, nata y avellanas", precio: 6.00, alergenos: ["gluten", "lacteos", "frutos-secos"] },
    { nombre: "Sweet Velvet", descripcion: "Crema de queso, frutos rojos y miel", precio: 6.00, imagen: "img/platos/crepe_sweet_velvet.jpg", alergenos: ["gluten", "lacteos"] },
    { nombre: "Paraíso Dulce", descripcion: "Frutos rojos, kiwi, naranja y Nutella", precio: 6.00, alergenos: ["gluten", "lacteos"] },
    { nombre: "Extra: Bola de helado", precio: 1.50 },
    { nombre: "Extra: Caramelo", precio: 0.50 },
    { nombre: "Extra: Fresas", precio: 0.50 },
    { nombre: "Extra: Chocolate blanco", precio: 0.50 }
  ],

  tartas: [
    { nombre: "Tarta Red Velvet", precio: 4.50, imagen: "img/platos/tarta_red_velvet.jpg", alergenos: ["gluten", "lacteos", "huevo"] },
    { nombre: "Tarta de queso", precio: 4.50, alergenos: ["gluten", "lacteos", "huevo"] },
    { nombre: "Tarta de queso de pistacho", precio: 4.50, alergenos: ["gluten", "lacteos", "huevo", "frutos-secos"] },
    { nombre: "Tarta de zanahoria", precio: 4.50, alergenos: ["gluten", "lacteos", "huevo", "frutos-secos"] },
    { nombre: "Tiramisú", precio: 5.00, alergenos: ["gluten", "lacteos", "huevo"] }
  ],

  galletasNewYork: [
    { nombre: "Lotus", precio: 3.50, alergenos: ["gluten", "lacteos", "huevo"] },
    { nombre: "Red Velvet", precio: 3.50, alergenos: ["gluten", "lacteos", "huevo"] },
    { nombre: "Chocolate", precio: 2.50, imagen: "img/platos/galleta_chocolate.jpg", alergenos: ["gluten", "lacteos", "huevo"] },
    { nombre: "Chocolate blanco", precio: 2.50, alergenos: ["gluten", "lacteos", "huevo"] },
    { nombre: "Pistacho", precio: 3.50, alergenos: ["gluten", "lacteos", "huevo", "frutos-secos"] },
    { nombre: "Oreo", precio: 3.50, alergenos: ["gluten", "lacteos", "huevo"] }
  ]
};

// Títulos de categoría (en el mismo orden que menuData)
const categoryTitles = {
  cafes: "Cafés",
  te: "Té",
  bebidasFrias: "Bebidas Frías",
  zumos: "Zumos",
  cappuccino: "Cappuccino",
  macchiatos: "Macchiatos",
  tostadasBasicas: "Tostadas Básicas",
  tostadasPanRustico: "Tostadas Pan Rústico",
  brunchs: "Brunchs",
  crepesSalados: "Crepes Salados",
  tablasParaCompartir: "Tablas para Compartir",
  croissants: "Croissants",
  crepesDulces: "Crepes Dulces",
  tartas: "Tartas",
  galletasNewYork: "Galletas New York"
};

// Etiquetas de los bloques temáticos que separan grupos de categorías
const groupLabels = {
  bebidas: "bebidas",
  desayunos: "desayunos",
  dulces: "dulces"
};

// Notas aclaratorias que se muestran bajo el título de ciertas categorías
const categoryNotes = {
  cafes: "Todos los cafés se pueden pedir con leche de almendra, sin lactosa o entera.",
  tostadasBasicas: "Elige pan blanco o integral de semillas. Todas las tostadas contienen gluten."
};

// Etiquetas de los alérgenos usados en los platos
const allergenLabels = {
  gluten: "Gluten",
  lacteos: "Lácteos",
  huevo: "Huevo",
  "frutos-secos": "Frutos secos",
  pescado: "Pescado"
};

// Para usar en Node/módulos si hace falta:
// export default menuData;

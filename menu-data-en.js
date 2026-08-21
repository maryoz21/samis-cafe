// Menu data (English) - Café Sami's & Desayunos
// Translated from the original menu-data.js

const menuData = {
  cafes: [
    { nombre: "Bombón (condensed milk coffee)", precio: 1.70 },
    { nombre: "Espresso", precio: 1.30 },
    { nombre: "Cortado (espresso with a splash of milk)", precio: 1.50 },
    { nombre: "Americano", precio: 1.70 },
    { nombre: "Carajillo (coffee with liqueur)", precio: 2.00 },
    { nombre: "Coffee with Milk", precio: 1.70 },
    { nombre: "Large", precio: 2.00 },
    { nombre: "Extra Large", precio: 2.50 },
    { nombre: "Affogato with Ice Cream", precio: 4.00 },
    { nombre: "Cola-Cao (hot chocolate)", precio: 2.10 },
    { nombre: "Viennese (whipped cream & cocoa)", precio: 5.00 }
  ],

  te: [
    { nombre: "Jasmine Green Tea", precio: 2.00 },
    { nombre: "Pakistani Black Tea", precio: 2.00 },
    { nombre: "Pu Erh Tea \"Body of Desire\"", precio: 2.00 },
    { nombre: "Forest Berries", precio: 2.00 },
    { nombre: "Rooibos Copacabana", precio: 2.00 },
    { nombre: "Moroccan Mint Tea", precio: 2.00 },
    { nombre: "Black Tea Chocolate & Mint", precio: 2.00 },
    { nombre: "Rooibos Relax", precio: 2.00 },
    { nombre: "Black Tea Cinnamon Dreams", precio: 2.00 },
    { nombre: "Green Tea", precio: 2.00 },
    { nombre: "Japanese Green Tea", precio: 2.00 },
    { nombre: "Digest", precio: 2.00 },
    { nombre: "Vanilla Rooibos", precio: 2.00 }
  ],

  bebidasFrias: [
    { nombre: "Coca-Cola", precio: 2.50 },
    { nombre: "Coca-Cola Zero", precio: 2.50 },
    { nombre: "Nestea", precio: 2.50 },
    { nombre: "Nestea Passion Fruit", precio: 2.50 },
    { nombre: "Aquarius Lemon", precio: 2.50 },
    { nombre: "Aquarius Orange", precio: 2.50 },
    { nombre: "Fanta Lemon", precio: 2.50 },
    { nombre: "Fanta Orange", precio: 2.50 }
  ],

  zumos: [
    { nombre: "Orange", precio: 3.00 },
    { nombre: "Pineapple", precio: 1.80 },
    { nombre: "Peach", precio: 1.80 }
  ],

  cappuccino: [
    { nombre: "Caramel", precio: 3.00 },
    { nombre: "White Chocolate", precio: 3.00 },
    { nombre: "Vanilla", precio: 3.00 },
    { nombre: "Milk Cream", precio: 2.20 }
  ],

  macchiatos: [
    { nombre: "Caramel", precio: 3.50 },
    { nombre: "Chocolate", precio: 3.50 },
    { nombre: "White Chocolate", precio: 3.50 }
  ],

  tostadasBasicas: [
    { nombre: "Olive Oil", precio: 1.30 },
    { nombre: "Tomato", precio: 1.30 },
    { nombre: "Manchego Cheese", precio: 2.80 },
    { nombre: "Fresh Cheese", precio: 2.80 },
    { nombre: "Cooked Ham", precio: 1.90 },
    { nombre: "Cooked Turkey Ham", precio: 1.90 },
    { nombre: "Butter", precio: 1.50 },
    { nombre: "Salmon", precio: 3.50 },
    { nombre: "Tuna", precio: 2.30 },
    { nombre: "Extra: Avocado", precio: 1.00 },
    { nombre: "Extra: Other Toppings", precio: 0.50 }
  ],

  tostadasPanRustico: [
    { nombre: "Mediterranean", descripcion: "Goat cheese, honey and walnuts", precio: 6.00, imagen: "img/platos/tostada_mediterranea.jpg", alergenos: ["gluten", "lacteos", "frutos-secos"] },
    { nombre: "Serrano Green", descripcion: "Tomato, avocado and Serrano ham", precio: 4.50, alergenos: ["gluten"] },
    { nombre: "Nordic Deluxe", descripcion: "Salmon, cream cheese and arugula", precio: 5.00, alergenos: ["gluten", "lacteos", "pescado"] },
    { nombre: "Rustic Flavor", descripcion: "Tomato, scrambled eggs and Serrano ham", precio: 6.00, alergenos: ["gluten", "huevo"] },
    { nombre: "Burrata & Berries", descripcion: "A touch of pesto, lamb's lettuce, burrata and red berries", precio: 6.00, imagen: "img/platos/tostada_burrata_y_berries.jpg", alergenos: ["gluten", "lacteos", "frutos-secos"] },
    { nombre: "Sweet Temptation", descripcion: "Nutella, strawberries, banana and hazelnut cream", precio: 7.00, alergenos: ["gluten", "lacteos", "frutos-secos"] },
    { nombre: "The Season", descripcion: "Cream cheese, figs or pomegranate (seasonal), Serrano ham, feta cheese and lamb's lettuce", precio: 8.00, alergenos: ["gluten", "lacteos"] }
  ],

  brunchs: [
    { nombre: "Eggs Benedict", descripcion: "Brioche bread, avocado, bacon, poached egg and hollandaise sauce", precio: 11.00, alergenos: ["gluten", "huevo", "lacteos"] },
    { nombre: "American Breakfast", descripcion: "Rustic bread toast, scrambled eggs, bacon and avocado", precio: 10.00, imagen: "img/platos/brunch_desayuno_americano.jpg", alergenos: ["gluten", "huevo"] },
    { nombre: "Bagel Supreme", descripcion: "Bagel bread, cheddar cheese, avocado, turkey, arugula and fried or scrambled egg", precio: 10.00, imagen: "img/platos/brunch_bagel_supreme.jpg", alergenos: ["gluten", "lacteos", "huevo"] },
    { nombre: "Supreme Salmon", descripcion: "Bagel bread, cream cheese, lamb's lettuce, salmon, avocado and sprouts", precio: 12.00, alergenos: ["gluten", "lacteos", "pescado"] },
    { nombre: "The Pulled", descripcion: "Burger bun, pulled beef cheek, cheddar cheese and honey-mustard sauce", precio: 12.00, alergenos: ["gluten", "lacteos"] }
  ],

  crepesSalados: [
    { nombre: "The Supreme", descripcion: "Avocado, cream cheese and salmon", precio: 9.00, imagen: "img/platos/crepe_salado_el_supremo.jpg", alergenos: ["gluten", "lacteos", "pescado"] },
    { nombre: "Sami's Creps", descripcion: "Avocado, chicken, bacon, honey mustard", precio: 9.00, alergenos: ["gluten"] },
    { nombre: "Basic", descripcion: "Cooked ham or turkey, sliced cheese, honey (optional)", precio: 3.00, alergenos: ["gluten", "lacteos"] }
  ],

  tablasParaCompartir: [
    { nombre: "Sami's Friends Board", descripcion: "Avocado, salmon, scrambled egg, cheese, Serrano ham, grated tomato, butter, croissants, pancakes, jam, orange juice, Greek yogurt and bread", precio: 25.00, alergenos: ["gluten", "lacteos", "huevo", "pescado"] },
    { nombre: "Great Serrano", descripcion: "Rustic bread toast, Serrano ham, scrambled eggs with a touch of parmesan, assorted cheeses, cured meats and grated tomato", precio: 15.00, alergenos: ["gluten", "huevo", "lacteos"] },
    { nombre: "Super Mediterranean Board", descripcion: "Cheeses (cured, Manchego, parmesan, semi-cured, brie, camembert and truffle), cold cuts (Serrano ham, salchichón, cured pork loin, mild chorizo), served with rustic bread, breadsticks, mixed nuts and olives, a sweet touch of grapes, figs and seasonal fruit, extra 70% dark chocolate", precio: 35.00, alergenos: ["gluten", "lacteos", "frutos-secos"] },
    { nombre: "The Cheese Route", descripcion: "Semi-cured cheese, cured goat cheese, rosemary cheese, truffle cheese, fruit-infused cheeses, served with baguette, crackers and jam", precio: 18.00, alergenos: ["gluten", "lacteos"] },
    { nombre: "The Ham Selection", descripcion: "Selection of Iberian ham, cured pork loin, chorizo, salchichón, served with rustic bread and breadsticks", precio: 15.00, alergenos: ["gluten"] }
  ],

  croissants: [
    { nombre: "Lotus Dream", descripcion: "Filled with Lotus spread, banana, cream and Lotus biscuits", precio: 5.00, imagen: "img/platos/croissant_lotus_dream.jpg", alergenos: ["gluten", "lacteos"] },
    { nombre: "White & Green", descripcion: "Pistachio and white chocolate", precio: 5.00, alergenos: ["gluten", "lacteos", "frutos-secos"] },
    { nombre: "Sami's Paris", descripcion: "Pastry cream and red berries", precio: 5.00, alergenos: ["gluten", "lacteos", "huevo"] },
    { nombre: "Filled Croissants", descripcion: "Chocolate, white chocolate, Kinder cream", precio: 1.50, alergenos: ["gluten", "lacteos"] }
  ],

  crepesDulces: [
    { nombre: "The Queen", descripcion: "Nutella", precio: 3.50, imagen: "img/platos/crepe_la_reina.jpg", alergenos: ["gluten", "lacteos"] },
    { nombre: "Choco Berry Bliss", descripcion: "Nutella, strawberries, banana, cream and hazelnuts", precio: 6.00, alergenos: ["gluten", "lacteos", "frutos-secos"] },
    { nombre: "Sweet Velvet", descripcion: "Cream cheese, red berries and honey", precio: 6.00, imagen: "img/platos/crepe_sweet_velvet.jpg", alergenos: ["gluten", "lacteos"] },
    { nombre: "Sweet Paradise", descripcion: "Red berries, kiwi, orange and Nutella", precio: 6.00, alergenos: ["gluten", "lacteos"] },
    { nombre: "Extra: Scoop of Ice Cream", precio: 1.50 },
    { nombre: "Extra: Caramel", precio: 0.50 },
    { nombre: "Extra: Strawberries", precio: 0.50 },
    { nombre: "Extra: White Chocolate", precio: 0.50 }
  ],

  tartas: [
    { nombre: "Red Velvet Cake", precio: 4.50, imagen: "img/platos/tarta_red_velvet.jpg", alergenos: ["gluten", "lacteos", "huevo"] },
    { nombre: "Cheesecake", precio: 4.50, alergenos: ["gluten", "lacteos", "huevo"] },
    { nombre: "Pistachio Cheesecake", precio: 4.50, alergenos: ["gluten", "lacteos", "huevo", "frutos-secos"] },
    { nombre: "Carrot Cake", precio: 4.50, alergenos: ["gluten", "lacteos", "huevo", "frutos-secos"] },
    { nombre: "Tiramisu", precio: 5.00, alergenos: ["gluten", "lacteos", "huevo"] }
  ],

  galletasNewYork: [
    { nombre: "Lotus", precio: 3.50, alergenos: ["gluten", "lacteos", "huevo"] },
    { nombre: "Red Velvet", precio: 3.50, alergenos: ["gluten", "lacteos", "huevo"] },
    { nombre: "Chocolate", precio: 2.50, imagen: "img/platos/galleta_chocolate.jpg", alergenos: ["gluten", "lacteos", "huevo"] },
    { nombre: "White Chocolate", precio: 2.50, alergenos: ["gluten", "lacteos", "huevo"] },
    { nombre: "Pistachio", precio: 3.50, alergenos: ["gluten", "lacteos", "huevo", "frutos-secos"] },
    { nombre: "Oreo", precio: 3.50, alergenos: ["gluten", "lacteos", "huevo"] }
  ]
};

// Category titles (same order as menuData)
const categoryTitles = {
  cafes: "Coffees",
  te: "Tea",
  bebidasFrias: "Cold Drinks",
  zumos: "Juices",
  cappuccino: "Cappuccino",
  macchiatos: "Macchiatos",
  tostadasBasicas: "Basic Toasts",
  tostadasPanRustico: "Rustic Bread Toasts",
  brunchs: "Brunch",
  crepesSalados: "Savory Crepes",
  tablasParaCompartir: "Sharing Boards",
  croissants: "Croissants",
  crepesDulces: "Sweet Crepes",
  tartas: "Cakes",
  galletasNewYork: "New York Cookies"
};

// Labels for the thematic blocks that separate groups of categories
const groupLabels = {
  bebidas: "drinks",
  desayunos: "breakfast",
  dulces: "sweets"
};

// Notes shown below the title of certain categories
const categoryNotes = {
  cafes: "All coffees can be made with almond, lactose-free or whole milk.",
  tostadasBasicas: "Choose white or wholegrain seed bread. All toasts contain gluten."
};

// Labels for the allergens used in the dishes
const allergenLabels = {
  gluten: "Gluten",
  lacteos: "Dairy",
  huevo: "Egg",
  "frutos-secos": "Nuts",
  pescado: "Fish"
};

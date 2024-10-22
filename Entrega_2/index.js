const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

//RESOLUCIÓN

//a)  Las pizzas que tengan un id impar.
console.log('-------------------');
console.log('-Pizzas con ID impar-');
pizzas.forEach((pizza) => {
  if (pizza.id % 2 != 0){
    console.log('Esta pizza es impar ('+pizza.nombre+') ID: ' +pizza.id+'');
  }
})
console.log('-------------------');

//b) Responder: ¿Hay alguna pizza que valga menos de $600?
console.log('-Pizzas con valor menor a 600-');
let barata = pizzas.find((element) => element.precio < 600)
console.log('Esta pizza vale menos de $600: '+barata.nombre+' (valor '+barata.precio+(')'))
console.log('-------------------');


//c) El nombre de cada pizza con su respectivo precio.
console.log('-Todas las pizzas y su precio-');
pizzas.forEach(pizza => {
  console.log('La '+pizza.nombre +' vale $'+ pizza.precio)
});
console.log('-------------------');


//d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo).
console.log('-Todos los ingredientes de cada pizza-');
pizzas.forEach(pizza => {
  let ing = (pizza.ingredientes).join(', ');
  console.log('Los ingredientes de la '+pizza.nombre+' son: '+ ing);
})
console.log('-------------------');
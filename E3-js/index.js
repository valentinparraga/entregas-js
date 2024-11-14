const numberInput = document.querySelector(".number__input");
const submitBtn = document.querySelector(".submit__btn");
const form = document.querySelector(".form");
const pizzaContainer = document.querySelector(".card");
const errorContainer = document.querySelector(".feed__text");

const pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "Pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "Pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "Pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const createCardTemplate = (pizza) => {
  return `
  <div class="card__container">
      <h3 class="card__id"> #${pizza.id}</h3>
      <h2 class="card__name"> ${pizza.nombre}</h2>
      <h4 class="card__price">$${pizza.precio}</h4>
      <h4 class="card__ingredients">Ingredientes: ${pizza.ingredientes}</h4>
      <img class="card__img" src="${pizza.imagen}">
  </div>
`}

const validateInput = (number) =>{
  // mayor o igual a 0 (inicio del array) // menor o igual a 4 (limite del vector)
  return number >= 1 && number <= 5;
} 

const saveToLocalStorage = (pizza) =>{
  localStorage.setItem('lastPizza', JSON.stringify(pizza));
}

const renderPizza = (pizza) =>{
  pizzaContainer.innerHTML = createCardTemplate(pizza);
}

const showError = (msg) =>{
  return errorContainer.innerHTML = msg;
}

const addPizza = (e) =>{
  e.preventDefault();
  //si el input esta vacio
  if(!numberInput.value){
    pizzaContainer.classList.add("hidden");  //ocultar el container
    errorContainer.classList.remove("hidden") //mostrar el error
    showError('Por favor ingresa un número');
    localStorage.clear();
    form.reset();
    return
  }
  //si el input no es valido
  if(!validateInput(numberInput.value)){
    pizzaContainer.classList.add("hidden");  //ocultar el container
    errorContainer.classList.remove("hidden") //mostrar el error
    showError('Ingrese un numero válido');
    localStorage.clear();
    form.reset();
    return
  }
  errorContainer.classList.add("hidden"); //esconder el errror
  pizzaContainer.classList.remove("hidden");  //mostrar el container
  renderPizza(pizzas[(numberInput.value)-1]); //renderizar la pizza
  saveToLocalStorage(pizzas[(numberInput.value)-1]);  //guardarla en LS
  form.reset();
  return
}
const init = () =>{
  if(localStorage.getItem('lastPizza') != null){
    renderPizza(JSON.parse(localStorage.getItem('lastPizza')));
  };
  form.addEventListener('submit', addPizza);
}
init();


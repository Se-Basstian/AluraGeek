import { listarVideo, agregarProducto, eliminarCard } from "./funciones";

const productosCards = document.querySelector(
  ".productos__cards",
) as HTMLElement;

const inputs = document.querySelectorAll(
  ".agregar__input",
) as NodeListOf<HTMLInputElement>;

const agregarForm = document.querySelector(
  ".agregar__form",
) as HTMLButtonElement;

const botonLimpiar = document.querySelector(
  ".agregar__boton--derecha",
) as HTMLButtonElement;

listarVideo(productosCards, () => {
  const botonesEliminar = productosCards.querySelectorAll(
    ".card__boton-eliminar",
  ) as NodeListOf<HTMLButtonElement>;

  Array.from(botonesEliminar).map((btnEliminar) => {
    btnEliminar.addEventListener("click", () => {
      eliminarCard(btnEliminar);
    });
  });
});

agregarForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const [nombre, precio, imagen] = inputs;

  agregarProducto({
    nombre: nombre.value,
    precio: precio.value,
    imagen: imagen.value,
  });

  Array.from(inputs).map((input) => {
    input.value = "";
  });
});

botonLimpiar.addEventListener("click", () => {
  Array.from(inputs).map((input) => {
    input.value = "";
  });
});

import type { Producto } from "./interfaces";

function crearCard({ id, nombre, precio, imagen }: Producto): HTMLDivElement {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
          <img class="card__img" src=${imagen} alt=${nombre}/>
          <p class="card__nombre">${nombre}</p>
          <p class="card__precio">\$ ${precio}</p>
          <button class="card__boton-eliminar" json-id=${id}></button>
      `;

  return card;
}

export function listarVideo(productosCards: HTMLElement, func: () => void) {
  fetch("http://localhost:3001/productos")
    .then((respuesta) => respuesta.json())
    .then((productos: Array<Producto>) => {
      if (productos.length !== 0) {
        productosCards.innerHTML = "";
        const fragmento = document.createDocumentFragment();

        productos.map((producto) => {
          fragmento.appendChild(
            crearCard({
              id: producto.id,
              nombre: producto.nombre,
              precio: producto.precio,
              imagen: producto.imagen,
            }),
          );
        });

        productosCards.appendChild(fragmento);
        func();
      } else {
        throw new Error("No hay producto disponible que listar.");
      }
    })
    .catch((error) => {
      console.error(`Error al consumir la «API» ${error}`);
    });
}

export function agregarProducto(data: Producto) {
  fetch("http://localhost:3001/productos", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      window.location.reload();
    })
    .catch((error) => console.error("Fallo al ingresar el dato: ", error));
}

export function eliminarCard(boton: HTMLButtonElement) {
  const jsonId = Number(boton.getAttribute("json-id"));

  alert("Se eliminará un producto");

  fetch(`http://localhost:3001/productos/${jsonId}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  })
    .then(() => {
      window.location.reload();
    })
    .catch((error) => {
      alert("Producto no eliminado.");
      console.error(`Error al eliminar: ${error}`);
    });
}

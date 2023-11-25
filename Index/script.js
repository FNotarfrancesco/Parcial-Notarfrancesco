const URL = "https://dolarapi.com/v1/dolares";
const dolares = []

function obtenerDolares() {
    fetch(URL)
        .then((response) => response.json())
        .then((datos) => {
            dolares.push(...datos);
            mostrarDolaresEnDiv();
        });
};

const mostrarDolaresEnDiv = () => {
    const contenedorDolares = document.getElementById('dolares-container');
    contenedorDolares.innerHTML = "";

    dolares.forEach((dolar) => {
        const dolarDiv = document.createElement('div');
        const titulo = document.createElement('h2');
        const compra = document.createElement('p');
        const venta = document.createElement('p');
        const fecha = document.createElement('p');

        titulo.textContent = dolar.nombre;
        dolarDiv.appendChild(titulo);

        if (dolar.compra == null) {
            compra.textContent = `Compra: Precio no encontrado`;
            dolarDiv.appendChild(compra);
        } else {
            compra.textContent = `Compra: $${dolar.compra}`;
            dolarDiv.appendChild(compra);
        }


        if (venta == null) {
            venta.textContent = `Compra: Precio no encontrado`;
            dolarDiv.appendChild(venta);
        } else {
            venta.textContent = `Venta: $${dolar.venta}`;
            dolarDiv.appendChild(venta);
        }


        fecha.textContent = `Fecha de actualización: ${dolar.fechaActualizacion}`;
        dolarDiv.appendChild(fecha);

        contenedorDolares.appendChild(dolarDiv);

    });
};

const mostrarDolares = () => {
    console.log(dolares)
}

document.addEventListener('DOMContentLoaded', obtenerDolares);





//function convertirDolarBlue() {
//    const monto = document.getElementById("monto").value;
//
//    fetch("https://api.dolarapi.com/api/v1/blue")
//        .then(response => response.json())
//        .then(data => {
//            const dolarBlue = data.value;
//            const resultado = monto * dolarBlue;
//            document.getElementById("resultado").innerHTML = `
//          <h4 class="mt-3">Resultado:</h4>
//          <p>${monto} dólares al tipo de cambio blue equivalen a ${resultado.toFixed(2)} pesos argentinos.</p>
//        `;
//        })
//        .catch(error => console.error("Error al obtener el tipo de cambio:", error));
//}
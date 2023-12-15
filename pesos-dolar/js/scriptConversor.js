const URL = "https://dolarapi.com/v1/dolares/blue";
let venta;
const montoPesoInput = document.getElementById('montoPeso');
const montoPesoResultado = document.getElementById('montoPesoResultado');
const montoDolarInput = document.getElementById('montoDolar');
const montoDolarResultado = document.getElementById('montoDolarResultado');

function obtenerDolarBlue() {
    fetch(URL)
        .then((response) => response.json())
        .then((datos) => {
            if (datos && typeof datos === 'object' && datos.venta) {
                venta = datos.venta;
            }
        });
}

montoPesoInput.addEventListener('input', function() {
    let resultado;

    if (montoPesoInput.value.trim() === '') {
        montoPesoResultado.value = '';
    } else {
        resultado = (montoPesoInput.value / venta).toFixed(4);
        montoPesoResultado.value = resultado;
    }
});


montoDolarInput.addEventListener('input', function() {
    let resultado;

    if (montoDolarInput.value.trim() === '') {
        montoDolarResultado.value = '';
    } else {
        resultado = (montoDolarInput.value * venta).toFixed(0);
        montoDolarResultado.value = resultado;
    }
});



document.addEventListener('DOMContentLoaded', obtenerDolarBlue);
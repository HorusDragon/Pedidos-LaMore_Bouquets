
function mostrarColores() {
  const tipo = parseInt(document.getElementById("tipoRamo").value);
  const container = document.getElementById("coloresContainer");
  container.innerHTML = "";
  if (tipo === "mixto") return;
  const cantidad = parseInt(tipo);
  const colores = ["rojo", "blanco", "rosa"];
  for (let i = 1; i <= tipo; i++) {
    const select = document.createElement("select");
    select.id = `color${i}`;
    colores.forEach(color => {
      const option = document.createElement("option");
      option.value = color;
      option.text = color;
      select.appendChild(option);
    });
    container.appendChild(document.createTextNode(`Color ${i}: `));
    container.appendChild(select);
    container.appendChild(document.createElement("br"));
  }
}

function mostrarBilletes() {
  const visible = document.getElementById("billetesCheck").checked;
  document.getElementById("billetesOpciones").style.display = visible ? "block" : "none";
}

function mostrarFrase() {
  const visible = document.getElementById("cinta").value === "si";
  document.getElementById("frase").style.display = visible ? "inline" : "none";
}

document.getElementById("pedidoForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const cantidad = document.getElementById("cantidad").value;
const tipoRamo = document.getElementById("tipoRamo").value;

let tipoTexto = "";
if (tipoRamo === "mixto") {
  tipoTexto = "mixto";
} else {
  const cantidadColores = parseInt(tipoRamo);
  const colores = [];
  for (let i = 1; i <= cantidadColores; i++) {
    const color = document.getElementById(`color${i}`);
    if (color) {
      colores.push(color.value);
    }
  }
  tipoTexto = `${cantidadColores} colores (${colores.join(", ")})`;
}

  const girasol = document.getElementById("girasol").checked ? "Sí" : "No";
  const billetesCheck = document.getElementById("billetesCheck").checked;
  const billetes = billetesCheck ? document.getElementById("billetes").value : "No";
  const cinta = document.getElementById("cinta").value;
  const frase = cinta === "si" ? document.getElementById("frase").value : "";

  const nombre = document.getElementById("nombre").value;
  const mensaje = `Hola, soy ${nombre} y quiero pedir un ramo de ${cantidad} rosas.\n` +
                  `Tipo de ramo: ${tipoTexto} \\n` +
                  `Girasol: ${girasol}\n` +
                  `Billetes: ${billetes}\n` +
                  (frase ? `Cinta: "${frase}"\n` : "");

  const telefono = "525583303362"; // <-- Cambia este número
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    window.location.href = url;
  } else {
    window.open(url, "_blank");
  }
});

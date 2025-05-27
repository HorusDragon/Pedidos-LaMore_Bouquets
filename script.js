function mostrarColores() {
  const tipo = document.getElementById("tipoRamo").value;
  const container = document.getElementById("coloresContainer");
  container.innerHTML = "";
  const colores = ["rojo", "blanco", "rosa"];
  for (let i = 1; i <= tipo; i++) {
    const select = document.createElement("select");
    select.name = `color${i}`;
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
  document.getElementById("billetesOpciones").style.display =
    document.getElementById("billetesCheck").checked ? "block" : "none";
}

function mostrarFrase() {
  document.getElementById("frase").style.display =
    document.getElementById("cinta").value === "si" ? "inline" : "none";
}

document.getElementById("pedidoForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const cantidad = document.getElementById("cantidad").value;
  const tipoRamo = document.getElementById("tipoRamo").value;

  const colores = [];
  for (let i = 1; i <= tipoRamo; i++) {
    colores.push(document.getElementById(`color${i}`).value);
  }

  const girasol = document.getElementById("girasol").checked ? "Sí" : "No";

  const billetesActivado = document.getElementById("billetesCheck").checked;
  const billetes = billetesActivado ? document.getElementById("billetes").value : "No";

  const cinta = document.getElementById("cinta").value;
  const frase = cinta === "si" ? document.getElementById("frase").value : "";

  const mensaje =
    `Hola, quiero pedir un ramo de ${cantidad} rosas.\n` +
    `Tipo de ramo: ${tipoRamo} colores (${colores.join(", ")})\n` +
    `Girasol: ${girasol}\n` +
    `Billetes: ${billetes}\n` +
    (frase ? `Cinta: \"${frase}\"\n` : "");

  const telefono = "520000000000"; // número sin +
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
});

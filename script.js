let ingresoArchivo = document.getElementById("ingresoArchivo");
let datosArchivo = document.getElementById("datosArchivo");
ingresoArchivo.addEventListener("change", () => {

    let archivo = ingresoArchivo.files[0];
    if (!archivo) return;
    datosArchivo.innerHTML = `
        <p>Nombre: ${archivo.name}</p>
        <p>Tipo: ${archivo.type}</p>
        <p>Tamaño: ${archivo.size} bytes</p>
        <img src="${URL.createObjectURL(archivo)}">
    `;
});

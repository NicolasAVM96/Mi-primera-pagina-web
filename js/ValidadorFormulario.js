//JS
document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("miFormulario");

  const campoNombre = document.getElementById("nombre");
  const campoCorreo = document.getElementById("correo");
  const campoMensaje = document.getElementById("mensaje");

  const placeholderOriginal = {
    nombre: campoNombre.placeholder,
    correo: campoCorreo.placeholder,
    mensaje: campoMensaje.placeholder
  };

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    // Limpiar estilos y placeholders
    campoNombre.placeholder = placeholderOriginal.nombre;
    campoCorreo.placeholder = placeholderOriginal.correo;
    campoMensaje.placeholder = placeholderOriginal.mensaje;

    const nombre = campoNombre.value.trim();
    const correo = campoCorreo.value.trim();
    const mensaje = campoMensaje.value.trim();

    let errores = 0;

    // Validación: campos vacíos
    if (!nombre) {
      campoNombre.value = "";
      campoNombre.placeholder = "⚠️ Campo obligatorio";
      errores++;
    }

    if (!correo) {
      campoCorreo.value = "";
      campoCorreo.placeholder = "⚠️ Campo obligatorio";
      errores++;
    }

    if (!mensaje) {
      campoMensaje.value = "";
      campoMensaje.placeholder = "⚠️ Campo obligatorio";
      errores++;
    }

    // Validar nombre solo letras
    if (nombre && !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
      campoNombre.value = "";
      campoNombre.placeholder = "⚠️ Solo letras y espacios";
      errores++;
    }

    // Validar correo
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (correo && !correoRegex.test(correo)) {
      campoCorreo.value = "";
      campoCorreo.placeholder = "⚠️ Formato no válido";
      errores++;
    }

    if (errores > 0) {
      return; // Si hay errores, no sigue
    }

    const datos = { nombre, correo, mensaje };
    console.log("Datos del formulario:", datos);
    localStorage.setItem("formulario", JSON.stringify(datos));
    formulario.reset();
  });
});




// document.addEventListener("DOMContentLoaded", function () {//se espera que todo el contenido del htmleste cargado por completo antes de ejecutar el script
//   const formulario = document.getElementById("miFormulario"); //Se guardan los datos del formulario en la constante formulario
//   const erroresDiv = document.getElementById("errores");

//   formulario.addEventListener("submit", function (e) {
//     e.preventDefault(); // Evita que se recargue la página

//     erroresDiv.innerHTML = ""; // Limpia errores guardados anteriormente

//     //Se eliminan los espacios en blanco al principio o al final de cada texto y se guarda en sus respectivas constantes
//     const nombre = document.getElementById("nombre").value.trim();
//     const correo = document.getElementById("correo").value.trim();
//     const mensaje = document.getElementById("mensaje").value.trim();

//     //Se crea una lista para guardar los errores generados
//     let errores = [];

//     //Verifica que los campos no esten vacios
//     if (!nombre || !correo || !mensaje) {
//       errores.push("Todos los campos son obligatorios.");
//     }

//     //Se revisa que el nombre solo contenga letras y espacios usando una expresión regular
//     if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
//       errores.push("El nombre solo debe contener letras y espacios.");
//     }

//     //Se declara una expresión regular que representa un formato válido de correo electrónico.
//     const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     //Se verifica si el correo cumple el formato esperado
//     if (!correoRegex.test(correo)) {
//       errores.push("El correo no tiene un formato válido.");
//     }

//     //Si hay 1 error o mas, mostrara un mensaje con los errores pillados
//     if (errores.length > 0) {
//       erroresDiv.innerHTML = errores.map(err => `<p>${err}</p>`).join("");
//       return;
//     }

//     // Se cuardan las 3 constantes en un diccionario llamado "datos"
//     const datos = { nombre, correo, mensaje };
//     console.log("Datos del formulario:", datos); // Aquí se muestran los datos en consola
//     localStorage.setItem("formulario", JSON.stringify(datos)); // Guardar en localStorage
//     formulario.reset(); // Limpia el formulario
//   });
// });

//JQUERY
// $(document).ready(function () {
//   $("#miFormulario").submit(function (e) {
//     e.preventDefault();

//     // Limpiar errores anteriores
//     $("#errores").html("");

//     // Obtener valores del formulario
//     const nombre = $("#nombre").val().trim();
//     const correo = $("#correo").val().trim();
//     const mensaje = $("#mensaje").val().trim();

//     let errores = [];

//     // Validar que no estén vacíos
//     if (!nombre || !correo || !mensaje) {
//       errores.push("Todos los campos son obligatorios.");
//     }

//     // Validar que el nombre tenga solo letras y espacios
//     if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
//       errores.push("El nombre solo debe contener letras y espacios.");
//     }

//     // Validar formato de correo electrónico
//     const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!correoRegex.test(correo)) {
//       errores.push("El correo no tiene un formato válido.");
//     }

//     // Si hay errores, mostrarlos
//     if (errores.length > 0) {
//       $("#errores").html(errores.map(err => `<p>${err}</p>`).join(""));
//       return;
//     }

//     // Guardar los datos en localStorage
//     const datos = { nombre, correo, mensaje };
//     localStorage.setItem("formulario", JSON.stringify(datos));

//     // Mostrar éxito y limpiar formulario
//     alert("Datos guardados correctamente.");
//     $("#miFormulario")[0].reset();
//   });
// });

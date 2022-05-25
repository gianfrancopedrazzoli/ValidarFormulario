/* eslint-disable linebreak-style */
const $form = document.querySelector('#carta-a-santa');

function validarNombre(nombre) {
    if (nombre.length === 0) {
        return 'debe tener al menos un caracter';
    }
    if (nombre.length >= 50) {
        return 'debe tener menos de 50 caracteres';
    }
    if(!/^[a-z]+$/.test(nombre)) {
        return 'solo acepta letras';
    }
    return '';
}

function validarCiudad(ciudad) {
    if(ciudad.length === 0) {
        return 'elegi una ciuda wacho';
    }
    return 'ok';
}

function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo.length >= 100) {
        return 'el campo es muy largo';
    }
    if (descripcionRegalo.length === 0) {
        return 'el campo no debe estar vacio';
    } if (/[a-z0-9,._ ]/i.test(descripcionRegalo)) {
    return 'validazo';
  }
    return 'ok';
}

function validarFormulario(event) {
    const $form = document.querySelector('#carta-a-santa');
    const errorNombre = validarNombre($form.nombre.value);
    const ciudad = $form.ciudad.value;
    const comportamiento = $form.comportamiento.value;
    const descripcionRegalo = validarDescripcionRegalo($form['descripcion-regalo'].value);

    manejarErrores([errorNombre]);
    manejarErrores(descripcionRegalo);
    event.preventDefault();
}

function manejarErrores(errores) {
    errorNombre = errores[0];
    if (errorNombre) {
        $form.nombre.className = 'error';
    } else {
        $form.nombre.className = '';
    }
}

$form.onsubmit = validarFormulario;

// document.querySelectorAll('*').forEach(
//   (element) => {
//     element.onclick = function () {
//       console.log(this.tagName);
//     };
//   },
// );

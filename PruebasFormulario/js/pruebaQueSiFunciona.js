/* eslint-disable linebreak-style */
const $form = document.querySelector('#carta-a-santa');

function validarNombre(nombre) {
    if (nombre.length === 0) {
        return false;
    }
    if (nombre.length >= 50) {
        return false;
    }
    if(!/^[a-z]+$/.test(nombre)) {
        return false;
    }
    return true;
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

    manejarErrores(errorNombre);
    event.preventDefault();
}

function manejarErrores(errores) {
    if (errores) {
        $form.nombre.className = '';
    } else {
        $form.nombre.className = 'error';
    }
}

$form.onsubmit = validarFormulario;
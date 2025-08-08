function crearUsuarios(nombre, apellido, correoElectronico, ocupacion, edad){

    //validacion

    if (typeof nombre !== "string" || nombre.trim() === ""){
        return "nombre no válido";
    };

    if (typeof apellido !== "string" || apellido.trim() === ""){
        return "apellido no válido";
    };

    if (typeof correoElectronico !== "string" || !correoElectronico.includes("@")){
        return "correo no válido";
    };

    if (typeof ocupacion !== "string" || ocupacion.trim() === ""){
        return "ocupación no válida";
    };

    if (typeof edad !== "number" || edad <= 0){
        return "edad no válida";
    };

    //crear objeto usuario

    const usuario = {
        nombre: nombre.trim(),
        apellido: apellido.trim(),
        correoElectronico: correoElectronico.trim(),
        ocupacion: ocupacion.trim(),
        edad: edad
    };

    return usuario;
}

const usuario1 = crearUsuarios("Felipe","Monterrey","famonterrey@uc.cl","Desarrollador Web",31);
console.log(usuario1);
const usuario2 = crearUsuarios("Belén","Ávila","bavilam@uc.cl","Desarrollador Web",31);
console.log(usuario2);
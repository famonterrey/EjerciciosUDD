function saludo(){

    const idioma = prompt("Ingrese idioma del saludo (español, inglés, francés, alemán):").toLowerCase();
    const nombre = prompt("Ingrese su nombre: ");

    let mensaje = "";
    switch(idioma) {
        case "español":
            mensaje = `Hola, ${nombre}!`;
            break;
        case "inglés":
            mensaje = `Hello, ${nombre}!`;
            break;
        case "francés":
            mensaje = `Bonjour, ${nombre}!`;
            break;
        case "alemán":
            mensaje = `Hallo, ${nombre}!`;
            break;
        default:
            mensaje = `Idioma no reconocido. Hola, ${nombre}!`;
    }
    alert(mensaje);
}

saludo();
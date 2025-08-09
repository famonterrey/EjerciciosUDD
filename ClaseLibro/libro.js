class Producto {
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Libro extends Producto {
    constructor(nombre,precio,autor){
        super(nombre,precio);
        this.autor = autor;
    }
    resumen(){
        console.log(`Nombre del libro: ${this.nombre}`);
        console.log(`Autor del libro: ${this.autor}`);
        console.log(`Precio del libro: ${this.precio}`);
    }
}

//Ejemplo de uso
const libro1 = new Libro("Papelucho",5000,"Marcela Paz");
libro1.resumen();
class Producto {
    constructor (nombre,precio,stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    vender(cantidad){
        if(cantidad <= this.stock){
            this.stock -= cantidad;
            console.log(`Se vendieron ${cantidad} ${this.nombre}. Stock restante: ${this.stock}`);
        } else {
            console.log(`No hay suficiente stock de ${this.nombre}`);
        }
    }
}

//Ejemplo de uso
const producto1 = new Producto("Notebook",800,5);

producto1.vender(2);
producto1.vender(4);
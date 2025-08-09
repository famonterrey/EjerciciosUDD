class Animal {  //clase Padre
    constructor (nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    presentarse(){
        console.log(`Soy ${this.nombre} y tengo ${this.edad} años`);
    }
}

// crear la clase hija que hereda de animal
class Perro extends Animal {
    constructor (nombre,edad,raza){
        super(nombre,edad);  //llama al constructor de animal
        this.raza = raza;      
    }
    ladrar(){
        console.log("¡Guau, guau!")
    }
}

//Ejemplo de uso
const miPerro = new Perro("Firulais",3,"Labrador");
miPerro.presentarse();
console.log(`Raza: ${miPerro.raza}`);
miPerro.ladrar();
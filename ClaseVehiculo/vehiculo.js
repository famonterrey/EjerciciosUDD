class Vehiculo {
    constructor(marca,modelo,anio){
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.estado = "detenido";
    }
    arrancar(){
        this.estado = "en marcha";
        console.log(`el vehículo ${this.marca} ${this.modelo} está en marcha`);
    }
    detener(){
        this.estado = "detenido"
        console.log(`el vehículo ${this.marca} ${this.modelo} está detenido`);
    }
}

//ejemplos de uso
const Auto1 = new Vehiculo("suzuki","swift",4);
Auto1.arrancar();
Auto1.detener();
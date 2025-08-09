class Producto {
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Serie extends Producto {
    constructor(nombre,precio,temporadas = []){
        super(nombre,precio);
        this.temporadas = temporadas;
    }

    verEpisodios(numTemporada, numEpisodio){
        const temporada = this.temporadas[numTemporada - 1];
        const episodio = temporada.episodios[numEpisodio - 1];
        if(!episodio.visto){
            episodio.visto = true;
            console.log(`Episodio ${this.temporadas[numTemporada-1].episodios[numEpisodio-1].nombreEpisodio} de la temporada ${numTemporada} visto`);
        } else {
            console.log(`Episodio ${this.temporadas[numTemporada-1].episodios[numEpisodio-1].nombreEpisodio} de la temporada ${numTemporada} ya lo viste`);
        }
    }
}

class Episodio {
    constructor(nombreEpisodio){
        this.nombreEpisodio = nombreEpisodio;
        this.visto = false;
    }
}

class Temporada {
    constructor(episodios = []){
        this.episodios = episodios;
    }
    episodiosPorVer(){
        let contador = 0;
        this.episodios.forEach(p => {
            if (!p.visto){
                contador ++;
            }
        });
        console.log(`Cantidad de episodios por ver ${contador}`);
    }
}

// Crear episodios
const ep1 = new Episodio("Piloto");
const ep2 = new Episodio("El regreso");
const ep3 = new Episodio("El final");

// Crear temporadas
const temporada1 = new Temporada([ep1, ep2]);
const temporada2 = new Temporada([ep3]);

// Crear una serie
const miSerie = new Serie("Mi Serie Favorita", 100, [temporada1, temporada2]);

// Ver episodios
miSerie.verEpisodios(1, 1); // Marca el episodio 1 de la temporada 1 como visto

// Probar cantidad de episodios por ver en cada temporada
temporada1.episodiosPorVer(); // Debería mostrar 1 (solo ep2 no visto)
temporada2.episodiosPorVer(); // Debería mostrar 1 (ep3 no visto)
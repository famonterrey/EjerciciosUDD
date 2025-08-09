function manejoTienda (productosIniciales){
    const inventario = [...productosIniciales];

    return {
        //metodo para agregar producto
        agregarProducto(producto){
            const existe = inventario.find(p => p.nombre === producto.nombre);

            if(existe){
                return "Producto ya existe en el inventario";
            }
            if(!producto.nombre || producto.precio <= 0 || producto.cantidad <= 0){
                return "Datos del producto no son válidos";
            }
            inventario.push(producto);
            return "Producto agregado exitosamente";
        },

        //metodo para eliminar producto
        eliminarProducto(nombreProducto){
            const index = inventario.findIndex(p => p.nombre === nombreProducto);
            if(index !== -1){
                inventario.splice(index,1);
                return "Producto " + nombreProducto + " elminado";
            } else {
                return "Producto " + nombreProducto + " no encontrado"
            }
        },

        //metodo para calcular el valor total del inventario
        valorTotal(){
            return inventario.reduce((total, producto) => {
                return total + producto.precio * producto.cantidad;
            }, 0)
        },

        mostarInventario(){
            return inventario;
        }
    };
}

const producto = [
    {nombre: "manzana", precio: 5, cantidad: 10},
    {nombre: "mouse", precio: 25, cantidad:5}
];

const tienda = manejoTienda(producto);
console.log(tienda.agregarProducto({nombre: "teclado", precio: 15, cantidad: 7}));
console.log(tienda.valorTotal());
console.log(tienda.eliminarProducto("mouse"));
console.log(tienda.mostarInventario());
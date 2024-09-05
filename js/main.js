//Realizamos unas objetos de tal manera que contienen informacion del producto
//Apartado de funciones 
//__________________________________________________________________________________

//Funcion que crea productos de tipo objeto
function crearProducto(id, nameProduct, description, price, stock, productos) {
    productos.push(new Producto(id, nameProduct, description, price, stock))
    console.log("Se ingreso el producto correctamente");
}
//Funcion que imprime los productos disponibles
function listarProductos(productos) {
    console.log("Lista de productos:");
    productos.forEach((productos) => console.log(productos.nameProduct));
}

//Funcion que busca un producto por su nombre
function buscarProducto(productos, buscado) {
    buscado = prompt("Ingrese el producto:").toUpperCase();
    const resultado = productos.find((productos) => productos.nameProduct === buscado);
    if (resultado != undefined) {
        console.log("El elemento encontrado es: " + resultado.nameProduct);
        console.log("El numero ID de producto es: " + resultado.id);
    }
    else {
        console.log("El elemento no fue encontrado");
    }
    return resultado;
}

//Funcion que permite agregar un producto al carrito
function agregarCarrito(productos, carrito) {
    let valor = true;
    do {
        console.log("Lista de productos:\n");
        listarProductos(productos);
        const opcion = prompt("Desea agregar un producto al carrito de compras?\n1) Si\n2) No");
        if (opcion == 1) {
            listarProductos(productos);
            const buscado = prompt("Que producto desea agregar al carrito de compras? (escriba detalladamente el producto)");
            const producto = buscarProducto(productos, buscado);
            carrito.push(producto);
            console.log("El producto se agrego correctamente");
            valor = true;
        }
        else {
            console.log("Muchas gracias");
            valor = false;
        }
    }
    while (valor == true);
}

//Funcion que filtra segun el producto
function filtradoPorNombre(productos,filtro) {
    const filtros = productos.filter(producto => producto.nameProduct.includes(filtro))
    filtros.forEach((filtros) => console.log(filtros.nameProduct));
    return filtros;
}

// ________________________________________________________________________________________
//Creamos una clase producto en el que los objetos son de tipo producto
class Producto {
    constructor(id, nameProduct, description, price, stock) {
        this.id = parseInt(id);
        this.nameProduct = nameProduct.toUpperCase();
        this.description = description.toLowerCase();
        this.price = parseFloat(price);
        this.stock = parseInt(stock);

    }
}
const productos = [];
crearProducto("001", "Bateria Iphone 11", "Marca Foxcon", "30000", "10", productos);
crearProducto("002", "Bateria Iphone 12", "Marca Foxcon", "32000", "8", productos);
crearProducto("003", "Bateria Iphone 13", "Marca Foxcon", "35000", "15", productos);
crearProducto("004", "Modulo Iphone 11", "Marca generica", "45000", "5", productos);
crearProducto("005", "Modulo Iphone 12", "Marca generica", "48000", "6", productos);
crearProducto("006", "Modulo Iphone 13", "Marca generica", "53000", "3", productos);

//Creamos un array carrito de compras para acumular los productos de interes usuario
const carrito = [];
agregarCarrito(productos, carrito);
const filtro = "BATERIA";
const filtros = filtradoPorNombre(productos,filtro);
console.log("Los elementos filtrados son:");
listarProductos(filtros);
debugger

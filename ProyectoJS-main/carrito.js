const productos = [
    { nombre: "Remera", precio: 1501},
    { nombre: "Jean", precio: 11100},
    { nombre: "Campera", precio: 12150},
    { nombre: "Boxer", precio: 1200},
    { nombre: "Zapatillas", precio: 22250},
];
let carrito = []

let seleccion = prompt ("Desea comprar un producto? si o no")

while(seleccion != "si" && seleccion != "no"){
    alert ("por favor ingresar si o no")
    seleccion = prompt ("Hola desea comprar algo? si o no")
}
if(seleccion == "si"){
    alert("Nuestra lista de productos")
    let todoslosProductos =  productos.map (
        (producto) => producto.nombre + " " +  producto.precio + "$"
    );
    alert(todoslosProductos.join(" - "));
} else if (seleccion == "no"){
    alert("gracias por visitar nuestra web, hasta luego!")
}
while(seleccion != "no"){
    let producto = prompt ("agrega un producto a tu carrito")
    let precio = 0

    if(producto == "Remera" || producto == "Jean" || producto == "Campera" || producto== "Boxer" || producto== "Zapatillas" ){
        switch (producto) {
            case "Remera":
                precio = 1501;
                break;
            case "Jean":
                precio = 11100;
                break;
            case "Campera":
                precio =12150;
                break;
            case "Boxer":
             precio =1200;
                break;
            case "Zapatillas":
             precio =22250;
                break;
                default:
                break;
        }
    let unidades = parseInt(prompt("cuantas unidades quiere comprar?"))
   
    carrito.push({producto, unidades, precio})
    console.log(carrito)}
     else {
        alert("No tenemos stock de ese producto")
    }
    seleccion = prompt("Quiere seguir comprando? si o no")
    while(seleccion === "no"){
        alert("Muchas gracias por su compra")
        carrito.forEach((carritoFinal) =>{
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por podructo ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`El total a pagar es: ${total}`)












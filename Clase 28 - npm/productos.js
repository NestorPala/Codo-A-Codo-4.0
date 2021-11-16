const productos = [

    {id: 1, name: 'Producto numero 1'},
    {id: 2, name: 'Producto numero 2'},
    {id: 3, name: 'Producto numero 3'},
]


const all = () => productos;

const find = (id) => productos.find(producto => producto.id == id);


module.exports = {
    all,
    find
}
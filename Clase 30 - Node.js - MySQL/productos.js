const productos = [
    {id: 1, name: 'Producto Nro 1'},
    {id: 2, name: 'Producto Nro 2b'},
    {id: 3, name: 'Producto Nro 3'},
    {id: 99, name: 'Producto Nro 99'},
]

const all = () => productos
// const all = function() {
//     return productos
// }

const find = (id) => productos.find(producto => producto.id == id)

module.exports = {
    all,
    find
}
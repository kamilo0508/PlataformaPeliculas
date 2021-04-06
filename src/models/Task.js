const mongoose = require('mongoose')
const{ Schema } = mongoose

const Task = new Schema({
    imagen:String,
    titulo: String,
    descripcion:String,
    duracion: String,
    categorias:String,
    trailer: String,
    fechaestreno:String
})

module.exports = mongoose.model('Task' , Task)
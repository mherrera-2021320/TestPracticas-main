const { Schema, model } = require('mongoose');

const VehiculoSchema = Schema({

    marca: {
        type: String,
        required: [true, 'Ingresa la Marca del Automovil']
    },

    modelo: {
        type: String,
        required: [true, 'Ingresa el Modelo del Automovil']
    },

    año: {
<<<<<<< HEAD
        type: String, 
=======
        type: Number, 
>>>>>>> 0ee02ff6e45a9ea941b9864b8b5c25de030d138c
        required: [true, 'Ingresa el año del Automovil']
    },

    fechaCompra:{
<<<<<<< HEAD
        type: String,
=======
        type: Date,
>>>>>>> 0ee02ff6e45a9ea941b9864b8b5c25de030d138c
        required: [true, 'Ingresa la fecha en la cual se compro el Vehiculo']
    },

    estadoVehiculo: {
        type: Boolean,
        default: true
    },


})

module.exports = model('Vehiculo', VehiculoSchema);
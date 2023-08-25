const { response, request } = require('express');
<<<<<<< HEAD
=======

>>>>>>> 0ee02ff6e45a9ea941b9864b8b5c25de030d138c
const Vehiculos = require('../models/vehiculos')


const getVehiculos = async (req = request, res = response) => {
<<<<<<< HEAD
    try {
        const vehiculo = await Vehiculos.find();
        res.json(vehiculo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const postVehiculo = async (req = request, res = response) => {
    const vehiculo = new Vehiculos({
        marca: req.body.marca,
        modelo: req.body.modelo,
        año: req.body.año,
        fechaCompra: req.body.fechaCompra,
    });

    try {
        const newVehiculo = await vehiculo.save();
        res.status(201).json(newVehiculo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


const putVehiculo = async (req = request, res = response) => {
    try {
        const updateVehiculo = await Vehiculos.findByIdAndUpdate(
            req.params.id,
            {
                marca: req.body.marca,
                modelo: req.body.modelo,
                año: req.body.año,
                fechaCompra: req.body.fechaCompra,
            },
            { new: true } // Devolver el elemento actualizado en la respuesta
        );
        res.json(updateVehiculo);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteVehiculo = async (req = request, res = response) => {
    try {
        await Vehiculos.findByIdAndRemove(req.params.id);
        res.json({ message: 'Item deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {

    getVehiculos,
    postVehiculo,
=======

    const listaVehiculos = await Promise.all([
        Vehiculos.countDocuments(),
        Vehiculos.find(),
    ]);

    res.json({
        msg: 'GET API de Vehiculos',
        listaVehiculos
    });

}


const postVehiculos = async (req = request, res = response) => {

    const { marca, modelo, año, fechaCompra  } = req.body;
    const vehiculoDB = new Vehiculos({ marca, modelo, año, fechaCompra });

    await vehiculoDB.save();

    res.json({
        msg: 'POST API de Vehiculo',
        vehiculoDB
    });

}

const putVehiculo = async (req = request, res = response) => {

    const { id } = req.params;

    const { _id, ...resto } = req.body;

    const vehiculoEditado = await Vehiculos.findByIdAndUpdate(id, resto, { new: true })


    res.status(200).json({
        msg: 'PUT API de Vehiculo',
        vehiculoEditado
    });

}

const deleteVehiculo = async (req = request, res = response) => {

    const { id } = req.params;
    const deleteVehiculo = await Vehiculos.findByIdAndDelete(id)

    res.json({
        msg: 'DELETE API de Vehiculo',
        deleteVehiculo
    });

}

module.exports ={

    getVehiculos,
    postVehiculos,
>>>>>>> 0ee02ff6e45a9ea941b9864b8b5c25de030d138c
    putVehiculo,
    deleteVehiculo

}
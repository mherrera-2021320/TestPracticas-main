<<<<<<< HEAD
const { getVehiculos, postVehiculo, putVehiculo, deleteVehiculo } = require('../controllers/vehiculos');
const express = require('express');
const router = express.Router();

// Obtener todos los elementos
router.get('/vehiculo', getVehiculos);

// Crear un elemento nuevo
router.post('/vehiculo', postVehiculo);

// Actualizar un elemento por su ID
router.put('/vehiculo/:id', putVehiculo);

// Eliminar un elemento por su ID
router.delete('/vehiculo/:id', deleteVehiculo);
=======
const { Router } = require('express');
const { getVehiculos, postVehiculos, putVehiculo, deleteVehiculo } = require('../controllers/vehiculos');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const vehiculos = require('../models/vehiculos');

const router = Router();

router.get('/ver', async (req, res) => {
    try {
        const items = await vehiculos.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.post('/agregar', async (req, res) => {
    const item = new vehiculos({
        marca: req.body.marca,
        modelo: req.body.modelo,
        año: req.body.modelo,
        fechaCompra: req.body.modelo,
    });

    try {
        const newItem = await item.save();
        res.status(201).json(newItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// router.post('/vehiculo', [

//     check('marca', 'Ingresa la marca del Automovil').not().isEmpty(),
//     check('modelo', 'Ingresa el modelo del Automovil').not().isEmpty(),
//     check('año', 'Ingresa el año del Automovil').not().isEmpty(),
//     check('año', 'Ingresa el año del Automovil').isLength({max: 4}),
//     check('fechaCompra', 'Ingresa la marca del Automovil').not().isEmpty(),
//     validarCampos
// ], postVehiculos);

router.put('/vehiculo/:id', [

    check('id', 'No es un ID valido').isMongoId(),
    check('marca', 'Ingresa la marca del Automovil').not().isEmpty(),
    check('modelo', 'Ingresa el modelo del Automovil').not().isEmpty(),
    check('año', 'Ingresa el año del Automovil').not().isEmpty(),
    check('año', 'Ingresa el año del Automovil').isLength({ max: 4 }),
    check('fechaCompra', 'Ingresa la marca del Automovil').not().isEmpty(),
    validarCampos
], putVehiculo);

// router.delete('/delete/:id', deleteVehiculo);
router.delete('/items/:id', async (req, res) => {
    try {
        await Item.findByIdAndRemove(req.params.id);
        res.json({ message: 'Item deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
>>>>>>> 0ee02ff6e45a9ea941b9864b8b5c25de030d138c


module.exports = router; 
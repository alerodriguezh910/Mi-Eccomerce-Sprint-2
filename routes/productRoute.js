const express = require('express');
const router = express.Router(); 


const controller = require('../controllers/productController');


router.get('/', controller.login);
router.get('/register', controller.register);
router.post('/register', controller.procesarRegister);
router.get('/index', controller.index);
router.get('/descripcion', controller.descripcion);
router.get('/descripcionRiver', controller.descripcionRiver);
router.get('/checkout', controller.checkout);
router.get('/carrito', controller.carrito);



module.exports = router;
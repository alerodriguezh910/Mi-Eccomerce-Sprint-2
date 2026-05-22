const express = require('express');
const router = express.Router();

const controller = require('../controllers/productController');

router.get('/', controller.login);
router.get('/register', controller.register);
router.post('/register', controller.procesarRegister);
router.get('/index', controller.index); // <-- Esta es la ruta de tu Home
router.get('/checkout', controller.checkout);
router.get('/carrito', controller.carrito);
router.get('/products/:id', controller.descripcion);

module.exports = router;
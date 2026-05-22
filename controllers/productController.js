const fs = require('fs');
const path = require('path');

const productController = {

    login: (req, res) => {
        res.render('pages/login');
    },

    register: (req, res) => {
        res.render('pages/register');
    },

    procesarRegister: (req, res) => {
        res.redirect('pages/index');
    },

    checkout: (req, res) => {
        res.render('pages/checkout');
    },

    carrito: (req, res) => {
        res.render('pages/carrito');
    },

    index: (req, res) => {
        try {

            const productsFilePath = path.join(__dirname, '../data/productos.json');
            const productsData = fs.readFileSync(productsFilePath, 'utf-8');
            const allProducts = JSON.parse(productsData);


            let destacados = allProducts.filter(producto => producto.destacado === true);


            destacados = destacados.sort(() => 0.5 - Math.random());


            const sugeridos = destacados.slice(0, 5);


            res.render('pages/index', { sugeridos: sugeridos });

        } catch (error) {
            console.error("Error cargando la Home:", error);

            res.render('pages/index', { sugeridos: [] });
        }
    },

    descripcion: (req, res) => {

        const productsFilePath = path.join(__dirname, '../data/productos.json');
        const productsData = fs.readFileSync(productsFilePath, 'utf-8');
        const allProducts = JSON.parse(productsData);

        const productId = parseInt(req.params.id);
        const productoPrincipal = allProducts.find(p => p.id === productId);

        if (!productoPrincipal) {
            return res.status(404).send('No se encontro el producto');
        }

        let relacion = allProducts.filter(
            p => p.categoria &&
                p.categoria === productoPrincipal.categoria &&
                p.id !== productId
        );

        if (relacion.length > 4) {
            relacion = relacion.sort(() => 0.5 - Math.random());
        }

        relacion = relacion.slice(0, 4);

        res.render('pages/descripcion', {
            producto: productoPrincipal,
            relacion: relacion
        });

    }
};

module.exports = productController;
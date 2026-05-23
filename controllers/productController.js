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

            let destacados = allProducts.filter(
                producto => producto.destacado === true
            );

            destacados = destacados.sort(() => 0.5 - Math.random());

            const sugeridos = destacados.slice(0, 5);

            let masPedidos = [...destacados];

            if (masPedidos.length < 10) {

                const otros = allProducts.filter(
                    p => p.destacado !== true
                );

                masPedidos = [...masPedidos, ...otros];
            }

            masPedidos = masPedidos.sort(() => 0.5 - Math.random());

            const top10 = masPedidos.slice(0, 10);

            res.render('pages/index', {
                topProducts: top10,
                sugeridos: sugeridos
            });

        } catch (error) {

            console.error(
                "Error cargando los productos en la Home:",
                error
            );

            res.render('pages/index', {
                topProducts: [],
                sugeridos: []
            });
        }
    },

    descripcion: (req, res) => {

        const productsFilePath = path.join(
            __dirname,
            '../data/productos.json'
        );

        const productsData = fs.readFileSync(
            productsFilePath,
            'utf-8'
        );

        const allProducts = JSON.parse(productsData);

        const productId = parseInt(req.params.id);

        const productoPrincipal = allProducts.find(
            p => p.id === productId
        );

        if (!productoPrincipal) {

            return res
                .status(404)
                .send('No se encontro el producto');
        }

        let relacion = allProducts.filter(
            p =>
                p.categoria &&
                p.categoria === productoPrincipal.categoria &&
                p.id !== productId
        );

        if (relacion.length > 4) {

            relacion = relacion.sort(
                () => 0.5 - Math.random()
            );
        }

        relacion = relacion.slice(0, 4);

        res.render('pages/descripcion', {
            producto: productoPrincipal,
            relacion: relacion
        });

    },

    // =========================
    // BUSCADOR DE PRODUCTOS
    // =========================

    search: (req, res) => {

        try {

            const query =
                req.query.query?.toLowerCase() || '';

            const productsFilePath = path.join(
                __dirname,
                '../data/productos.json'
            );

            const productsData = fs.readFileSync(
                productsFilePath,
                'utf-8'
            );

            const allProducts = JSON.parse(productsData);

            const resultados = allProducts.filter(
                producto =>
                    producto.nombre
                        .toLowerCase()
                        .includes(query)
            );

            res.render('pages/searchResults', {
                resultados,
                query
            });

        } catch (error) {

            console.error(
                "Error en la búsqueda:",
                error
            );

            res.render('pages/searchResults', {
                resultados: [],
                query: ''
            });
        }
    }
};

module.exports = productController;
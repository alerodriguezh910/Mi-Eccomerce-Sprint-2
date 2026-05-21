app.get('/carrito/checkout', async (req, res) => {
    let carritodesesion = req.session.cart || [];
    let errores = [];
    let carritoValidado = [];
    let total = 0;

    if (carritodesesion.length === 0) {
        return res.redirect('/carrito?error=El carrito está vacío');
    }

    // Supongamos que tienes un modelo de Producto
    for (let item of carritodesesion) {
        const productoBD = await Producto.findById(item.id);

        if (!productoBD) {
            errores.push(`El producto ${item.nombre} ya no está disponible.`);
            continue; // Se salta este producto porque ya no existe
        }

        // Validar Stock
        let cantidadValida = item.cantidad;
        if (item.cantidad > productoBD.stock) {
            cantidadValida = productoBD.stock;
            errores.push(`Solo quedan ${productoBD.stock} unidades de ${productoBD.nombre}. Ajustamos tu carrito.`);
        }

        if (cantidadValida > 0) {
            let subtotal = cantidadValida * productoBD.precio;
            total += subtotal;

            carritoValidado.push({
                id: productoBD._id,
                nombre: productoBD.nombre,
                precio: productoBD.precio, // Precio fresco de la BD
                cantidad: cantidadValida,
                subtotal
            });
        }
    }

    // Guardamos el carrito limpio y validado de nuevo en la sesión
    req.session.cart = carritoValidado;
    req.session.total = total;

    // Renderizamos EJS pasando el carrito limpio y los errores si los hubo
    res.render('checkout', {
        carrito: carritoValidado,
        total: total,
        errores: errores.length > 0 ? errores : null
    });
});
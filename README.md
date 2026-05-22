# Mi-Eccomerce-Sprint-2
Segundo trabajo práctico de la materia "Web 1" de la carrera "Programación Universitaria de Sistemas" de la **Universidad Nacional de Villa Mercedes (UNViMe)**.

## 🚀 Descripción del Sprint 2
En este segundo sprint, el enfoque principal ha sido estructurar, maquetar e interactuar con la interfaz de usuario del e-commerce. Se implementaron validaciones rigurosas para el registro de usuarios y se estilizó de forma interactiva la vista del carrito de compras.

## ✨ Características Implementadas

### 1. Validación de Formulario de Registro (`validacionesRegistro.js`)
- Prevención del envío de formularios vacíos mediante validación del lado del cliente.
- Verificación de campos obligatorios (nombre, apellido, email).
- **Seguridad estricta de contraseñas:** 
  - Longitud mínima de 8 caracteres.
  - Obligatoriedad de contener letras, números y caracteres especiales.
  - Restricción de contraseñas inseguras/comunes (ej: "password", "1234", "qwerty", el nombre del sitio web o el nombre propio del usuario).
- Comprobación de coincidencia de contraseñas en tiempo de registro.

### 2. Estilos y Maquetación del Carrito (`carrito.css`)
- Diseño fluido y moderno utilizando **Flexbox** para asegurar la adaptabilidad.
- Estilización de las tarjetas de los productos en el carrito con una animación continua de bordes RGB (`@keyframes borde-rgb`).
- Barra de navegación principal fijada en la parte superior.
- Footer dinámico ("Sticky Footer") posicionado correctamente en el fondo de la pantalla incluso cuando hay pocos elementos en la vista.

## 🛠️ Tecnologías Utilizadas
- **HTML5** para el maquetado semántico.
- **CSS3** para el diseño responsivo, Flexbox y animaciones visuales.
- **JavaScript (Vanilla)** para el control del DOM y comprobación de RegEx (Expresiones regulares) en los formularios.

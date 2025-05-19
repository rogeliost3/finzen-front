![logo](src/assets/logo-apaisado-150.png)


# Finzen APP
Frontend para Finzen API, aplicación responsiva para cualquier dispositivo.

# Objetivo:
- Tener controlados los gastos personales y poder llegar a fin de mes sin sustos
- Establecer metas de ahorro
- Crear presupuestos anuales por categoría de gastos.
- Reportes del estado de los presupuestos y metas alcanzadas o no.

# Opciones implementadas en la app:
- Alta / baja de usuarios.
- Login / logout.
- Alta de presupuestos. 
- Alta, edición y borrado de Metas de ahorro.
- Reporte anual de presupuestos.
- Reporte de metas alcanzadas o no.
- Consulta filtrada de los movimientos de la cuenta por fechas y categorías.

# Requerimientos:
- chart.js 4.4.9
- react 19.0.0
- react-chartjs-2 5.3.0
- react-dom 19.0.0
- react-router-dom 7.5.3
- vitejs/plugin-react-swc 3.8.0
- eslint 9.22.0
- eslint-plugin-react-hooks 5.2.0
- eslint-plugin-react-refresh 0.4.19
- globals 16.0.0
- vite 6.3.1

# Puesta en marcha:
Ejecutar :
  npm run dev 
  (dev: script de vite definido en package.json)

# TO-DOs mas importantes pendientes:
- Evitar que el admin pueda hacer delete de su propio usuario! 
- Acabar la página de edición de budgets en modo lista, igual que la de goals para poder editarlos y borrarlos.
- Cambiar al sistema de autenticación con cookies.
- Hacer menu hamburguesa para móvil.
- Submenú queda por debajo de panel de goals y a veces se desborda por la derecha de la pantalla, ponerle justificacion a la derecha.
- Dar opacidad al recuadro en Landig para que se lea mejor el texto y ponerle sombra de contraste.
- Usar pagina de confirmacion para borrados de datos.
- Poner oldPassword y newPassword.
- Crear endpoint de cambio de password en API.
- Mostrar pagina con datos de perfil de usuario.
- Hacer que categories aparezca por defecto All seleccionada para ver todos los movimientos.
- Que se admita undefined en campos de fecha para que busque desde siempre.
- Hacer transparente la section que rodea a los charts, para que se vea el fondo del landing.
- Mostrar los totales en un nuevo componente. 
- Agregar paginado a listado de transacciones inicialmente.
- Comportamiento de la visibilidad de los botones de la pantalla de edicion de budgets y de goals.
- Mostrar pantalla con mensaje de despedida.
- Meter los datos del usuario logeado en los charts de pagina inicial de usuario.

# HERRAMIENTAS UTILIZADAS:
- React, Vite, Node JS, Express, Sequelize.
- Postman, Docker, MySQL, WorkBench.
- Técnicas de React:
  - createContext, useState, useEffect, Navigate
  - useLoaderData, useRouterLoaderData, Outlet
  - localStorage, JWT, createRoot, RouterProvider
/**
 * PATRONES DE DISEÑO
 * SON PROPUESTAS Y CASOS DE USO QUE PERMITEN RESOLVER PROBLEMAS COTIDIANOS
 * 
 * 1. MODULE PATTERN - PATRÓN MODULAR
 * 
 * APLICA VALIDEZ DE IMPORTACIONES Y EXPORTACIONES EN UN PROYECTO
 * 
 */


// 1. IMPORTACIONES
// PROCESO DE TRAERNOS FUNCIONES O VARIABLES DE OTROS ARCHIVOS JS A ESTE

// A. ARCHIVOS EXTERNOS PROPIOS 
// const sumita = require("./suma")

// B. ARCHIVOS DE NODE_MODULES

// EXPRESS ES UNA LIBRERÍA QUE FUNCIONA PARA LA GESTIÓN DE RUTEOS Y MIDDLEWARES
const express 		= require("express")
const app			= express()


// 2. MIDDLEWARES
    //Activar varibales de entorno
    //si estas en local vale una cosam en remoto vale otra
require("dotenv").config()


// 3. RUTAS
app.use("/", require("./routes/index"))


// 4. SERVIDOR
app.listen(process.env.PORT, () => {
	console.log("Servidor activo")
})
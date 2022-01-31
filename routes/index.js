// 1. IMPORTACIONES
const express 		= require("express")
const router		= express.Router()



// 2. RUTEO
router.get("/", (req, res) => {

	res.send("Hola mundo")

})

router.get("/contacto", (req, res) => {
    res.send("este es un contacto")
})

router.get("/about", (req, res) => {
    res.send("este es el about")
})



// 3. EXPORTACIÓN
module.exports = router
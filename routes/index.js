// 1. IMPORTACIONES
const express 		= require("express")
const router		= express.Router()



// 2. RUTEO
router.get("/", (req, res) => {

	res.send("Hola mundo")

})

router.get("/contacto", () => {
    res.send("contacto")
})


// 3. EXPORTACIÓN
module.exports = router
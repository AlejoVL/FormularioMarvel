const path = require('path')
const controller = {}

controller.index = (req, res) => {
    res.send('La conexion se ha establecido desde el controlador');
}

controller.formularioMarvel = (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/formularioMarvel.html'))
}

module.exports = controller
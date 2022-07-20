
const { Router } = require('express');

const { usuariosGet } = require('../controllers/usuarios');

const router = Router();



router.get('/', usuariosGet)

router.put('/', (req, res) => {
    res.json({
        msg: 'put del API'
    });
})

router.post('/', (req, res) => {
    res.json({
        msg: 'post del API'
    });
})

router.delete('/', (req, res) => {
    res.json({
        msg: 'delete  del API'
    });
})




module.exports = router;
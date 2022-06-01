const { response, request } = require('express')


const usuariosGet = (req = request, res = response) => {

    const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;

    res.json({
        "mg": "get API - controlador",
        q,
        nombre,
        apikey,
        page,
        limit
    });
};

const usuariosPost = (req, res = response) => {

    const { nombre, edad } = req.body;

    res.json({
        "mg": "post API - controlador",
        nombre,
        edad
    });
};

const usuariosPut = (req, res = response) => {
    // viene en la respuesta? no viene en el request xq es el que esta solicitando

    const { id } = req.params;

    res.json({
        "mg": "put API - controlador",
        id
    });
};
const usuariosPatch = (req, res = response) => {

    res.json({
        "mg": "patch API - controlador"
    });
};

const usuariosDelete = (req, res = response) => {
    res.json({
        "mg": "delete API - controlador"
    });
};



module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
}
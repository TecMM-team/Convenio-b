const { Router } = require("express");
const { subirDocumentos, tiposDocumentos, obtenerAnexos, deleteAnexo, descargarAnexo } = require('../controllers/media');
const { uploadMultipleFields } = require('../middlewares/multerMiddleware');
const { authMiddleware } = require("../middlewares/authMiddleware");

const routerMedia = Router();

routerMedia.post('/upload', authMiddleware(), uploadMultipleFields, subirDocumentos);
routerMedia.get('/tipos', authMiddleware(), tiposDocumentos);
routerMedia.get('/anexo/:idConvenio', authMiddleware(), obtenerAnexos);
routerMedia.delete('/anexo/:idAnexo', authMiddleware(), deleteAnexo);
routerMedia.get('/download/:idConvenio/:docKey', authMiddleware(), descargarAnexo);

module.exports = (app) => {
    app.use('/media', routerMedia);
};

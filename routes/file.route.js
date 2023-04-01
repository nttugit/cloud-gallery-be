const router = require('express').Router();
const { FileController } = require('../controllers');
const { singleUploadCtrl } = require('../middlewares/file');

router.get('/stupid-file-name', FileController.getStupidFileName);
router.post('/upload', singleUploadCtrl, FileController.uploadByCloudinary);
router.get('/photos', FileController.getPhotosFromCloudinary);

module.exports = router;

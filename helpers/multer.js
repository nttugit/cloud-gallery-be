const multer = require('multer');

//Multer settings

const ALLOWED_FORMATS = ['image/jpeg', 'image/png', 'image/jpg'];

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    if (ALLOWED_FORMATS.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Not supported file type'), false);
    }
  },
});

const singleUpload = upload.single('file');

module.exports = {
  singleUpload,
};

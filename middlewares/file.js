const { singleUpload } = require('../helpers/multer');

async function singleUploadCtrl(req, res, next) {
  singleUpload(req, res, (error) => {
    if (error) {
      return res.status(422).send({
        message: 'Image upload failed',
      });
    }
    next();
  });
}

module.exports = {
  singleUploadCtrl,
};

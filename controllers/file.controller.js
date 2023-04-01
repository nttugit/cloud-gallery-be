const { FileService } = require('../services');
const { cloudinary, cloudinaryUpload } = require('../helpers/cloudinary');

const FileController = {};

FileController.getStupidFileName = async (req, res) => {
  const data = FileService.getStupidFileName();
  return res.json({
    data,
    message: 'success',
    status: 200,
  });
};

FileController.uploadByCloudinary = async (req, res) => {
  // Cloudinary nhận tham số file hoặc string file đều ok
  const uploadFile = req.body.file || req.file;
  try {
    if (!uploadFile) {
      return res.status(422).send({
        data: null,
        message: 'There is error when uploading',
        status: 422,
      });
    }

    let uploadResult;
    if (!uploadFile.buffer) {
      uploadvResult = await cloudinaryUpload(uploadFile);
    } else {
      //Convert stream to base64 format nếu là dạng file
      const file64 = FileService.formatBuffer(req.file);
      uploadResult = await cloudinaryUpload(file64.content);
    }
    // const {
    //   public_id,
    //   secure_url,
    //   asset_id,
    //   width,
    //   height,
    //   created_at,
    //   bytes,
    //   folder,
    // } = uploadResult;

    return res.json({
      data: 'Good job bro',

      // data: {
      //   cloudinaryId: public_id,
      //   url: secure_url,
      //   asset_id,
      //   width,
      //   height,
      //   created_at,
      //   bytes,
      //   folder,
      // },
      message: 'Upload file successfully!',
      status: 200,
    });
  } catch (error) {
    return res.status(422).send({
      data: null,
      message: error.message,
      status: 422,
    });
  }
};

FileController.getPhotosFromCloudinary = async (req, res) => {
  try {
    const { limit = 20, next_cursor = '' } = req.query;
    const data = await FileService.getPhotosFromCloudinary(limit, next_cursor);
    return res.status(200).send({
      data,
      message: 'Success',
      status: 200,
    });
  } catch (error) {
    return res.status(400).send({
      data: null,
      message: error?.error.message,
      status: 400,
    });
  }
};

module.exports = FileController;

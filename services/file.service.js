const DatauriParser = require('datauri/parser');
const cloudinary = require('cloudinary').v2;
const path = require('path');
const parser = new DatauriParser();
const { File, Greeting } = require('../models');
const FileService = {};

FileService.getStupidFileName = function () {
  return File.getStupidFileName();
};

FileService.formatBuffer = (file) => {
  return parser.format(
    path.extname(file.originalname).toString().toLowerCase(),
    file.buffer
  );
};

FileService.getPhotosFromCloudinary = async (limit, next_cursor) => {
  const resources = await cloudinary.search
    .expression(`folder:${process.env.CLOUDINARY_UPLOAD_FOLDER}`)
    .max_results(limit)
    .sort_by('uploaded_at', 'desc')
    .next_cursor(next_cursor)
    .execute();

  return resources;
};

module.exports = FileService;

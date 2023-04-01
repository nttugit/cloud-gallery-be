const cloudinary = require('cloudinary').v2;

//Setting cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

cloudinaryUpload = (file) =>
  cloudinary.uploader.upload(file, {
    upload_preset: process.env.CLOUDINARY_UPLOAD_PRESET,
  });

//Get images from folder using cloudinary Search API
// getImages = async (next_cursor) => {
//   const resources = await cloudinary.search
//     .expression(`folder:${process.env.CLOUDINARY_UPLOAD_FOLDER}`)
//     .max_results(20)
//     .sort_by('uploaded_at', 'desc')
//     .next_cursor(next_cursor)
//     .execute();
//   return resources;
// };

module.exports = {
  cloudinary,
  cloudinaryUpload,
  // getImages,
};

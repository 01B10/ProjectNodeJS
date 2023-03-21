const multer = require("multer");
const sharp = require("sharp");
const path = require("path");
const { pathDir, getRandomFileName } = require("../../ultilities");
const upload = multer({
  limits: {
    fileSize: 4 * 1024 * 1024,
  },
});

async function uploadImage(req, res) {
  const imageName = getRandomFileName() + ".png";
  const imagePath = path.join(pathDir, `/public/${imageName}`);
  await sharp(req.file.buffer).toFile(imagePath);
  res.end(imageName);
}
module.exports = { upload, uploadImage };

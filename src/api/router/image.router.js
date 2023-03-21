const express = require("express");
const { upload, uploadImage } = require("../controller/image.controller");
const router = express.Router();

router.post("/upload-image", upload.single("image"), uploadImage);

module.exports = router;

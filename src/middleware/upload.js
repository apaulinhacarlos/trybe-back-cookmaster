const path = require('path');
const multer = require('multer');

const pathUploads = path.join(__dirname, '../', 'uploads');

const storage = multer.diskStorage({
  /* consultei essa parte no stackoverflow
  link: https://stackoverflow.com/questions/48418680/enoent-no-such-file-or-directory */
  // destination: (req, file, callback) => { callback(null, path.join(__dirname, '../uploads')); },
  destination: (req, file, callback) => { callback(null, pathUploads); },
  filename: (req, file, callback) => { callback(null, `${req.params.id}.jpeg`); },
});

module.exports = multer({ storage });
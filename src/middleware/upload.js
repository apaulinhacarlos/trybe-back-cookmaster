const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
  /* consultei essa parte no stackoverflow
  link: https://stackoverflow.com/questions/48418680/enoent-no-such-file-or-directory */
  destination: (req, file, callback) => { callback(null, path.join(__dirname, '../uploads')); },
  filename: (req, file, callback) => { callback(null, `${req.params.id}.jpeg`); },
});

module.exports = multer({ storage });
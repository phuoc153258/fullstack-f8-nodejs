const multer = require('multer');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let date = new Date();
        let folderName = `./src/public/uploads/${
            file.mimetype.split('/')[0]
        }/${date.getDate()}-${date.getMonth()}-${date.getFullYear()}/`;
        fs.mkdir(folderName, { recursive: true }, function (err) {
            if (err) cb(new Error(err), false);
            cb(null, folderName);
        });
    },
    filename: function (req, file, cb) {
        let filename = `${new Date().toISOString().replace(/:/g, '-')}-${
            file.originalname
        }`;
        cb(null, filename);
    },
});

const fileFilter = async (req, file, cb) => {
    if (
        file.mimetype == 'image/jpg' ||
        file.mimetype == 'image/png' ||
        file.mimetype == 'image/gif'
    ) {
        cb(null, true);
    } else {
        return cb(new Error('Invalid mime type'));
    }
};

const uploadMiddleware = multer({
    storage: storage,
    fileFilter: fileFilter,
});

uploadSingleImage = uploadMiddleware.single('file');

const uploadSingle = (req, res, next) => {
    uploadSingleImage(req, res, (err) => {
        if (err) return res.redirect('back');
        next();
    });
};

module.exports = {
    uploadSingle,
};

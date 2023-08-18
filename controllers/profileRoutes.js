const router = require("express").Router();
const { logAuth } = require('../utils/auth')
const { User } = require('../models');
const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/assets/images')
    },
    filename: function (req, file, cb) {
      
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
const upload = multer({ dest: 'public/assets/images' })

router.post('/upload', logAuth,upload.single('uploaded_file'), function (req, res) {
    // req.file is the name of your file in the form above, here 'uploaded_file'
    // req.body will hold the text fields, if there were any 
    console.log(req.file, req.body)
});

router.get("/", logAuth, async (req, res) => {
    try {
        console.log(req.session)
        const userData = await User.findOne({ where: { id : req.session.user_id } });

        if (!userData) {
          res
            .status(400)
            .json({ message: 'Incorrect username or password, please try again' });
          return;
        }

        console.log(userData.get({ plain: true }))

        res.render("profile", {
            user:userData.get({ plain: true }),
            logged_in: req.session.logged_in,
          });

    } catch (e) {
        console.error(e);
        res.status(500).end();
      }

});

module.exports = router;
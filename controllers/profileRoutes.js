const router = require("express").Router();
const { logAuth } = require('../utils/auth')
const { User } = require('../models');
const path = require('path')
const multer  = require('multer')

const storage = multer.diskStorage({
    destination:  (req, file, cb) =>{
      cb(null, 'public/assets/images')
    },
    filename: (req, file, cb) => {
      console.log(file)

      const destFilename = req.session.user_id + path.extname(file.originalname)
      try {
        //Update user record with profile image file name.
        User.update({
          profile_image: destFilename
        }, {
          where: {
            id: req.session.user_id
          },
        }).then (()=> {
          cb(null,destFilename )
        })
    
      } catch (err) {
        console.log(err)
        cb(null,destFilename )
      }
       
    }
  })
const upload = multer({ storage : storage })

router.post('/', logAuth,upload.single('uploaded_file'), function (req, res) {
    // req.file is the name of your file in the form above, here 'uploaded_file'
    // req.body will hold the text fields, if there were any 
    console.log('File Uploaded')
    res.status(200).redirect('/profile')
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
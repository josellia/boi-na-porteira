const router = require("express").Router();
const Boi = require("../models/Boi");
const storage = require("../config/multer");
const multer = require("multer");
const { body, validationResult } = require("express-validator");

const uploader = multer({ storage });

router.post(
  "/bois",
  uploader.single("file"),
  [
    body("name")
      .isLength({ min: 5 })
      .withMessage("O campo deve ter mais de três caracteres"),
  ],
  async (req, res) => {
    const { file, body } = req;
    console.log(body);
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else if (body) {
      const newBoi = new Boi({
        name: body.name,
        age: body.age,
        gender: body.gender,
        weight: body.weight,

        url: `http://localhost:4000/${file.filename}`,
      });

      await newBoi.save();
      res.json({ newBoi: newBoi });
    }
  }
);

router.get("/bois", async (req, res) => {
  const bois = await Boi.find();

  return res.json(bois);
});

module.exports = router;

// https://www.youtube.com/watch?v=lYUsMvZw6s4

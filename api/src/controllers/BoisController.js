const Boi = require("../models/Boi");

class BoisController {
  constructor(data) {
    this.data = data;
    // this.index = this.index.bind(this);
  }
  index = async (req, res) => {
    const bois = await this.data.find();
    return res.json(bois);
  };

  create = async (req, res) => {
    const boi = await this.data.create(req.body);
    return res.status(201).json(boi);
  };
}

module.exports = new BoisController(Boi);

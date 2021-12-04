const mongoose = require("mongoose");

const BoiSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 5,
      max: 255,
    },
    age: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },

    gender: {
      type: String,
      required: true,
    },
    weight: {
      type: Number,
      required: false,
    },
    url: {
      type: String,
      required: false,
    },
    dateUpload: { type: Date, default: Date.now() },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Boi", BoiSchema);

// https://www.luiztools.com.br/post/tutorial-de-validacao-de-input-de-dados-em-node-js/

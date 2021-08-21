const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const animeModel = new Schema({
  nome:{type: String, required:true },
  img:{type: String, required: true},
  created_at:{
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Anime = mongoose.model('Anime', animeModel);

module.exports = Anime;
// module.exports = mongoose.model("animes",animeModel);
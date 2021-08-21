const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
  name:{type: String, required: true, trim: false, lowercase: true},
  calories:{type: Number, required: false, default:0},
  validate(value){
    if (value<0) throw new Error('Invalid value, o valor de calorieas não pode ser negativo')
  }
})

const Food = mongoose.model("Food",FoodSchema);

module.exports = Food;
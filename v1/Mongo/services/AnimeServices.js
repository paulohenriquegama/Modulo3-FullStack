const animeModel = require('../models/anime');

class AnimeService{
  async findAll(){
    return await animeModel.find();
  }

  async findById(id){
    return await animeModel.findById(id);
  }

  async createAnime(anime){
    return await new animeModel(anime).save();
  }

  async updateAnime(anime,id){
    return await animeModel.findOneAndUpdateOne({_id:id}, anime);
  }

  async delete(anime,id){
    return await animeModel.findByIdAndDelete(id);
  }
}

module.exports = AnimeService;
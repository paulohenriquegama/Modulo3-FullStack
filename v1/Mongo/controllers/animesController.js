const AnimeService = require("../services/AnimeServices");
const mongoose = require("mongoose");

const animeService = new AnimeService();

class AnimesController {
  async getAnimes(req, res) {
    const animes = await animeService.findAll();
    res.send(animes);
  }

  async getAnimesById(req, res) {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(422).send("Código inválido.");
      return;
    }

    const anime = await animeService.findById(id);

    // Validação das mensagens
    if (!anime) {
      res.status(404).send("Anime não encontrado.");

      return;
    }

    res.send(anime);
  }

  async createAnime(req, res) {
    const anime = req.body;

    // Validação

    if (!anime || !anime.nome || !anime.img) {
      res.status(400).send({
        message:
          'Anime inváAnime Certifique-se de que o body da requisição possui "nome" e "imagemUrl".',
      });

      return;
    }

    const animeSalvo = await animeService.createAnime(anime);

    res.send(animeSalvo);
  }

  async updateAnime(req, res) {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.send("Código inválido.");
      return;
    }

    const anime = await animeService.findById(id);

    // Validação das mensagens
    if (!anime) {
      res.status(404).send("Anime não encontrado.");

      return;
    }

    const novoAnime = req.body;

    if (!Object.keys(novoAnime).length) {
      res.status(400).send({ message: "O body da requisição está vazio." });

      return;
    }

    if (!novoAnime || !novoAnime.nome || !novoAnime.img) {
      res.status(400).send({
        message:
          'Anime inválido. Certifique-se de que o body da requisição possui "nome" e "imagemUrl".',
      });

      return;
    }

    animeService.updateAnime(novoAnime, id);
    const animeAtualizado = await animeService.findById(id);

    res.send(animeAtualizado);
  }

  async deleteAnime(req, res) {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(422).send("Código inválido.");
      return;
    }

    const anime = await animeService.findById(id);

    // Validação das mensagens
    if (!anime) {
      res.status(404).send("Anime não encontrado.");

      return;
    }

    await animeService.delete(id);

    res.send({ message: "Anime excluído com sucesso" });
  }
}

module.exports = AnimesController;
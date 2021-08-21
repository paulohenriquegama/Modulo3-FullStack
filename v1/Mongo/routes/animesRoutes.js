const express = require("express");
const router = express.Router();

const AnimesController = require("./../controllers/AnimesController");

const animesController = new AnimesController();

// [GET] /filmes - Retorna a lista de filmes
router.get("/animes", animesController.getAnimes);

// [GET] /animes/{id} - Retorna apenas um único anime pelo ID
router.get("/animes/:id", animesController.getAnimesById);

// [POST] - /animes - Cria um novo anime
router.post("/animes", animesController.createAnime);

// [PUT] - /animes/{id} - Atualiza um anime pelo ID
router.put("/animes/:id", animesController.updateAnime);

// [Delete] - /animes{id} - Remover um anime pelo ID
router.delete("/animes/:id", animesController.deleteAnime);

module.exports = router;
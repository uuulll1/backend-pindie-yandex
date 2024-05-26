const gamesRouter = require("express").Router();
const {
  createGame,
  updateGame,
  deleteGame,
  checkEmptyFields,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkIsGameExists,
  checkIsVoteRequest,
} = require("../middlewares/games");
const {
  sendGameCreated,
  sendGameUpdated,
  sendGameDeleted,
} = require("../controllers/games");
const { findAllGames } = require("../middlewares/games");
const { sendAllGames } = require("../controllers/games");
const { findGameById } = require("../middlewares/games");
const { sendGameById } = require("../controllers/games");
const { checkAuth } = require("../middlewares/auth");
gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.get("/games/:id", findGameById, sendGameById);

gamesRouter.post(
  "/games",
  findAllGames,
  checkEmptyFields,
  checkIfCategoriesAvaliable,
  checkIsGameExists,
  createGame,
  sendGameCreated,
  checkAuth
);

gamesRouter.put(
  "/games/:id",
  findGameById,
  checkIsVoteRequest,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  updateGame,
  sendGameUpdated,
  checkAuth
);
gamesRouter.delete("/games/:id", deleteGame, sendGameDeleted, checkAuth);
module.exports = gamesRouter;

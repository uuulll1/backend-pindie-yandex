const usersRouter = require("express").Router();
const {
  findAllUsers,
  findUserById,
  updateUser,
  deleteUser,
  checkEmptyNameAndEmailAndPassword,
  checkEmptyNameAndEmail,
  checkIsUserExists,
  hashPassword,
} = require("../middlewares/users");
const { checkAuth } = require('../middlewares/auth')
const { createUser } = require("../middlewares/users");
const {
  sendUserCreated,
  sendUserById,
  sendUserUpdated,
  sendUserDeleted,
} = require("../controllers/users");
const { sendAllUsers, sendMe } = require("../controllers/users");

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.get("/me", checkAuth, sendMe);

usersRouter.post(
  "/users",
  findAllUsers,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  checkAuth,
  hashPassword,
  createUser,
  sendUserCreated
);

usersRouter.put(
  "/users/:id",
  findUserById,
  checkEmptyNameAndEmail,
  checkAuth,
  updateUser,
  sendUserUpdated
);
usersRouter.delete("/users/:id", checkAuth, deleteUser, sendUserDeleted);
module.exports = { usersRouter };

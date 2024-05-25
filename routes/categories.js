const categoriesRouter = require("express").Router();
const { checkAuth } = require("../middlewares/auth.js");

const {
    sendAllCategories,
    sendCategoryCreated,
    sendCategoryById,
    sendCategoryUpdated,
    sendCategoryDeleted,
} = require("../controllers/categories");
const {
    findAllCategories,
    createCategory,
    findCategoryById,
    updateCategory,
    deleteCategory,
    checkIsCategoryExists,
    checkEmptyName,
} = require("../middlewares/categories");

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
// categoriesRouter.post(
//     "/categories",
//     findAllCategories,
//     createCategory,
//     sendCategoryCreated,
//     sendCategoryDeleted
// );
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
categoriesRouter.post(
    "/categories",
    findAllCategories,
    checkIsCategoryExists,
    checkEmptyName,
    checkAuth,
    createCategory,
    sendCategoryCreated
);
categoriesRouter.put(
    "/categories/:id",
    checkEmptyName,
    checkAuth,
    updateCategory,
    sendCategoryUpdated
);
categoriesRouter.delete(
    "/categories/:id",
    checkAuth,
    deleteCategory,
    sendCategoryDeleted
);

module.exports = categoriesRouter;

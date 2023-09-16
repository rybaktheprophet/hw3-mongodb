const express = require("express");

const ctrl = require("../../controllers/contacts.js");

const { validateBody } = require("../../utils/index.js");
const { schemas } = require("../../models/contact.js");

const router = express.Router();

router.get("/", ctrl.getAllContacts);

router.get("/:contactId", ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.addMyContact);

router.delete("/:contactId", ctrl.deleteContact);

router.put("/:contactId", ctrl.updateTheContact);

router.patch(
	"/:contactId/favorite",
	validateBody(schemas.updateFavoriteSchema),
	ctrl.updateTheFavorite,
);

module.exports = router;

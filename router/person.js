const express = require("express");
const router = express.Router();
const personController = require("../controller/PersonController");

router.get("/", personController.getPersons);
router.post("/:id", personController.postPerson);
router.put(
   "/:id",
   personController.findPersonById,
   personController.updatePerson
);
router.delete(
   "/:id",
   personController.findPersonById,
   personController.deletePerson
);

router.get(
   "/update/:id",
   personController.findPersonById,
   personController.updatePerson
);
router.get(
   "/delete/:id",
   personController.findPersonById,
   personController.deletePerson
);
router.get("/:id", personController.findPersonById, personController.getPerson);
router.get("/", personController.notFoundroute);

module.exports = router;

//  ưu tiên khai báo các route không có id trước, cuối cùng là id với all route

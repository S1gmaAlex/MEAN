const HomeController = require("../controllers/HomeController");

const router = require("express").Router();


//add
router.post("/create", HomeController.addData);

//get all
router.get("/getAll", HomeController.getAllData);

//update data
router.put("/update/:id", HomeController.updateData);

//delete data
router.delete("/delete/:id", HomeController.deleteUser);

module.exports = router;
const { Router } = require('express');
const controller = require('./controller');

const router = Router();

// Routes for fbt_id_main
router.get("/", controller.getFbtIdMain);
router.post("/", controller.addFbtIdMain);
router.get("/:id", controller.getFbtIdMainById);
router.put("/:id", controller.updateFbtIdMain);
router.delete("/:id", controller.deleteFbtIdMain);

// Routes for FBT_TS
router.get("/tracking/:id", controller.getFbtTsById);
router.post("/tracking", controller.addFbtTs);
router.put("/tracking/:id", controller.updateFbtTs);
router.delete("/tracking/:id", controller.deleteFbtTs);

//routes for scraped data 
router.get("/scrape/:id", controller.trackingNumber);



module.exports = router;

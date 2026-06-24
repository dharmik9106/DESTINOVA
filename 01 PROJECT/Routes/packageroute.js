import express from "express";

import multer from "../middleware/multer.js";
import packagecontroller from "../controller/packagecontroller.js";

const router = express.Router();

router.post(
  "/add",
  multer.single("packageImage"),
  packagecontroller.add
);

router.get("/allPackages", packagecontroller.getAllPackages);

router.get("/:id", packagecontroller.packageById);

router.delete("/:id", packagecontroller.deletePackage);

router.patch(
  "/:id",
  multer.single("packageImage"),
  packagecontroller.updatePackageDetail
);

export default router;
import { Router } from "express";
import AuthController from "../controllers/AuthController.js";
import ProfileController from "../controllers/ProfileController.js";
import authMiddleware from "../middlewares/Authenticate.js"
import AssetController from "../controllers/AssetController.js";
import SearchController from "../controllers/SearchController.js";
// import AssetController from "../controllers/AssetController.js";



const router = Router();

router.post("/auth/register", AuthController.register)

router.post("/auth/login", AuthController.login)

router.get("/profile", authMiddleware, ProfileController.index) // Private Route
//router.get("profile",authMiddleware,  )
router.get("/asset/allocateasset", AssetController.allocateAsset)
router.post("/search", SearchController.emp_search)
router.post("/status", AssetController.checkStatus)
export default router;
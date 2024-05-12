import express from 'express';
import {deleteJob, getAllJobs, postJob, updateJob} from '../controllers/jobController.js'
import {getmyjobs} from '../controllers/jobController.js'
import {isAuthenticated} from "../middlewares/auth.js"
const router = express.Router();

router.get("/getall", getAllJobs);

router.post("/post", isAuthenticated, postJob);
router.get("/getmyjobs", isAuthenticated, getmyjobs);
router.put("/updateJob/:id", isAuthenticated, updateJob);
router.put("/delete/:id", isAuthenticated, deleteJob);


export default router;
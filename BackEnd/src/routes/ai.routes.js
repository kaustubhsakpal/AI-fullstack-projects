import express from 'express'
import { getReview } from '../controllers/ai.controller.js';


export  const router = express.Router();


router.post("/get-review",getReview )

 
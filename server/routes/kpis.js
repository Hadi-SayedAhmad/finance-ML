import express from 'express';
import { getKpis } from '../controllers/kpis.controller.js';
const router = express.Router();

router.get("/", getKpis)

export default router;
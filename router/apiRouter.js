import express from "express";
import { agurkasRouter } from "./agurkasRouter.js";
import { studentRouter } from "./studentRouter.js";

export const apiRouter = express.Router();

apiRouter.get('/', (req, res) => {
    return res.json({
        status: 'error',
        msg: 'ne pilnas API routas',
    });
});
apiRouter.use('/agurkas', agurkasRouter);
apiRouter.use('/student', studentRouter);
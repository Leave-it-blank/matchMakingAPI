import { NextFunction, Request, Response } from "express"
import matchMaking from "../controllers/matchMaking"
const express = require('express')
const router = express.Router()

// middleware that is specific to this router
router.use((req: Request, res: Response, next: NextFunction) => {
    console.log('Time: ', Date.now())
    // set the CORS policy
    res.header('Access-Control-Allow-Origin', '*');
    // set the CORS headers
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    // set the CORS method headers
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET POST');
        return res.status(200).json({});
    }
    next()
})
// define the home page route
router.get('/add-player/:id', matchMaking.addPlayer);
// define the about route
router.get('/remove-player/:id', matchMaking.removePlayer);

export default router;
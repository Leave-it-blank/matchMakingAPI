import { Request, Response, NextFunction } from 'express';

const addPlayer = async (req: Request, res: Response, next: NextFunction) => {
    //console.log(req.params);
    console.log("request reached.")
    console.log(req.params);
    res.sendStatus(200);
};

const removePlayer = async (req: Request, res: Response, next: NextFunction) => {
    res.status(299).send("Hello World");
};



export default { addPlayer, removePlayer };
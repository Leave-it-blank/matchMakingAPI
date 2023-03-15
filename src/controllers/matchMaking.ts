import { Request, Response, NextFunction } from 'express';

const addPlayer = (req: Request, res: Response, next: NextFunction) => {
    return 200;
};

const removePlayer = (req: Request, res: Response, next: NextFunction) => {
    return 402;
};



export default { addPlayer, removePlayer };
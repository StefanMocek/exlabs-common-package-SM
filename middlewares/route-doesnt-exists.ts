import {Request, Response, NextFunction} from 'express';
import {RouteNotFoundError} from '../errors/route-not-found-error';

export const handleNotFound = (req: Request, res: Response, next: NextFunction) => {
  throw new RouteNotFoundError();
};
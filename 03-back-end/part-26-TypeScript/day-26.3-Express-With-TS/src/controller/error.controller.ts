import { NextFunction, Request, Response } from "express";

const errorController = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  const { name, message } = err;
  console.log(`name: ${name}`);

  switch (name) {
    case 'BadRequestError':
      res.status(400).json({ message });
      break;
    case 'NotFoundError':
      res.status(404).json({ message });
      break;
    case 'ConflictError':
      res.status(409).json({ message });
      break;
    default:
      console.error(err);
      res.sendStatus(500);
  }

}

export default errorController;
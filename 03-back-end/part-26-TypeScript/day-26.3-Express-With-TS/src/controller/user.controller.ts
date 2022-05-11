import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import UserServices from "../service/user.service";
import 'express-async-errors';

export default class UserController {
  private _userService: UserServices

  constructor() {
    this._userService = new UserServices();
  }

  public getAll = async (req: Request, res: Response) => {
    const users = await this._userService.getAll();

    return res.status(StatusCodes.OK).json(users);
  }

  public  getById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const intID = parseInt(id, 10)

    const user = await this._userService.getById(intID);

    return res.status(StatusCodes.OK).json(user);
  }

  public create = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    const newUser = await this._userService.create({name, email, password});

    return res.status(StatusCodes.CREATED).json(newUser);
  }

  public remove = async (req: Request, res: Response) => {
    const { id } = req.params;

    const intID = parseInt(id, 10)

    await this._userService.remove(intID);

    return res.status(StatusCodes.OK).json({message: `User with id: ${intID}, deleted with sucess.`});
  }

  public update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email, password } = req.body;

    const intID = parseInt(id, 10);

    const newUser = await this._userService.update(intID, {name, email, password});

    return res.status(StatusCodes.OK).json(newUser);
  }
}
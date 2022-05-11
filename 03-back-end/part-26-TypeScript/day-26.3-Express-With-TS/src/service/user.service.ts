import connection from '../models/connection';
import UserModel from '../models/user.model';
import IUser from '../interfaces/user.interface';
import { NotFoundError, ConflictError } from 'restify-errors';

export default class UserService {
 
  public model: UserModel;

  constructor() {
        this.model = new UserModel(connection);
      }

  public async getAll(): Promise<IUser[]> {
      const users = await this.model.getAll();
      return users;
  }
  
  public async getById(id: number): Promise<IUser> {
    const user = await this.model.getById(id);

    if(!user) {
      throw new NotFoundError('User not found.')
    }
    
    return user;
  }

  public async create(user: IUser): Promise<IUser> {
    const emailAlreadyExist = await this.model.getByEmail(user.email);

    if(emailAlreadyExist) {
      throw new ConflictError('User already exist.')
    }

    return this.model.create(user);
  }

  public async update(id: number, user: IUser): Promise<IUser> {
    const userFound = await this.model.getById(id);

    if (!userFound) {
      throw new NotFoundError('User not found.');
    }

    return this.model.update(id, user);
  }
  public async remove(id: number): Promise<void> {
    const userFound = await this.model.getById(id);

    if (!userFound) {
      throw new NotFoundError('User not found.');
    }

    this.model.remove(id);
}
};

import { Pool, ResultSetHeader } from 'mysql2/promise';
import IUser from '../interfaces/user.interface';

export default class UserModel {
    private _connection: Pool;
  
    constructor(connection: Pool) {
      this._connection = connection;
    }
    
  public async getAll(): Promise<IUser[]> {
      const query = 'SELECT id, name, email FROM Users';

      const [users] = await this._connection.execute(query);

      return users as IUser[]; 
  }

  public async getById(id: number): Promise<IUser> {
      const query = 'SELECT id, name, email FROM Users WHERE id=?';

      const [users] = await this._connection.execute(query, [id])

      const [user] = users as IUser[]
        
      return user;
  }

  public async getByEmail(email: string): Promise<IUser> {
    const query = 'SELECT id, name, email FROM Users WHERE email=?'

    const [users] = await this._connection.execute(query, [email]);

    const [user] = users as IUser[];

    return user;
  }

  public async create(user: IUser): Promise<IUser> {
    const {name, email, password} = user;

    const query = 'INSERT INTO Users (name, email, password) VALUES (?, ?, ?)';

    const [{ insertId }] = await this._connection.execute<ResultSetHeader>(query, [name, email, password]);

    return { id: insertId, name, email, password };
  }

  public async update(id: number, user: IUser): Promise<IUser> {
    const { name, email, password } = user;

    const query = 'UPDATE Users SET name=?, email=?, password=? WHERE id=?';

    await this._connection.execute(query, [name, email, password, id]);

    return { id, name, email, password };
  }

  public async remove(id: number): Promise<void> {
    const query = 'DELETE FROM Users WHERE id=?';

    await this._connection.execute(query, [id]);
  }
  
}
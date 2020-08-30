import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IUsersRepository from '../repositories/IUsersRepository';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';

import User from '../infra/typeorm/entities/User';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRpository: IUsersRepository,

    @inject('HashProvider')
    private hashedProvider: IHashProvider,
  ) { }

  public async execute({ name, email, password }: IRequest): Promise<User> {
    const checkUserExists = await this.usersRpository.findByEmail(email);

    if (checkUserExists) {
      throw new AppError('Email address already used.');
    }

    const hashedPassword = await this.hashedProvider.generateHash(password);

    const user = await this.usersRpository.create({
      name,
      email,
      password: hashedPassword,
    });

    await this.usersRpository.save(user);

    return user;
  }
}

export default CreateUserService;

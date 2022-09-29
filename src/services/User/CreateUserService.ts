import {getRepository} from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../../models/User';
import AppError from './/../../errors/AppError';


interface Request{
  name: string;
  username: string;
  password: string;
}

class CreateUserService{
  public async execute({name, username, password}: Request): Promise<User>{
    const userRepository = getRepository(User);

    const checkUserExists = await userRepository.findOne({
      where: { username },
    });

    if(checkUserExists){
      throw new AppError('this username already used!');
    }

    const hashedPassword = await hash(password, 8);

    const user = userRepository.create({
      name,
      username,
      password: hashedPassword,
    });

    await userRepository.save(user);
    return user;
  }
}
export default CreateUserService;

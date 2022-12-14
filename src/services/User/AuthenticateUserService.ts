import {getRepository} from 'typeorm';
import { compare, hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken' ;
import User from '../../models/User';
import AuthConfig from '../../config/auth'
import AppError from '../../errors/AppError';

interface Request{
  username: string;
  password: string;
}

interface Response{
  user: User;
  token: string
}

class AuthenticateUserService{
  public async execute ({username,password}:Request): Promise<Response> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({where: {username}});

    if(!user){
      throw new AppError('Incorrect username/password combination', 401);
    }

    const passwordMatched = await compare(password,user.password);

    if(!passwordMatched){
      throw new AppError('Incorrect username/password combination',401);

    }

    const {secret, expiresIn} = AuthConfig.jwt;


    const token = sign({},secret,{
      subject: user.id,
      expiresIn: expiresIn,
    });

    return {
      user,
      token
    }

  }
}

export default AuthenticateUserService;

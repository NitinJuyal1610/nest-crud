import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private UsersRepository: Repository<User>,
  ) {}

  async getAllUsers(): Promise<User[]> {
    const users = await this.UsersRepository.find();
    return users;
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { email, password, username } = createUserDto;

    //encrypt the password
    const encryptedPass = await bcrypt.hash(password, 10);
    const user = this.UsersRepository.create({
      email,
      password: encryptedPass,
      username: username,
    });

    await this.UsersRepository.save(user);
    return user;
  }

  async getUserById(id: string): Promise<User> {
    const found = await this.UsersRepository.findOne({ where: { id } });

    if (!found) throw new NotFoundException(`User with ID: ${id} not found`);
    return found;
  }

  async deleteUser(id: string): Promise<void> {
    const deleted = await this.UsersRepository.delete({ id });
    if (deleted.affected == 0) {
      throw new NotFoundException(`User with ID: ${id} not found`);
    }
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const { username, email } = updateUserDto;

    console.log(username, email);

    const params = {};

    if (username) {
      params['username'] = username;
    }

    if (email) {
      params['email'] = email;
    }

    await this.UsersRepository.update(id, params);
    const User = await this.getUserById(id);
    return User;
  }
}

import { Repository } from 'typeorm';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@/api/user/user.entity';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(user: User): Promise<number> {
    const result = await this.userRepository.save(user);
    return result.id;
  }

  async update(id: number, user: User): Promise<boolean> {
    const result = await this.userRepository.update({ id }, user);
    return result.affected !== 0;
  }

  async getUserByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findOneBy({ email });
    if (!user) throw new HttpException('해당 회원이 존재하지 않습니다.', 400);

    return user;
  }

  async getUserById(id: number): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) throw new HttpException('해당 회원이 존재하지 않습니다.', 400);

    return user;
  }
}

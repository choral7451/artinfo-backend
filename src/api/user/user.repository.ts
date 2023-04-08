// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { User } from '@/api/user/entities/user.entity';
// import { FindOneOptions, FindOptionsWhere, Repository } from 'typeorm';
//
// @Injectable()
// export class UserRepository {
//   constructor(
//     @InjectRepository(User)
//     private readonly userRepository: Repository<User>, //
//   ) {}
//
//   async create(fields: User): Promise<User> {
//     return this.userRepository.save(fields);
//   }
//
//   async findOneByEmail(email: string): Promise<User | undefined> {
//     return this.userRepository.findOne({ _email: email });
//   }
// }

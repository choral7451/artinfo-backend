import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '@/api/user/user.service';
import { UserRepository } from '@/api/user/user.repository';
import { ICreateUserFields } from '@/api/user/dto/fields/create-user.fields';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@/api/user/entities/user.entity';
import { DatabaseModule } from '@/database/database.module';

describe('UserService', () => {
  let userService: UserService;
  let userRepository: UserRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule, TypeOrmModule.forFeature([User])],
      providers: [UserService, UserRepository],
    }).compile();

    userService = module.get<UserService>(UserService);
    userRepository = module.get<UserRepository>(UserRepository);
  });

  it('createUser', async () => {
    // given
    const createUserFields: ICreateUserFields = {
      name: '임성준',
      nickname: 'choral',
      email: 'artinfo2022@gmail.com',
      password: 'a123456!',
    };

    // when
    const user = await userService.createUser(createUserFields);

    //
    expect(user.name).toBe(createUserFields.name);
    expect(user.nickname).toBe(createUserFields.nickname);
    expect(user.email).toBe(createUserFields.email);
    expect(user.password).toBe('eee');
  });
});

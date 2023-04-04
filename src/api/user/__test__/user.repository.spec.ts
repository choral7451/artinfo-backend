import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from '@/api/user/user.service';
import { UserRepository } from '@/api/user/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@/api/user/entities/user.entity';
import { TestDbConfigModule } from '@/database/database.module';

describe('UserRepository', () => {
  let app: TestingModule;
  let userRepository: UserRepository;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [TestDbConfigModule, TypeOrmModule.forFeature([User])],
      providers: [UserService, UserRepository],
    }).compile();

    userRepository = app.get<UserRepository>(UserRepository);
  });

  afterAll(async () => {
    await app.get('UserRepository').query(`DELETE FROM user`);
    await app.close();
  });

  it('create', async () => {
    // given
    const givenUser = User.from({
      name: '임성준',
      nickname: 'choral',
      email: 'artinfo2022@gmail.com',
      password: 'a123456!',
    });

    // when
    const user = await userRepository.create(givenUser);

    // then
    expect(user.name).toBe(givenUser.name);
    expect(user.nickname).toBe(givenUser.nickname);
    expect(user.email).toBe(givenUser.email);
    expect(user.password).toBe(givenUser.password);
  });
});

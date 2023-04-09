// import { Test, TestingModule } from '@nestjs/testing';
// import { UserService } from '@/api/user/user.service';
// import { ICreateUserFields } from '@/api/user/dto/fields/create-user.fields';
// import { User } from '@prisma/client';
//
// describe('UserService', () => {
//   let app: TestingModule;
//   let userService: UserService;
//
//   beforeAll(async () => {
//     app = await Test.createTestingModule({
//       providers: [
//         {
//           provide: UserService,
//           useValue: {
//             create: jest.fn((user: User) => user),
//           },
//         },
//       ],
//     }).compile();
//
//     userService = app.get<UserService>(UserService);
//     userRepository = app.get<UserRepository>(UserRepository);
//   });
//
//   afterAll(async () => {
//     await app.get('UserRepository').query(`DELETE FROM user`);
//     await app.close();
//   });
//
//   it('createUser', async () => {
//     // given
//     const createUserFields: ICreateUserFields = {
//       name: '임성준',
//       nickname: 'choral',
//       email: 'artinfo2022@gmail.com',
//       password: 'a123456!',
//     };
//
//     // when
//     const user = await userService.createUser(createUserFields);
//
//     // then
//     expect(user.name).toBe(createUserFields.name);
//     expect(user.nickname).toBe(createUserFields.nickname);
//     expect(user.email).toBe(createUserFields.email);
//     expect(user.password).toBe(createUserFields.password);
//   });
// });

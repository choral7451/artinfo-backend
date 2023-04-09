// import { Test, TestingModule } from '@nestjs/testing';
// import { User } from '@prisma/client';
//
// describe('UserRepository', () => {
//   let app: TestingModule;
//   let userRepository: UserRepository;
//
//   beforeAll(async () => {
//     app = await Test.createTestingModule({
//       providers: [
//         {
//           provide: UserRepository,
//           useValue: {
//             create: jest.fn((user: User) => user),
//           },
//         },
//       ],
//     }).compile();
//
//     userRepository = app.get<UserRepository>(UserRepository);
//   });
//
//   it('create', async () => {
//     // given
//     const givenUser = User.from({
//       name: '임성준',
//       nickname: 'choral',
//       email: 'artinfo2022@gmail.com',
//       password: 'a123456!',
//     });
//
//     // when
//     const user = await userRepository.create(givenUser);
//
//     // then
//     expect(user.name).toBe(givenUser.name);
//     expect(user.nickname).toBe(givenUser.nickname);
//     expect(user.email).toBe(givenUser.email);
//     expect(user.password).toBe(givenUser.password);
//   });
// });

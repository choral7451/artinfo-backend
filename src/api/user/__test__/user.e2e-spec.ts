import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { UserService } from '../user.service';
import { UserModule } from '../user.module';
import { UserController } from '../user.controller';

describe('User', () => {
  let app: INestApplication;
  let userService: UserService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [UserModule],
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();

    userService = moduleRef.get<UserService>(UserService);
  });

  it(`/GET me`, async () => {
    const user = { id: 1, email: 'test@example.com', name: 'Test User' };

    const token = 'valid_token'; // set a valid JWT token

    const response = await request(app.getHttpServer()).get('/user/me').set('Authorization', `Bearer ${token}`).expect(200);

    expect(response.body).toEqual({
      id: user.id,
      email: user.email,
      name: user.name,
    });
  });

  afterAll(async () => {
    await app.close();
  });
});

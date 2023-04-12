import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it(`/GET me`, async () => {
    const user = { id: 1, email: 'test@example.com', name: 'Test User' };

    const token = 'valid_token'; // set a valid JWT token

    const response = await request(app.getHttpServer()).get('/issue/1').expect(200);

    expect(response.body).toEqual({
      id: user.id,
      email: user.email,
      name: user.name,
    });
  });
});

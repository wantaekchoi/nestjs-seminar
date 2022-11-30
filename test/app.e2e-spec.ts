import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { UsersModule } from '../src/users/users.module';
import { LoginModule } from '../src/login/login.module';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from '../src/all-exception-filter/all-exception.filter';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  const testEmail = 'test0@test.com';
  const testPassword = '1234';

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UsersModule, LoginModule],
      providers: [
        {
          provide: APP_FILTER,
          useClass: AllExceptionsFilter,
        },
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('/users', () => {
    const path = '/users';

    beforeEach(() => {
      return request(app.getHttpServer())
        .post(path)
        .send({ email: testEmail, password: testPassword })
        .expect(201);
    });

    it(`${path} (POST)`, () => {
      return request(app.getHttpServer())
        .post(path)
        .send({ email: 'user1@test.com', password: '1234' })
        .expect(201);
    });

    it(`${path} (GET)`, () => {
      return request(app.getHttpServer()).get(path).expect(200);
    });

    it(`${path}/:email (GET)`, () => {
      return request(app.getHttpServer())
        .get(`${path}/${testEmail}`)
        .expect(200);
    });

    it(`${path}/:email (PATCH)`, () => {
      const testNickname = 'new nickname';
      return request(app.getHttpServer())
        .patch(`${path}/${testEmail}`)
        .send({
          email: testEmail,
          nickname: testNickname,
        })
        .expect(200)
        .expect('1');
    });

    it(`${path}/:email (DELETE)`, () => {
      const testNickname = 'new nickname';
      return request(app.getHttpServer())
        .delete(`${path}/${testEmail}`)
        .expect(200)
        .expect('1');
    });

    it.todo(`remove ${path}/:email (DELETE)`);
  });

  describe('/login', () => {
    const path = '/login';

    beforeEach(() => {
      return request(app.getHttpServer())
        .post('/users')
        .send({ email: testEmail, password: testPassword })
        .expect(201);
    });

    it(`${path} (PATCH)`, () => {
      return request(app.getHttpServer())
        .patch(path)
        .send({ email: testEmail, password: testPassword })
        .expect(200)
        .expect('true');
    });
  });
});

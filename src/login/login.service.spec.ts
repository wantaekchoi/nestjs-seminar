import { Test, TestingModule } from '@nestjs/testing';
import { LoginService } from './login.service';
import { InMemoryRepositoryModule } from '../in-memory-repository/in-memory-repository.module';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [InMemoryRepositoryModule],
      providers: [LoginService],
    }).compile();

    service = module.get<LoginService>(LoginService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

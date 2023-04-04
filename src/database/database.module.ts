import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

export const TestDbConfigModule = TypeOrmModule.forRoot({
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: '',
  database: 'test',
  entities: [__dirname + '../../api/**/*.entity.*'],
  synchronize: true,
});

export const DevDbConfigModule = TypeOrmModule.forRoot({
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: '',
  database: 'artinfo',
  entities: [__dirname + '../../api/**/*.entity.*'],
  synchronize: true,
});

@Module({
  imports: [DevDbConfigModule, TestDbConfigModule],
})
export class DatabaseModule {}

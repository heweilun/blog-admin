import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { BlogController } from './blog/blog.controller';
import { UserService } from './user/user.service';
import { BlogService } from './blog/blog.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { env } from './config'
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(env.DATABASE_CONFIG),
    UserModule,
  ],
  controllers: [UserController, BlogController],
  providers: [UserService, BlogService],
})
export class AppModule {}

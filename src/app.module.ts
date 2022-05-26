import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { BlogController } from './blog/blog.controller';
import { UserService } from './user/user.service';
import { BlogService } from './blog/blog.service';

@Module({
  imports: [],
  controllers: [UserController, BlogController],
  providers: [UserService, BlogService],
})
export class AppModule {}

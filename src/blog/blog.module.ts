import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import BlogEntity from '../entity/blog.entity';

@Module({
    imports: [TypeOrmModule.forFeature([BlogEntity])],
    controllers: [BlogController],
    providers: [BlogService],
    exports: [BlogService]
})
export class BlogModule {}

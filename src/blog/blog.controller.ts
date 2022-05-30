import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BlogService } from './blog.service';

@Controller('blog')
@ApiTags('博客系统')
export class BlogController {
    constructor(private readonly blogService: BlogService) {}

    @Get('list')
    blogList(): string {
        return this.blogService.blogList();
    }
}

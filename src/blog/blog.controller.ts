import { Controller, Get, Post, Query, ValidationPipe, UsePipes, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { BlogService } from './blog.service';
import { ListQueryDto, AddBodyDto, DeleteParamDto, UpdateBodyDto } from '../dto/blog';

@Controller('blog')
@ApiTags('博客系统')
export class BlogController {
    constructor(private readonly blogService: BlogService) {}

    @Get('list')
    @ApiOperation({ summary: '博客查询' })//接口描述
    @UsePipes(new ValidationPipe({ transform: true }))
    blogList(@Query() query: ListQueryDto) {
        return this.blogService.blogList();
    }

    @Post('add')
    @ApiOperation({ summary: '新建博客' })//接口描述
    @UsePipes(new ValidationPipe({ transform: true }))
    blogAdd(@Body() body: AddBodyDto) {
        return this.blogService.blogAdd();
    }

    @Post('delete/:id')
    @ApiOperation({ summary: '删除博客' })//接口描述
    @UsePipes(new ValidationPipe({ transform: true }))
    blogDelete(@Param() param: DeleteParamDto) {
        return this.blogService.blogDelete();
    }

    @Post('update')
    @ApiOperation({ summary: '更新博客' })//接口描述
    @UsePipes(new ValidationPipe({ transform: true }))
    blogUpdate(@Body() body: UpdateBodyDto) {
        return this.blogService.blogUpdate();
    }
}

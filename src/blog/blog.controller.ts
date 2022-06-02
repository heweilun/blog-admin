import { Controller, Get, Post, Query, ValidationPipe, UsePipes, Body, Param, Res, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { BlogService } from './blog.service';
import { Request, Response } from 'express';
import { SearchQueryDto, AddBodyDto, DeleteBodyDto, UpdateBodyDto } from '../dto/blog';

@Controller('blog')
@ApiTags('博客系统')
export class BlogController {
    constructor(private readonly blogService: BlogService) {}

    @Get('list')
    @ApiOperation({ summary: '博客查询' })//接口描述
    @UsePipes(new ValidationPipe())
    async blogSearch(@Query() searchBlogDto: SearchQueryDto, @Res() response: Response) {
        const res = await this.blogService.blogSearch(searchBlogDto)
        response.status(HttpStatus.OK).json(res)
    }

    @Post('add')
    @ApiOperation({ summary: '新建博客' })//接口描述
    @UsePipes(new ValidationPipe({ transform: true }))
    async blogAdd(@Body() addBlogDto: AddBodyDto, @Res() response: Response) {
        const res = await this.blogService.blogAdd(addBlogDto)
        response.status(HttpStatus.OK).json(res)
    }

    @Post('delete')
    @ApiOperation({ summary: '删除博客' })//接口描述
    @UsePipes(new ValidationPipe({ transform: true }))
    async blogDelete(@Body() deleteBlogDto: DeleteBodyDto, @Res() response: Response) {
        const res = await this.blogService.blogDelete(deleteBlogDto)
        response.status(HttpStatus.OK).json(res)
    }

    @Post('update')
    @ApiOperation({ summary: '更新博客' })//接口描述
    @UsePipes(new ValidationPipe({ transform: true }))
    async blogUpdate(@Body() updateBlogDto: UpdateBodyDto, @Res() response: Response) {
        const res = await this.blogService.blogUpdate(updateBlogDto)
        response.status(HttpStatus.OK).json(res)
    }
}

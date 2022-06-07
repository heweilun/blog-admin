import { Controller, Get, Post, Req, Res, HttpCode, Header, Redirect, HttpStatus, Body, ValidationPipe, UsePipes } from '@nestjs/common';
import { Request, Response } from 'express';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UserService } from './user.service';
import { LoginBodyDto, VerifyBodyDto } from '../dto/user';


@Controller('user')
@ApiTags('用户系统')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('login')
    @ApiOperation({ summary: '登录' })//接口描述
    @UsePipes(new ValidationPipe({ transform: true }))
    async login(@Body() loginDto: LoginBodyDto,@Res() response: Response) {
        // response.header(204, {'demo-test': 'none'})
        // response.redirect('https://www.baidu.com')
        // response.status(HttpStatus.OK)
        // response.status(204)
        response.header('Cache-Control','none')
        const res = await this.userService.loginCheck(loginDto)
        console.log(res)
        response.status(HttpStatus.OK).json(res)
    }

    @Post('sendVerifyCode')
    @ApiOperation({ summary: '获取短信验证码' })//接口描述
    @UsePipes(new ValidationPipe({ transform: true }))
    async sendVerifyCode(@Body() verifyDto: VerifyBodyDto,@Res() response: Response) {
        response.header('Cache-Control','none')
        const res = await this.userService.sendVerifyCode(verifyDto)
        response.status(HttpStatus.OK).json(res)
    }
}

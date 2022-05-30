import { Controller, Get, Post, Req, Res, HttpCode, Header, Redirect, HttpStatus, Body, ValidationPipe, UsePipes } from '@nestjs/common';
import { Request, Response } from 'express';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UserService } from './user.service';
import { LoginBodyDto } from '../dto/login';

@Controller('user')
@ApiTags('用户系统')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('login')
    @ApiOperation({ summary: '登录' })//接口描述
    // @UsePipes(new ValidationPipe({ transform: true }))
    async loginPost(@Body() body: LoginBodyDto,@Res() response: Response) {
        // response.header(204, {'demo-test': 'none'})
        // response.redirect('https://www.baidu.com')
        // response.status(HttpStatus.OK)
        // response.status(204)
        response.header('Cache-Control','none')
        console.log(body)
        response.status(HttpStatus.OK).send(this.userService.loginCheck())
        // return response.json({message:this.userService.loginCheck()})
        
    }

        // @Get('login')
    // @HttpCode(204)//状态码
    // @Header('Cache-Control', 'none')//头自定义res.header()
    // @Redirect('https://docs.nestjs.com', 302)//重定向
    // @Req() request: Request,@Res() response: Response
    // async loginGet(@Req() request: Request,@Res() response: Response): Promise<any> {
    //     // response.header(204, {'demo-test': 'none'})
    //     // response.redirect('https://www.baidu.com')
    //     // response.status(HttpStatus.OK)
    //     response.status(204)
    //     response.header('Cache-Control','none')
    //     // console.log(response)
        
    //     response.send(this.userService.loginCheck())
        
    // }
}

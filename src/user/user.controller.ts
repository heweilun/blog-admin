import { Controller, Get, Post, Req, Res, HttpCode, Header, Redirect, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { UserService } from './user.service'

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('login')
    // @HttpCode(204)//状态码
    // @Header('Cache-Control', 'none')//头自定义res.header()
    // @Redirect('https://docs.nestjs.com', 302)//重定向
    // @Req() request: Request,@Res() response: Response
    loginCheck(@Req() request: Request,@Res() response: Response): any {
        // response.header(204, {'demo-test': 'none'})
        // response.redirect('https://www.baidu.com')
        // response.status(HttpStatus.OK)
        response.status(204)
        response.header('Cache-Control','none')
        // console.log(response)
        
        response.send(this.userService.loginCheck())
        
    }
}

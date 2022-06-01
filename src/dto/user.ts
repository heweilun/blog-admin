// login的dto
import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class LoginBodyDto {
    @ApiProperty({ 
        required: true,
        description:'验证码',
        example: '123456'
    })
    @IsNotEmpty({ message: '验证码 不允许为空' })
    verifyCode: string;

    @ApiProperty({ 
        required: true,
        description:'手机号'
    })
    @IsNotEmpty({ message: 'phone 不允许为空' })
    @IsNumber()
    phone: number;
}
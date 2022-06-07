// login的dto
import { IsNotEmpty, IsNumber, IsNumberString } from 'class-validator';
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
    @IsNumberString()
    phone: number;
}

export class VerifyBodyDto {
    @ApiProperty({ 
        required: true,
        description:'手机号码',
        example: '13188886666'
    })
    @IsNotEmpty({ message: '手机号码 不允许为空' })
    @IsNumberString()
    phone: number;
}
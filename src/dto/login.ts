// login的dto
import { IsNotEmpty, IsNumber } from 'class-validator'
export class LoginBodyDto {
    @IsNotEmpty({ message: 'username 不允许为空' })
    username: string;
    @IsNotEmpty({ message: 'phone 不允许为空' })
    @IsNumber()
    phone: number;
}
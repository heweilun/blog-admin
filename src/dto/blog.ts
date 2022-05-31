// login的dto
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class ListQueryDto {
    @ApiProperty({ 
        required: true,
        description:'页数'
    })
    @IsNotEmpty({ message: 'pageSize页数不能为空' })
    pageSize: string;

    @ApiProperty({ 
        required: true,
        description:'页码'
    })
    @IsNotEmpty({ message: 'pageNo页码不能为空' })
    pageNo: string;
}

export class AddBodyDto {
    @ApiProperty({ 
        required: true,
        description:'博客标题'
    })
    @IsNotEmpty({ message: '博客标题不能为空' })
    @IsString()
    title: string;

    @ApiProperty({ 
        required: true,
        description:'博客内容'
    })
    @IsNotEmpty({ message: '博客内容不能为空' })
    @IsString()
    content: string;
}

export class DeleteParamDto {
    @ApiProperty({ 
        required: true,
        description:'博客id'
    })
    @IsNotEmpty({ message: '博客不能为空' })
    id: string;
}

export class UpdateBodyDto {
    @ApiProperty({ 
        required: true,
        description:'博客标题'
    })
    @IsNotEmpty({ message: '博客标题不能为空' })
    @IsString()
    title: string;

    @ApiProperty({ 
        required: true,
        description:'博客内容'
    })
    @IsNotEmpty({ message: '博客内容不能为空' })
    @IsString()
    content: string;

    @ApiProperty({ 
        required: true,
        description:''
    })
    @IsNotEmpty({ message: '博客id不能为空' })
    id: string;
}

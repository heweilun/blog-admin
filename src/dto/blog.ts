// login的dto
import { IsNotEmpty, IsNumber, IsString, IsInt, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class SearchQueryDto {
    @ApiProperty({ 
        required: true,
        description:'页数'
    })
    @IsInt({ message: '页数必须为数字整数' })
    @Min(1,{ message: '页数不能小于1' })
    pageSize: number;

    @ApiProperty({ 
        required: true,
        description:'页码'
    })
    @IsInt({ message: '页码必须为数字整数' })
    @Min(1,{ message: '页码不能小于1' })
    pageNo: number;

    @ApiProperty({ 
        required: false,
        description:'博客标题'
    })
    title: string;
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

    @ApiProperty({ 
        required: true,
        description:'博客作者'
    })
    @IsNotEmpty({ message: '作者不能为空' })
    @IsString()
    author: string;

    @ApiProperty({ 
        required: true,
        description:'创建时间'
    })
    @IsNotEmpty({ message: '创建时间必填' })
    @IsInt()
    createtime: number;

    @ApiProperty({ 
        required: true,
        description:'用户主键必传'
    })
    @IsNotEmpty({ message: '用户主键必传' })
    @IsInt()
    user_id: number;
}

export class DeleteBodyDto {
    @ApiProperty({ 
        required: true,
        description:'博客id'
    })
    @IsNotEmpty({ message: '博客不能为空' })
    blog_id: number;

    @ApiProperty({ 
        required: true,
        description:'作者id'
    })
    @IsNotEmpty({ message: '作者不能为空' })
    user_id: number;
}

export class UpdateBodyDto {
    @ApiProperty({ 
        required: true,
        description:'博客主键必传'
    })
    @IsNotEmpty({ message: '博客主键必传' })
    @IsInt()
    blog_id: number;

    @ApiProperty({ 
        required: true,
        description:'用户主键必传'
    })
    @IsNotEmpty({ message: '用户主键必传' })
    @IsInt()
    user_id: number;

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
        description:'博客作者'
    })
    @IsNotEmpty({ message: '作者不能为空' })
    @IsString()
    author: string;

    
}

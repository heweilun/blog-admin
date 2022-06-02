import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {SuccessModel, ErrorModel} from '../model/resModel';
import UserEntity from 'src/entity/user.entity';
import { getRepository, Repository } from 'typeorm';

@Injectable()
export class UserService {
    // @InjectRepository(UserEntity)
    // private readonly userRespository: Repository<UserEntity>
    async loginCheck(loginDto): Promise<any> {
        const { phone } = loginDto
        const loginState = await getRepository(UserEntity).findOne({where: {phone} })
        return loginState? new SuccessModel(loginState, '用户登录成功'): new ErrorModel(loginState, '用户不存在');
    }
}

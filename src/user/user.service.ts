import { Injectable } from '@nestjs/common';
import {SuccessModel} from '../model/resModel';
import UserEntity from 'src/entity/user.entity';
import { Repository, getManager, getRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
    // constructor(
    //     @InjectRepository(UserEntity)
    //     private userRepository: Repository<UserEntity>
    // ) {}
    async loginCheck(loginDto): Promise<any> {
        // const res  = await this.userRepository.find()
        const { phone } = loginDto
        const res = getRepository(UserEntity).findOne({where: {phone} })
        return res;
        // console.log(loginDto)
        return new SuccessModel(true, '登录成功', 0)
    }
}

import { Injectable } from '@nestjs/common';
import {SuccessModel, ErrorModel} from '../model/resModel';

@Injectable()
export class BlogService {
    async blogList(): Promise<any> {
        return new SuccessModel([
            {
                id: 1,
            },
            {
                id: 2
            }
        ], '登录成功', 0)
    }

    blogAdd(): boolean {
        return true
    }

    blogDelete(): boolean {
        return true
    }

    blogUpdate(): any {
        return {
            success: true,
            message: '更新成功'
        }
    }
}

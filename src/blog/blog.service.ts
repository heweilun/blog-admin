import { Injectable } from '@nestjs/common';

@Injectable()
export class BlogService {
    blogList(): any[] {
        return [{
            id: 1,
            name: 'test'
        }];
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

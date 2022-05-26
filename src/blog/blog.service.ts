import { Injectable } from '@nestjs/common';

@Injectable()
export class BlogService {
    blogList(): string {
        return 'blog-list';
    }
}

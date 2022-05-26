import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    loginCheck(): string {
        return 'login';
    }
}

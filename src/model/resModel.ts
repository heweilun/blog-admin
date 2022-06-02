// 数据返回统一处理模型
export class BaseModel {
    public data: any
    public message?: string
    public success: true
    public constructor(data: any, message: string) {
        this.success = true
        this.data = data?data:null
        if(message) {
            this.message = message
        }
    }
}

export class SuccessModel extends BaseModel {
    public errno: number
    constructor(data, message, errno?: number){
        super(data, message)
        this.errno = errno || 0
    }
}

export class ErrorModel extends BaseModel {
    public errno: number
    constructor(data, message, errno?: number) {
        super(data, message)
        this.errno = errno || -1
    }
}


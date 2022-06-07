import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {SuccessModel, ErrorModel} from '../model/resModel';
import UserEntity from 'src/entity/user.entity';
import { getRepository, Repository } from 'typeorm';
import client from '../sms';
import { env } from '../config';
import {REDIS_DB} from '../redis';

@Injectable()
export class UserService {
    // @InjectRepository(UserEntity)
    // private readonly userRespository: Repository<UserEntity>
    async loginCheck(loginDto): Promise<any> {
        const { phone } = loginDto
        const loginState = await getRepository(UserEntity).findOne({where: {phone} })
        return loginState? new SuccessModel(loginState, '用户登录成功'): new ErrorModel(loginState, '用户不存在');
    }

    async sendVerifyCode(verifyDto): Promise<any> {
        const { phone } = verifyDto
        const code:number = Math.floor(Math.random()*(9999-1000)) + 1000//4位数验证码
        const params = {
            /* 短信应用ID: 短信SmsSdkAppId在 [短信控制台] 添加应用后生成的实际SmsSdkAppId，示例如1400006666 */
            // 应用 ID 可前往 [短信控制台](https://console.cloud.tencent.com/smsv2/app-manage) 查看
            SmsSdkAppId: env.SMS_CONFIG.SmsSdkAppId,
            /* 短信签名内容: 使用 UTF-8 编码，必须填写已审核通过的签名 */
            // 签名信息可前往 [国内短信](https://console.cloud.tencent.com/smsv2/csms-sign) 或 [国际/港澳台短信](https://console.cloud.tencent.com/smsv2/isms-sign) 的签名管理查看
            SignName: env.SMS_CONFIG.SignName,
            /* 模板 ID: 必须填写已审核通过的模板 ID */
            // 模板 ID 可前往 [国内短信](https://console.cloud.tencent.com/smsv2/csms-template) 或 [国际/港澳台短信](https://console.cloud.tencent.com/smsv2/isms-template) 的正文模板管理查看
            TemplateId: env.SMS_CONFIG.TemplateId,
            /* 模板参数: 模板参数的个数需要与 TemplateId 对应模板的变量个数保持一致，若无模板参数，则设置为空 */
            TemplateParamSet: [code],//验证码
            /* 下发手机号码，采用 e.164 标准，+[国家或地区码][手机号]
                * 示例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号，最多不要超过200个手机号*/
            PhoneNumberSet: [`+86${phone}`],//需要发送的号码
            /* 用户的 session 内容（无需要可忽略）: 可以携带用户侧 ID 等上下文信息，server 会原样返回 */
            SessionContext: "",
            /* 短信码号扩展号（无需要可忽略）: 默认未开通，如需开通请联系 [腾讯云短信小助手] */
            ExtendCode: "",
            /* 国际/港澳台短信 senderid（无需要可忽略）: 国内短信填空，默认未开通，如需开通请联系 [腾讯云短信小助手] */
            SenderId: "",
        }
        const smsState = await client.SendSms(params,  async(err: any, response: any)=> {
            // 请求异常返回，打印异常信息
            if(err){
                console.log(err)
            }
        })
        console.log(smsState, 1)
        if(smsState.SendStatusSet[0].Fee){
            // 发送成功将验证码存入redis
            const redisState = await REDIS_DB.set('verifyCode',code)//留存，key以用户信息为准？
            return redisState? new SuccessModel(redisState, '短信验证码发送成功'): new ErrorModel(redisState, '短信验证码发送失败');
        } else {
            return new ErrorModel(smsState.SendStatusSet[0].Message, '短信验证码发送失败')
        }
        const statusParams = {
        // 短信应用ID: 短信SdkAppId在 [短信控制台] 添加应用后生成的实际SdkAppId，示例如1400006666
        SmsSdkAppId: env.SMS_CONFIG.SmsSdkAppId,
        // 拉取最大条数，最多100条
        Limit: 10,
        }
        client.PullSmsSendStatus(statusParams, (err: any, response: any)=> {
            // 请求异常返回，打印异常信息
                console.log(err, response, '2')
        })
    }
        
}

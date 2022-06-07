export default {
    // 服务基本配置
    SERVICE_CONFIG: {
      // 端口
      port: 8080,
    },
  
    // 数据库配置
    DATABASE_CONFIG: {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Hikvision110.',
      database: 'blog_db',
      autoLoadEntities: true,
      synchronize: true,
    },

    //redis配置
    REDIS_CONFIG: {
      port: 6379,
      host: '127.0.0.1',
      password: '',
      db: 0
    },

    //腾讯短信服务
    SMS_CONFIG: {
      SmsSdkAppId: "1400684163",
      /* 短信签名内容: 使用 UTF-8 编码，必须填写已审核通过的签名，签名信息可登录 [短信控制台] 查看 */
      SignName: "技术微站",
      /* 短信码号扩展号: 默认未开通，如需开通请联系 [sms helper] */
      ExtendCode: "",
      /* 国际/港澳台短信 senderid: 国内短信填空，默认未开通，如需开通请联系 [sms helper] */
      SenderId: "",
      /* 用户的 session 内容: 可以携带用户侧 ID 等上下文信息，server 会原样返回 */
      SessionContext: "",
      /* 模板 ID: 必须填写已审核通过的模板 ID。模板ID可登录 [短信控制台] 查看 */
      TemplateId: "1413889",
      secretId: 'AKID0qQjmY3HEwNZUEl22mFRM1QYP0KNwFJ6',
      secretKey: 'XnnWyA6l8F5ewxjFUS9ZiaBVYKp31i8I',
    }
  };
  
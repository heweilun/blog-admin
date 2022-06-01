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
  };
  
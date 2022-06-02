import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({
  name: 'blog',
})
class BlogEntity {
  @PrimaryGeneratedColumn()
  blog_id: number;

  @Column({
    type: 'varchar',
    comment: '博客标题',
  })
  title: string;

  @Column({
    type: 'longtext',
    comment: '博客内容',
  })
  content: string;

  @Column({
    type: 'int',
    comment: '创建时间',
  })
  createtime: number;

  @Column({
    type: 'varchar',
    comment: '作者',
  })
  author: string;

  @Column({
    type: 'int',
    comment: '作者id',
  })
  user_id: number;
}

export default BlogEntity;

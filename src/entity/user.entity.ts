import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';

@Entity({
  name: 'user',
})
class UserEntity {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({
    type: 'int',
    comment: '手机号',
  })
  phone: number;

  @Column({
    type: 'varchar',
    length: 20,
    comment: '创建时间',
  })
  createtime: Date;
}

export default UserEntity;

import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ICreateUserFields } from '@/api/user/dto/fields/create-user.fields';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  private _id!: number;

  @Column({ name: '_v', nullable: false, default: '0' })
  private _v!: string;

  @Column({ name: 'name', nullable: false })
  private _name!: string;

  @Column({ name: 'nickname', nullable: false })
  private _nickname!: string;

  @Column({ name: 'password', nullable: false })
  private _password!: string;

  @Column({ name: 'email', nullable: false })
  private _email!: string;

  @UpdateDateColumn({ name: 'updated_at' })
  private _updatedAt!: Date;

  @CreateDateColumn({ name: 'created_At' })
  private _createdAt!: Date;

  static from(fields: ICreateUserFields): User {
    const user = new User();
    user._name = fields.name;
    user._nickname = fields.nickname;
    user._email = fields.email;
    user._password = fields.password;
    return user;
  }

  get id(): number {
    return this._id;
  }

  get v(): string {
    return this._v;
  }

  get name(): string {
    return this._name;
  }

  get nickname(): string {
    return this._nickname;
  }

  get password(): string {
    return this._password;
  }

  get email(): string {
    return this._email;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }

  get createdAt(): Date {
    return this._createdAt;
  }
}

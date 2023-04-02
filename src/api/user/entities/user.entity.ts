import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  private _id!: number;

  @Column({ nullable: false, default: '0' })
  private _v!: string;

  @Column({ nullable: false })
  private _name!: string;

  @Column({ nullable: false })
  private _nickname!: string;

  @Column({ nullable: true })
  private _password?: string;

  @Column({ nullable: false })
  private _email!: string;

  @UpdateDateColumn({ name: 'updated_at' })
  private _updatedAt!: Date;

  @CreateDateColumn({ name: 'created_At' })
  private _createdAt!: Date;

  static from({ name, nickname, email, password }: { name: string; nickname: string; email: string; password?: string }): User {
    const user = new User();
    user._name = name;
    user._nickname = nickname;
    user._email = email;
    user._password = password;
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

  get password(): string | undefined {
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

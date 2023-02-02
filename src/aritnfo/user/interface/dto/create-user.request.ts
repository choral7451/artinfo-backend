import { UserFields } from '@/aritnfo/user/application/dto/create-user-fields.class';

export class CreateUserRequest {
  readonly name!: string;
  readonly nick_name!: string;
  readonly email!: string;
  readonly password!: string;

  getUserFields(): UserFields {
    const fields = new UserFields();
    fields.name = this.name;
    fields.nick_name = this.nick_name;
    fields.email = this.email;
    fields.password = this.password;
    return fields;
  }
}

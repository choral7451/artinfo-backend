import { Index, ModelOptions, Prop } from '@typegoose/typegoose';
import { ObjectId, ObjectIdToString } from '@/global/mongo';

@ModelOptions({
  schemaOptions: {
    collection: 'users',
    versionKey: '_v',
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  },
})
@Index({ email: 1 }, { unique: true })
export class User {
  @Prop({ type: ObjectId, alias: 'id', default: () => ObjectId(), get: ObjectIdToString })
  _id!: string;
  id!: string;

  @Prop({ type: String, required: true, default: '0' })
  _v!: string;

  @Prop({ type: String, required: true })
  name!: string;

  @Prop({ alias: 'nick_name', type: String, required: true })
  nickName!: string;

  @Prop({ type: String, required: true })
  email!: string;

  @Prop({ type: Date, default: Date.now })
  updatedAt!: Date;

  @Prop({ type: Date, default: Date.now })
  createdAt!: Date;
}

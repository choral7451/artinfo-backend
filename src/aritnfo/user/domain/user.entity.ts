import { ModelOptions, Prop } from '@typegoose/typegoose';
import { ObjectId, ObjectIdToString } from '@/global/types/mongo';

@ModelOptions({
  schemaOptions: {
    collection: 'user',
    versionKey: '_v',
    timestamps: {
      createdAt: false,
      updatedAt: true,
    },
  },
})
export class User {
  @Prop({ type: ObjectId, alias: 'id', default: () => ObjectId(), get: ObjectIdToString })
  _id!: string;
  id!: string;

  @Prop({ type: String, required: true, default: '0' })
  _v!: string;

  @Prop({ type: String, required: true })
  name!: string;

  @Prop({ type: String, required: true })
  nick_name!: string;

  @Prop({ type: String, required: true })
  email!: string;

  @Prop({ type: String, required: true })
  password!: string;

  @Prop({ type: Date, default: Date.now })
  createdAt!: Date;
}

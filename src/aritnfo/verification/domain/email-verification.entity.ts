import { ModelOptions, Prop } from '@typegoose/typegoose';
import { ObjectId, ObjectIdToString } from '@/common/types/mongo';

@ModelOptions({
  schemaOptions: {
    collection: 'email_verification',
    versionKey: '_v',
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  },
})
export class EmailVerification {
  @Prop({ type: ObjectId, alias: 'id', default: () => ObjectId(), get: ObjectIdToString })
  _id!: string;
  id!: string;

  @Prop({ type: String, required: true, default: '0' })
  _v!: string;

  @Prop({ type: String, required: true })
  email!: string;

  @Prop({ type: String, required: false })
  verificationCode?: string;

  @Prop({ type: Boolean, required: true, default: false })
  verified!: boolean;

  @Prop({ type: String, required: false })
  verifiedToken?: string;

  @Prop({ type: Boolean, required: true, default: false })
  isDisabled!: boolean;

  @Prop({ type: Date, default: Date.now })
  updatedAt!: Date;

  @Prop({ type: Date, default: Date.now })
  createdAt!: Date;
}

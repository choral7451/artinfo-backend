import { mongoose } from '@typegoose/typegoose';
import { Nullable } from './native';

export const ObjectId = function (objectIdString?: string): ObjectId {
  return new mongoose.Types.ObjectId(objectIdString);
};

export type ObjectId = mongoose.Types.ObjectId;

export const ObjectIdToString = (id?: ObjectId): Nullable<string> => id?.toHexString() || null;

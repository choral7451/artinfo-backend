import mongoose from 'mongoose';
import { Nullable } from '@/global/type';

export const ObjectId = function (objectIdString?: string): ObjectId {
  return new mongoose.Types.ObjectId(objectIdString);
};

export type ObjectId = mongoose.Types.ObjectId;

export const ObjectIdToString = (id?: ObjectId): Nullable<string> => id?.toHexString() || null;
export const ObjectIdsToStrings = (ids?: ObjectId[]): Nullable<string[]> => ids?.map(id => id.toHexString()) || null;

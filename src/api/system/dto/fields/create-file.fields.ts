import { FileTargetType } from '../../../../common/enum';

export interface ICreateFileFields {
  fileName: string;
  url: string;
  target: FileTargetType;
  targetId: string;
  mimeType: string;
  size: number;
}

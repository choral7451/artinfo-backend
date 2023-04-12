export interface MulterFile {
  fieldName: string;
  originalName: string;
  encoding: string;
  mimetype: string;
  size: number;
  buffer: Buffer;
}

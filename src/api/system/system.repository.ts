import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { File } from '@/api/system/file.entity';

@Injectable()
export class SystemRepository {
  constructor(
    @InjectRepository(File)
    private systemRepository: Repository<File>,
  ) {}

  async create(file: File): Promise<string> {
    const result = await this.systemRepository.save(file);
    return result.url;
  }
}

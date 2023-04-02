import { applyDecorators, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

export function ArtinfoController(prefix: string, apiTags: string): ClassDecorator {
  return applyDecorators(Controller(prefix), ApiTags(apiTags));
}

export function ArtinfoPost(path: string, summary: string): MethodDecorator {
  return applyDecorators(Post(path), ApiOperation({ summary: summary }));
}

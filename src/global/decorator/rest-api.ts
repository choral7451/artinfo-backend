import { applyDecorators, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

export function ArtinfoController(prefix: string, apiTags: string): ClassDecorator {
  return applyDecorators(Controller(prefix), ApiTags(apiTags));
}

export function ArtinfoPost({ path, summary, auth = false }: { path: string; summary: string; auth?: boolean }): MethodDecorator {
  const decorators = [Post(path), ApiOperation({ summary: summary })];
  if (auth) {
    decorators.push(ApiBearerAuth());
  }
  return applyDecorators(...decorators);
}

export function ArtinfoPatch({ path, summary, auth = false }: { path: string; summary: string; auth?: boolean }): MethodDecorator {
  const decorators = [Patch(path), ApiOperation({ summary: summary })];
  if (auth) {
    decorators.push(ApiBearerAuth());
  }
  return applyDecorators(...decorators);
}

export function ArtinfoDelete({ path, summary, auth = false }: { path: string; summary: string; auth?: boolean }): MethodDecorator {
  const decorators = [Delete(path), ApiOperation({ summary: summary })];
  if (auth) {
    decorators.push(ApiBearerAuth());
  }
  return applyDecorators(...decorators);
}

export function ArtinfoGet({ path, summary, auth = false }: { path: string; summary: string; auth?: boolean }): MethodDecorator {
  const decorators = [Get(path), ApiOperation({ summary: summary })];
  if (auth) {
    decorators.push(ApiBearerAuth());
  }
  return applyDecorators(...decorators);
}

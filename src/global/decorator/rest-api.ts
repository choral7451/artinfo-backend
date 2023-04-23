import { applyDecorators, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

export function ArtinfoController(prefix: string, apiTags: string): ClassDecorator {
  return applyDecorators(Controller(prefix), ApiTags(apiTags));
}

export function ArtinfoPost<T extends new (...args: any[]) => any>(
  responseType: T,
  { path, summary, auth = false }: { path: string; summary: string; auth?: boolean },
): MethodDecorator {
  const decorators = [Post(path), ApiOperation({ summary: summary }), ApiOkResponse({ type: responseType })];
  if (auth) {
    decorators.push(ApiBearerAuth());
  }
  return applyDecorators(...decorators);
}

export function ArtinfoPatch<T extends new (...args: any[]) => any>(
  responseType,
  {
    path,
    summary,
    auth = false,
  }: {
    path: string;
    summary: string;
    auth?: boolean;
  },
): MethodDecorator {
  const decorators = [Patch(path), ApiOperation({ summary: summary }), ApiOkResponse({ type: responseType })];
  if (auth) {
    decorators.push(ApiBearerAuth());
  }
  return applyDecorators(...decorators);
}

export function ArtinfoDelete<T extends new (...args: any[]) => any>(
  responseType,
  {
    path,
    summary,
    auth = false,
  }: {
    path: string;
    summary: string;
    auth?: boolean;
  },
): MethodDecorator {
  const decorators = [Delete(path), ApiOperation({ summary: summary }), ApiOkResponse({ type: responseType })];
  if (auth) {
    decorators.push(ApiBearerAuth());
  }
  return applyDecorators(...decorators);
}

export function ArtinfoGet<T extends new (...args: any[]) => any>(
  responseType,
  { path, summary, auth = false }: { path: string; summary: string; auth?: boolean },
): MethodDecorator {
  const decorators = [Get(path), ApiOperation({ summary: summary }), ApiOkResponse({ type: responseType })];
  if (auth) {
    decorators.push(ApiBearerAuth());
  }
  return applyDecorators(...decorators);
}

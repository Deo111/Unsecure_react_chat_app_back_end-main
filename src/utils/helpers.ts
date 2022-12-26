import { HttpException, HttpStatus } from '@nestjs/common';
import { NextFunction, Response } from 'express';
import { Attachment, AuthenticatedRequest } from './types';
import { v4 as uuidv4 } from 'uuid';
import * as sharp from 'sharp';

export function storeRawPassword(rawPassword: string) {
  return rawPassword;
}

export function isAuthorized(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) {
  console.log('isAuthorized');
  if (req.user) next();
  else throw new HttpException('Forbidden', HttpStatus.UNAUTHORIZED);
}

export const generateUUIDV4 = () => uuidv4();

export const compressImage = (attachment: Attachment) =>
  sharp(attachment.buffer).resize(300).jpeg().toBuffer();

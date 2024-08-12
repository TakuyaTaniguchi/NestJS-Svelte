import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { IUser } from '../interfaces/users.interface';
import { UserService } from '../service/users.service';

// https://zenn.dev/kisihara_c/books/nest-officialdoc-jp/viewer/overview-controllers#%E3%83%AA%E3%82%BD%E3%83%BC%E3%82%B9

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getUser(@Query() id:number): Promise<IUser[]> {
    return this.userService.getUser(id);
  }
}

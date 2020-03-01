import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { User } from './model/user.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { Tag } from './model/tag.model';

@Injectable()
export class BookmarkService {
  constructor(
    @InjectModel(User)
    private readonly userModel: ReturnModelType<typeof User>,
    @InjectModel(Tag)
    private readonly tagModel: ReturnModelType<typeof Tag>,
  ) {
  }
}

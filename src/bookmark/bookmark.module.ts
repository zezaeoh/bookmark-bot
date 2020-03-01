import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { BookmarkController } from './bookmark.controller';
import { User } from './model/user.model';
import { Tag } from './model/tag.model';
import { BookmarkService } from './bookmark.service';

@Module({
  imports: [
    TypegooseModule.forFeature([User, Tag]),
  ],
  controllers: [BookmarkController],
  providers: [BookmarkService]
})
export class BookmarkModule {}

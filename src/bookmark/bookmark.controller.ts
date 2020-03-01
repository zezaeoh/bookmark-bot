import { Body, Controller, Logger, Post } from '@nestjs/common';
import { BookmarkService } from './bookmark.service';
import { SkillPayload } from './dto/skill-payload';

@Controller('bookmark')
export class BookmarkController {
  private readonly logger = new Logger(BookmarkController.name);

  constructor(private readonly bookmarkService: BookmarkService) {}

  @Post('getTags')
  getTags(@Body() skillPayload: SkillPayload) {
    this.logger.debug(skillPayload);
  }

  @Post('addTag')
  addTag(@Body() skillPayload: SkillPayload) {
    this.logger.debug(skillPayload);
  }

  @Post('getBookmarks')
  getBookmarks(@Body() skillPayload: SkillPayload) {
    this.logger.debug(skillPayload);
  }

  @Post('addBookmark')
  addBookmark(@Body() skillPayload: SkillPayload) {
    this.logger.debug(skillPayload);
  }
}

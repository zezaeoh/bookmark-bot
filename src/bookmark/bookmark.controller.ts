import { Body, Controller, HttpCode, Logger, Post } from '@nestjs/common';
import { BookmarkService } from './bookmark.service';
import { SkillPayload } from './dto/skill-payload';

@Controller('bookmark')
export class BookmarkController {
  private readonly logger = new Logger(BookmarkController.name);

  constructor(private readonly bookmarkService: BookmarkService) {}

  @Post('getTags')
  @HttpCode(200)
  getTags(@Body() skillPayload: SkillPayload) {
    this.logger.debug(skillPayload);
  }

  @Post('addTag')
  @HttpCode(200)
  addTag(@Body() skillPayload: SkillPayload) {
    this.logger.debug(skillPayload);
  }

  @Post('getBookmarks')
  @HttpCode(200)
  getBookmarks(@Body() skillPayload: SkillPayload) {
    this.logger.debug(skillPayload);
  }

  @Post('addBookmark')
  @HttpCode(200)
  addBookmark(@Body() skillPayload: SkillPayload) {
    this.logger.debug(skillPayload);
  }
}

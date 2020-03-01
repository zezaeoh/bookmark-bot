import { Body, Controller, HttpCode, Logger, Post } from '@nestjs/common';
import { BookmarkService } from './bookmark.service';
import { SkillPayload } from './dto/skill.payload.dto';
import { SkillResponse } from './dto/skill.response.dto';

@Controller('bookmark')
export class BookmarkController {
  private readonly logger = new Logger(BookmarkController.name);

  constructor(private readonly bookmarkService: BookmarkService) {}

  @Post('getTags')
  @HttpCode(200)
  getTags(@Body() skillPayload: SkillPayload): Promise<SkillResponse> {
    this.logger.debug(skillPayload);
    return this.bookmarkService.getTags(skillPayload)
  }

  @Post('addTag')
  @HttpCode(200)
  addTag(@Body() skillPayload: SkillPayload) {
    this.logger.debug(skillPayload);
    return this.bookmarkService.addTag(skillPayload)
  }

  @Post('getBookmarks')
  @HttpCode(200)
  getBookmarks(@Body() skillPayload: SkillPayload) {
    this.logger.debug(skillPayload);
    return this.bookmarkService.getBookmarks(skillPayload)
  }

  @Post('addBookmark')
  @HttpCode(200)
  addBookmark(@Body() skillPayload: SkillPayload) {
    this.logger.debug(skillPayload);
    return this.bookmarkService.addBookmark(skillPayload)
  }
}

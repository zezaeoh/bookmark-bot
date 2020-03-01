import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { User } from './model/user.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { Tag } from './model/tag.model';
import { SkillPayload } from './dto/skill.payload.dto';
import { SkillResponse } from './dto/skill.response.dto';
import { Template } from './dto/template';
import { ListCard } from './dto/template/list-card.output';

@Injectable()
export class BookmarkService {
  constructor(
    @InjectModel(User)
    private readonly userModel: ReturnModelType<typeof User>,
    @InjectModel(Tag)
    private readonly tagModel: ReturnModelType<typeof Tag>,
  ) {
  }

  async getTags(skillPayload: SkillPayload) {
    const userId = skillPayload.userRequest.user.id;
    const tags =  await this.userModel.getTags(userId);
    return new SkillResponse({
      version: "2.0",
      template: new Template({
        outputs: [
          new ListCard()
        ]
      })
    });
  }

  async addTag(skillPayload: SkillPayload) {
    const userId = skillPayload.userRequest.user.id;

  }

  async getBookmarks(skillPayload: SkillPayload) {
    const userId = skillPayload.userRequest.user.id;

  }

  async addBookmark(skillPayload: SkillPayload) {
    const userId = skillPayload.userRequest.user.id;

  }
}

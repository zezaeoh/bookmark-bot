
/*
{
 "userRequest": {
    "timezone": "Asia/Seoul",
    "params": {},
    "block": {
      "id": "<블록 id>",
      "name": "<블록 이름>"
    },
    "utterance": "<사용자 발화>",
    "lang": "kr",
    "user": {
      "id": "<사용자 botUserKey>",
      "type": "botUserKey",
      "properties": {
        "plusfriendUserKey": "<카카오톡 채널 사용자 id>"
      }
    }
  },
  "contexts": [],
  "bot": {
    "id": "<봇 id>",
    "name": "<봇 이름>"
  },
  "action": {
    "name": "<스킬 이름>",
    "clientExtra": null,
    "params": {},
    "id": "<스킬 id>",
    "detailParams": {}
  }
}
 */

import { Allow, IsString, ValidateNested } from 'class-validator';

class UserProperty {
  @IsString()
  plusfriendUserKey: string;

  @IsString()
  appUserId: string;
}

class UserInfo {
  @IsString()
  id: string;

  @IsString()
  type: string;

  @ValidateNested()
  properties: UserProperty
}

class Block {
  @IsString()
  id: string;

  @IsString()
  name: string;
}

class UserRequest {
  @IsString()
  timezone: string;

  @ValidateNested()
  block: Block;

  @IsString()
  utterance: string;

  @IsString()
  lang: string;

  @ValidateNested()
  user: UserInfo
}

class Bot {
  @IsString()
  id: string;

  @IsString()
  name: string;
}

class Action {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @Allow()
  params: Map<string, string>;

  @Allow()
  detailParams: Map<string, any>;

  @Allow()
  clientExtra: Map<string, any>;
}

export class SkillPayload {
  @ValidateNested()
  readonly userRequest: UserRequest;

  @Allow()
  readonly context: any[];

  @ValidateNested()
  readonly bot: Bot;

  @ValidateNested()
  readonly action: Action;
}
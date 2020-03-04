export class Template {
  outputs: Output[];

  constructor(partial: Partial<Template>) {
    Object.assign(this, partial);
  }
}

export class Output {}

/**
 * @///<reference path="https://i.kakao.com/docs/skill-response-format#carouselheader"/>
 */
export class Link {
  mobile?: string;
  ios?: string;
  android?: string;
  pc?: string;
  mac?: string;
  win?: string;
  web?: string;

  constructor(partial: Partial<Link>) {
    Object.assign(this, partial);
  }
}

/**
 * @///<reference path="https://i.kakao.com/docs/skill-response-format#button"/>
 */
export class Button {
  label: string;
  action: string;

  webLinkUrl?: string;
  osLink?: Link;
  messageText?: string;
  phoneNumber?: string;
  blockId?: string;

  extra: Map<string, any>;

  constructor(partial: Partial<Button>) {
    Object.assign(this, partial);
  }
}

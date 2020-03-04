import { Template } from './template';

class Context {}

class Data {}

export class SkillResponse {
  version: '2.0' | '2.1' | '3.0';
  template: Template;
  context?: Context;
  data?: Data;

  protected static staticInit = (() => {
    SkillResponse.prototype.version = '2.0';
  })();

  constructor(partial: Partial<SkillResponse>) {
    Object.assign(this, partial);
  }
}

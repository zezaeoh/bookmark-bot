import { prop } from '@typegoose/typegoose';

export class Bookmark {
  @prop({ required: true })
  public url!: string;

  @prop({ required: true })
  public name!: string;

  @prop()
  public memo?: string;
}

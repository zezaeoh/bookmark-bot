import { arrayProp, modelOptions, prop } from '@typegoose/typegoose';
import { Bookmark } from './bookmark.model';

@modelOptions({ schemaOptions: { timestamps: true } })
export class Tag {
  @prop({ required: true })
  public _id!: string;

  @arrayProp({ items: Bookmark, default: [], _id: false })
  public bookmarks!: Bookmark[];

  public get userId(): string {
    return this._id.split('-')[0];
  }

  public get tag(): string {
    return this._id.split('-')[1];
  }
}

import {
  prop,
  modelOptions,
  arrayProp,
  ReturnModelType,
  DocumentType,
} from '@typegoose/typegoose';

@modelOptions({ schemaOptions: { timestamps: true } })
export class User {
  @prop({ required: true })
  public _id!: string;

  @arrayProp({ items: String, required: true, default: [] })
  public tags!: string[];

  public static async getTags(
    this: ReturnModelType<typeof User>,
    userId: string,
  ): Promise<string[]> {
    const updatedAt = new Date();
    const user = (await this.findByIdAndUpdate(
      userId,
      { updatedAt },
      { upsert: true, new: true, setDefaultsOnInsert: true },
    )) as DocumentType<User>;
    return user.tags;
  }
}

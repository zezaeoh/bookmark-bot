import {
  prop,
  modelOptions, arrayProp,
} from '@typegoose/typegoose';

@modelOptions({ schemaOptions: { timestamps: true }})
export class User {
  @prop({ required: true })
  public _id!: string;

  @arrayProp({ items: String, required: true, default: [] })
  public tags!: string[];
}
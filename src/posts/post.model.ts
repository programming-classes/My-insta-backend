import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type PostDocument = Post & Document;

@Schema()
export class Post {
  @Prop()
  owner: string;

  @Prop()
  caption: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);

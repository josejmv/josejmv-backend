// main tools
import { ObjectType, InputType, Field, ID } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { IsString, IsNotEmpty } from 'class-validator'
import * as mongoose from 'mongoose'

@Schema()
@InputType()
@ObjectType('Post')
export class PostDto {
  @Field(() => ID, { nullable: true })
  @IsString()
  @IsNotEmpty()
  _id: string

  @Prop()
  @Field()
  @IsString()
  @IsNotEmpty()
  title: string

  @Prop()
  @Field()
  @IsString()
  @IsNotEmpty()
  picture: string

  @Prop()
  @Field()
  @IsString()
  @IsNotEmpty()
  content: string

  @Prop()
  @Field()
  @IsString()
  @IsNotEmpty()
  excerpt: string

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }] })
  @Field(() => [ID])
  categories: string[]
}
export type PostDocument = mongoose.HydratedDocument<PostDto>
export const PostSchema = SchemaFactory.createForClass(PostDto)

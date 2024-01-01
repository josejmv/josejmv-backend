// main tools
import { ObjectType, InputType, Field, ID } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { IsString, IsNotEmpty } from 'class-validator'
import { HydratedDocument } from 'mongoose'

@Schema()
@InputType()
@ObjectType('Category')
export class CategoryDto {
  @Field(() => ID, { nullable: true })
  @IsString()
  @IsNotEmpty()
  _id: string

  @Prop()
  @Field()
  @IsString()
  @IsNotEmpty()
  name: string
}
export type CategoryDocument = HydratedDocument<CategoryDto>
export const CategorySchema = SchemaFactory.createForClass(CategoryDto)

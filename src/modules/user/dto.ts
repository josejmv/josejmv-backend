// main tools
import { ObjectType, InputType, Field, ID } from '@nestjs/graphql'
import { IsEmail, IsString, IsNotEmpty } from 'class-validator'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

@Schema()
@InputType()
@ObjectType('User')
export class UserDto {
  @Field(() => ID, { nullable: true })
  @IsString()
  @IsNotEmpty()
  _id: string

  @Prop()
  @Field()
  @IsString()
  @IsNotEmpty()
  name: string

  @Prop()
  @Field()
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string

  @Prop()
  @Field()
  @IsString()
  @IsNotEmpty()
  password: string
}
export type UserDocument = HydratedDocument<UserDto>
export const UserSchema = SchemaFactory.createForClass(UserDto)

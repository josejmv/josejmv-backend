// Nestjs dependencies
import { InputType, Field } from '@nestjs/graphql'

// Other dependencies
import { IsNotEmpty, IsString, IsEmail } from 'class-validator'

@InputType()
export class SignInDto {
  @Field()
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string

  @Field()
  @IsString()
  @IsNotEmpty()
  password: string
}

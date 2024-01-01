// main tools
import { ObjectType, Field } from '@nestjs/graphql'

@ObjectType()
export class AuthDto {
  @Field()
  token: string

  @Field()
  refreshToken: string
}

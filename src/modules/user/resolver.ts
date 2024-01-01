// main tools
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'

// DTOs
import { UserDto, UserDocument } from './dto'

// services
import { UserService } from './service'

@Resolver()
export class UserResolver extends UserService {
  @Mutation(() => UserDto)
  async createUser(@Args('data') data: UserDto): Promise<UserDocument> {
    return this.create(data)
  }

  @Query(() => [UserDto])
  async getAllUsers(): Promise<UserDocument[]> {
    return this.getAll()
  }
}

// main tools
import { Resolver, Mutation, Args } from '@nestjs/graphql'

// DTOs
import { AuthDto, SignInDto } from './dtos'

// services
import { AuthService } from './service'

@Resolver()
export class AuthResolver extends AuthService {
  @Mutation(() => AuthDto)
  async signIn(@Args('data') data: SignInDto): Promise<AuthDto> {
    return this.getAuthToken(data)
  }
}

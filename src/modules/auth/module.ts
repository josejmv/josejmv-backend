// main tools
import { JwtService } from '@nestjs/jwt'
import { Module } from '@nestjs/common'

// resolvers
import { AuthResolver } from './resolver'

// services
import { AuthService } from './service'
import { UserService } from '../user/service'

// modules
import { MongooseModule } from '@nestjs/mongoose'

// DTOs
import { UserSchema } from '../user/dto'

@Module({
  providers: [AuthResolver, AuthService, UserService, JwtService],
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
})
export class AuthModule {}

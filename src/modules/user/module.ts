// main tools
import { Module } from '@nestjs/common'

// resolvers
import { UserResolver } from './resolver'

// services
import { UserService } from './service'

// modules
import { MongooseModule } from '@nestjs/mongoose'

// DTOs
import { UserSchema } from './dto'

@Module({
  providers: [UserResolver, UserService],
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
})
export class UserModule {}

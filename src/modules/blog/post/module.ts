// main tools
import { Module } from '@nestjs/common'

// resolvers
import { PostResolver } from './resolver'

// services
import { PostService } from './service'

// modules
import { MongooseModule } from '@nestjs/mongoose'

// DTOs
import { PostSchema } from './dto'

@Module({
  providers: [PostResolver, PostService],
  imports: [MongooseModule.forFeature([{ name: 'Post', schema: PostSchema }])],
})
export class PostModule {}

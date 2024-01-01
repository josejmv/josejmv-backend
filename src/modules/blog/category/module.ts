// main tools
import { Module } from '@nestjs/common'

// resolvers
import { CategoryResolver } from './resolver'

// services
import { CategoryService } from './service'

// modules
import { MongooseModule } from '@nestjs/mongoose'

// DTOs
import { CategorySchema } from './dto'

@Module({
  providers: [CategoryResolver, CategoryService],
  imports: [
    MongooseModule.forFeature([{ name: 'Category', schema: CategorySchema }]),
  ],
})
export class CategoryModule {}

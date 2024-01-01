// utils
import { Module } from '@nestjs/common'

// modules
import { CategoryModule } from 'src/modules/blog/category/module'
import { PostModule } from 'src/modules/blog/post/module'

@Module({ imports: [CategoryModule, PostModule] })
export class BlogModule {}

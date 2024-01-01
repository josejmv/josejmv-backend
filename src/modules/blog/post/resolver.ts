// main tools
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'

// DTOs
import { PostDto, PostDocument } from './dto'

// services
import { PostService } from './service'

@Resolver(() => PostDto)
export class PostResolver extends PostService {
  @Mutation(() => PostDto)
  async createPost(@Args('data') data: PostDto): Promise<PostDocument> {
    return this.create(data)
  }

  @Query(() => [PostDto])
  async getAllPosts(): Promise<PostDocument[]> {
    return this.getAll()
  }

  @Query(() => PostDto)
  async getPostsById(@Args('id') id: string): Promise<PostDocument> {
    return this.getOneById(id)
  }

  @Query(() => [PostDto])
  async getPostsByCategoryId(@Args('id') id: string): Promise<PostDocument[]> {
    return this.getByCategoryId(id)
  }
}

// main tools
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'

// DTOs
import { CategoryDto, CategoryDocument } from './dto'

// services
import { CategoryService } from './service'

@Resolver(() => CategoryDto)
export class CategoryResolver extends CategoryService {
  @Mutation(() => CategoryDto)
  async createCategory(
    @Args('data') data: CategoryDto,
  ): Promise<CategoryDocument> {
    return this.create(data)
  }

  @Query(() => [CategoryDto])
  async getAllCategories(): Promise<CategoryDocument[]> {
    return this.getAll()
  }

  @Query(() => [CategoryDto])
  async getCategoriesById(
    @Args({ name: 'ids', type: () => [String] }) ids: string[],
  ): Promise<CategoryDocument[]> {
    return this.getByIds(ids)
  }
}

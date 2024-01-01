// main tools
import { InjectModel } from '@nestjs/mongoose'
import { Injectable } from '@nestjs/common'
import { Model } from 'mongoose'

// DTOs
import { CategoryDto, CategoryDocument } from './dto'

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel('Category')
    private _categoryModel: Model<CategoryDocument>,
  ) {}

  async create(data: CategoryDto): Promise<CategoryDocument> {
    const created = new this._categoryModel(data)

    return created.save()
  }

  async getAll(): Promise<CategoryDocument[]> {
    return this._categoryModel.find().exec()
  }

  async getByIds(ids: string[]): Promise<CategoryDocument[]> {
    return this._categoryModel.find({ _id: { $in: ids } }).exec()
  }
}

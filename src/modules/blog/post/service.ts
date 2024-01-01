// main tools
import { InjectModel } from '@nestjs/mongoose'
import { Injectable } from '@nestjs/common'
import { Model } from 'mongoose'

// DTOs
import { PostDto, PostDocument } from './dto'

@Injectable()
export class PostService {
  constructor(
    @InjectModel('Post')
    private _postModel: Model<PostDocument>,
  ) {}

  async create(data: PostDto): Promise<PostDocument> {
    const created = new this._postModel(data)

    return created.save()
  }

  async getAll(): Promise<PostDocument[]> {
    return this._postModel.find().exec()
  }

  async getOneById(id: string): Promise<PostDocument> {
    return this._postModel.findById(id).exec()
  }

  async getByCategoryId(id: string): Promise<PostDocument[]> {
    return this._postModel.find({ categories: { $eq: id } })
  }
}

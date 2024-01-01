// main tools
import { InjectModel } from '@nestjs/mongoose'
import { Injectable } from '@nestjs/common'
import { Model } from 'mongoose'

// DTOs
import { UserDto, UserDocument } from './dto'
import { SignInDto } from '../auth/dtos'

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User')
    private _userModel: Model<UserDocument>,
  ) {}

  async create(data: UserDto): Promise<UserDocument> {
    const created = new this._userModel(data)

    return created.save()
  }

  async getAll(): Promise<UserDocument[]> {
    return this._userModel.find().exec()
  }

  async getByCredentials(data: SignInDto): Promise<UserDocument> {
    return this._userModel.findOne({ ...data }).exec()
  }
}

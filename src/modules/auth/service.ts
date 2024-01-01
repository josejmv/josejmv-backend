// main tools
import { Injectable } from '@nestjs/common'

// services
import { JwtService } from '@nestjs/jwt'
import { UserService } from '../user/service'

// DTOs
import { AuthDto, SignInDto } from './dtos'
import { UserDto } from '../user/dto'

// utils
import { ERROR_HANDLER } from 'src/utils/errors-enums'

@Injectable()
export class AuthService {
  constructor(
    private _jwtService: JwtService,
    private _userService: UserService,
  ) {}

  private async _generateAuthToken(
    user: Omit<UserDto, 'password'>,
  ): Promise<AuthDto> {
    const token = this._jwtService.sign(user, {
      secret: process.env.JWT_SECRET_KEY,
    })
    const refreshToken = this._jwtService.sign(user, {
      secret: process.env.JWT_SECRET_KEY,
    })

    return { token, refreshToken }
  }

  protected async getAuthToken(data: SignInDto): Promise<AuthDto> {
    const user = await this._userService.getByCredentials({ ...data })

    if (user) {
      return await this._generateAuthToken({
        _id: user._id,
        name: user.name,
        email: user.email,
      })
    } else throw new Error(ERROR_HANDLER.USER_NOT_FOUND)
  }
}

// main tools
import { NestFactory } from '@nestjs/core'

// utils
import { Logger, RequestMethod } from '@nestjs/common'

// modules
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      credentials: true,
      allowedHeaders: '*',
      origin: process.env.ALLOWED_ORIGINS,
    },
  })
  app.setGlobalPrefix('v1', {
    exclude: [{ path: 'health', method: RequestMethod.GET }],
  })

  const PORT = 8080
  await app.listen(PORT)
  Logger.log(
    `[josejmv/blog] Server running on http://localhost:${PORT}/graphql`,
  )
}

bootstrap()

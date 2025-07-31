import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { PassportModule } from "@nestjs/passport"
import { ApiKeysService } from "./api-keys.service"
import { ApiKeysController } from "./api-keys.controller"
import { ApiKey } from "./entities/api-key.entity"
import { ApiKeyStrategy } from "./strategies/api-key.strategy"

@Module({
  imports: [
    TypeOrmModule.forFeature([ApiKey]),
    PassportModule,
  ],
  controllers: [ApiKeysController],
  providers: [ApiKeysService, ApiKeyStrategy],
  exports: [ApiKeysService, ApiKeyStrategy],
})
export class ApiKeysModule {}

import { Module } from '@nestjs/common';
import { MongoDatabaseService } from './database.service';

@Module({
  providers: [MongoDatabaseService],
  exports: [MongoDatabaseService],
})
export class DatabaseModule {}

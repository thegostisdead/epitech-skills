import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import { MongooseModule } from "@nestjs/mongoose";
import { LogsModule } from "./logs/logs.module";
import { HistoryModule } from "./history/history.module";
import { UploadModule } from "./upload/upload.module";
import { NestMinioModule } from "nestjs-minio";

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DATABASE_URL),
    LogsModule,
    HistoryModule,
    UploadModule,
    NestMinioModule.register({
      isGlobal: true,
      endPoint: String(process.env.BUCKET_ENDPOINT).valueOf(),
      useSSL: false,
      port: 9005,
      accessKey: process.env.BUCKET_ACCESS_KEY,
      secretKey: process.env.BUCKET_SECRET_KEY,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

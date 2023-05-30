import { Module } from "@nestjs/common";
import { UploadProvider } from "./upload.provider";
import { UploadController } from "./upload.controller";
import { LogsModule } from "../logs/logs.module";

@Module({
  imports: [LogsModule],
  controllers: [UploadController],
  providers: [UploadProvider],
  exports: [UploadProvider],
})
export class UploadModule {}

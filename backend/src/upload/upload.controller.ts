import {
    Controller,
    HttpStatus, Inject,
    ParseFilePipeBuilder,
    Post,
    UploadedFile,
    UseInterceptors
} from '@nestjs/common';

import {FileInterceptor} from "@nestjs/platform-express";
import {UploadProvider} from "./upload.provider";
import {LogsProvider} from "../logs/logs.provider";

@Controller('upload')
export class UploadController {

    constructor(
        private uploadProvider: UploadProvider,
        private logsProvider: LogsProvider
    )  {}


    @Post("")
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile(
        new ParseFilePipeBuilder()
            .addFileTypeValidator({
                fileType: 'text/html',
            })
            .addMaxSizeValidator({
                maxSize: 1024 * 10000
            })
            .build({
                errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY
            }),
    ) file: Express.Multer.File) {

        const file_url = await this.uploadProvider.create(file);

        if (!file_url) {
            return {
                status: HttpStatus.BAD_REQUEST,
                message: 'File upload failed'
            }
        }

        await this.logsProvider.create(file_url)

        return {
            status: HttpStatus.OK,
            message: 'File uploaded successfully',
            data: {
                file_url
            }
        }

    }

}

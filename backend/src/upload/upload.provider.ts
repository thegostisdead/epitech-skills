import {HttpException, HttpStatus, Inject, Injectable} from '@nestjs/common';
import { MINIO_CONNECTION } from 'nestjs-minio';
import { Client } from 'minio';
import * as crypto from 'crypto';
@Injectable()
export class UploadProvider {

    constructor(@Inject(MINIO_CONNECTION) private readonly minioClient: Client) {}


    async create(file: Express.Multer.File): Promise<string|undefined> {

        const timestamp = Date.now().toString();
        const hashedFileName = crypto
            .createHash('md5')
            .update(timestamp)
            .digest('hex');

        const extension = file.originalname.substring(
            file.originalname.lastIndexOf('.'),
            file.originalname.length,
        );
        const metaData = {
            'Content-Type': file.mimetype,
        };

        // We need to append the extension at the end otherwise Minio will save it as a generic file
        const fileName = hashedFileName + extension;

       try {
           const uploadResult =  await this.minioClient
               .putObject(
                   process.env.BUCKET_NAME,
                   fileName,
                   file.buffer,
                   metaData
               )
               .catch((e) => {
                   console.log('Error while creating object: ', e);
                   throw e;
               });

           const url = `${process.env.BUCKET_ENDPOINT}:${process.env.BUCKET_PORT}/${process.env.BUCKET_NAME}/${fileName}`
           console.log('Object uploaded successfully: ', uploadResult);
           return url

       } catch (error) {
           throw new HttpException(
               'Error while saving you image',
               HttpStatus.INTERNAL_SERVER_ERROR,
           );
       }
    }





}





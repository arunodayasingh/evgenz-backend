import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { ConfigService } from '@nestjs/config';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';

@Injectable()
export class ImageService { }
// private s3Client: S3Client;
// private bucketName: string;

// constructor(private configService: ConfigService) {
//     this.bucketName = this.configService.get<string>('AWS_BUCKET') ?? 'evgenz-bucket';
//     this.s3Client = new S3Client({
//         region: this.configService.get<string>('AWS_REGION') ?? 'ap-south-1',
//         credentials: {
//             accessKeyId: this.configService.get<string>('AWS_ACCESS_KEY') ?? '',
//             secretAccessKey: this.configService.get<string>('AWS_SECRET_KEY') ?? '',
//         },
//     });
// }

// async uploadFile(file: Express.Multer.File, type: string) {
//     if (!['cover', 'exterior', 'interior', 'battery', 'gallery'].includes(type)) {
//         type = 'gallery';
//     }

//     const fileExtension = path.extname(file.originalname);
//     const fileName = `${type}/${uuidv4()}${fileExtension}`;

//     try {
//         await this.s3Client.send(
//             new PutObjectCommand({
//                 Bucket: this.bucketName,
//                 Key: fileName,
//                 Body: file.buffer,
//                 ContentType: file.mimetype,
//                 ACL: 'public-read',
//             }),
//         );

//         return {
//             url: `https://${this.bucketName}.s3.amazonaws.com/${fileName}`,
//             type,
//         };
//     } catch (error) {
//         throw new InternalServerErrorException('Failed to upload image to S3');
//     }
// }
// }

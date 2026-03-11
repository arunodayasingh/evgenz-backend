import { Controller, Post, UseInterceptors, UploadedFile, Body, BadRequestException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageService } from './image.service';

@Controller('images')
export class ImageController { }
// constructor(private readonly imageService: ImageService) { }

// @Post('upload')
// @UseInterceptors(FileInterceptor('file'))
// async uploadFile(@UploadedFile() file: Express.Multer.File, @Body('type') type: string) {
//     if (!file) {
//         throw new BadRequestException('File is required');
//     }
//     return this.imageService.uploadFile(file, type);
//     // }
// }

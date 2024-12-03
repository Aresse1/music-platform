import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import * as path from 'path'
import * as fs from 'fs'
import * as uuid from 'uuid'

export enum FileType {
    AUDIO = "audio",
    IMAGE = "picture"
}

@Injectable()
export class FileService {
    createFile(type: FileType, file): string {
        try {
            const fileExtenstion = file.originalname.split('.').pop()
            const fileName = uuid.v4() + '.' + fileExtenstion
            const filePath = path.resolve(__dirname, '..','..','..','..', 'static', type)
            if(!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath, {recursive: true})
            }
            fs.writeFileSync(path.resolve(filePath, fileName), file.buffer)
            return type + '/' + fileName
        }catch (e) {
            throw new HttpException('Произошла ошибка при записи', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }


    removeFile(fileName: string) {
        try {
            const filePath = path.resolve(__dirname, '..', '..', '..', '..', 'static', fileName);
            if (fs.existsSync(filePath)) {
              fs.unlinkSync(filePath);
            } else {
              throw new HttpException(`File not found: ${fileName}`, HttpStatus.NOT_FOUND);
            }
          } catch (error) {
            throw new HttpException('Произошла ошибка при удалении', HttpStatus.INTERNAL_SERVER_ERROR);
          }
        }
}

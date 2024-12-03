import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.servcie";
import { FileService, FileType } from "../files/file.service";
import { CreateTrackDto } from "../dto/create.track.dto";
import { Track } from "@prisma/client";

@Injectable()
export class TrackService {
    constructor(
        private prisma: PrismaService,
        private fileService: FileService
    ) {}

    async create(picture: Express.Multer.File, audio: Express.Multer.File, dto: CreateTrackDto): Promise<Track> {
        const audioPath = this.fileService.createFile(FileType.AUDIO, audio);
        const picturePath = this.fileService.createFile(FileType.IMAGE, picture);
        const track = await this.prisma.track.create({
            data: {
                name: dto.name,
                artist: dto.artist,
                text: dto.text,
                listens: 0,
                audio: audioPath,
                picture: picturePath,
            },
        });
        
        return track;
    }

    async getAll(count = 10, offset = 0): Promise<Track[]> {
        return this.prisma.track.findMany({
            skip: offset,
            take: count,
        });
    }

    async search(query: string): Promise<Track[]> {
        return this.prisma.track.findMany({
            where: {
                name: {
                    contains: query,
                    mode: 'insensitive',
                },
            },
        });
    }

    async getOne(id: string): Promise<Track | null> {
        return this.prisma.track.findUnique({
            where: { id },
        });
    }

    async delete(id: string): Promise<string | null> {
        const track = await this.prisma.track.findUnique({ where: { id } });
        
        if (!track) return null;

        await this.fileService.removeFile(track.audio);
        await this.fileService.removeFile(track.picture);

        await this.prisma.track.delete({ where: { id } });
        
        return track.id;
    }

    async listen(id: string) {
        await this.prisma.track.update({
            where: { id },
            data: {
                listens: {
                    increment: 1,
                },
            },
        });
    }
}

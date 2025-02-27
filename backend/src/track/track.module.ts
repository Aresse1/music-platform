import { Module } from "@nestjs/common";
import { TrackController } from "./track.controller";
import { TrackService } from "./track.service";
import { PrismaService } from "../prisma.servcie";
import { FileService } from "../files/file.service";


@Module({
    controllers: [TrackController],
    providers: [TrackService, PrismaService, FileService],
})
export class TrackModule {}
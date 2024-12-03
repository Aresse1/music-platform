import { Controller, Get, Post, Body, Param, Delete, UseInterceptors, Query } from "@nestjs/common";
import { TrackService } from "./track.service";
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { UploadedFiles } from '@nestjs/common';
import { TUploadTrack } from '../../types/files';
import { Track } from '@prisma/client';
import { CreateTrackDto } from '../dto/create.track.dto';


@Controller('tracks')
export class TrackController {
    constructor(private readonly TrackService: TrackService) {}

    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'picture', maxCount: 1 },
        { name: 'audio', maxCount: 1 },
    ]))
    create(@UploadedFiles() files: TUploadTrack, @Body() dto: CreateTrackDto) {
        const { picture, audio } = files;
        return this.TrackService.create(picture[0], audio[0], dto);
    }

    @Get()
    getAll(@Query('count') count?: number, @Query('offset') offset?: number) {
        return this.TrackService.getAll(count, offset);
    }

    @Get('/search')
    search(@Query('query') query: string) {
        return this.TrackService.search(query);
    }

    @Get(':id')
    getOne(@Param('id') id: string): Promise<Track> {
        return this.TrackService.getOne(id); 
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        console.log(id);
        return this.TrackService.delete(id);
    }

    @Post(':id/listen') 
    listen(@Param('id') id: string) { 
        return this.TrackService.listen(id); 
    }

}
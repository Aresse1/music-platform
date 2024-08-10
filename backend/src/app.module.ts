import { Module } from "@nestjs/common";
import { TrackModule } from "./track/track.module";
import { MongooseModule } from "@nestjs/mongoose";
import { FileModule } from "./file/file.module";
import * as path from 'path';
import {ServeStaticModule} from "@nestjs/serve-static";



@Module({
    imports: [
<<<<<<< HEAD
        ServeStaticModule.forRoot({rootPath: path.resolve(__dirname,'..', '..', 'static')}),
=======
        ServeStaticModule.forRoot({rootPath: path.resolve(__dirname,"..","..",  'static')}),
>>>>>>> eef391cc050de82e07801676fd0e0e6c2790851d
        MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.fao45zr.mongodb.net/music-platform?retryWrites=true&w=majority&appName=Cluster0'),
        TrackModule,
        FileModule
    ],
})

export class AppModule {}


import { Module } from "@nestjs/common";
import { TrackModule } from "./track/track.module";
import { FileModule } from "./files/file.module";
import * as path from 'path';
import { ServeStaticModule } from "@nestjs/serve-static";


@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, '..', '..', '..', 'static'),
        }),
        TrackModule,
        FileModule,
    ],
})
export class AppModule {}
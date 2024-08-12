import { Express } from "express";

export type TUploadTrack = {
    picture?: Express.Multer.File[] 
    audio?: Express.Multer.File[] 
}


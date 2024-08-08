import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Track } from "./track.schema";
import * as mongoose from 'mongoose';



export type CommentDocument = Comment & Document;

@Schema()
export class Comment {
    @Prop()
    username: string;

    @Prop()
    text: string;

    @Prop()
    track: Track;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Track'})
    listens: number;
}

export const CommentSchema = SchemaFactory.createForClass(Comment)  
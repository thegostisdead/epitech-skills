import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LogsDocument = HydratedDocument<Log>;

@Schema()
export class Log {

    @Prop({ required: true })
    uploaded_url: string;

    @Prop({ required: true })
    uploaded_at: Date;

}

export const LogSchema = SchemaFactory.createForClass(Log);

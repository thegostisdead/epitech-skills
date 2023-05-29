import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import {LogsController} from "./logs.controller";
import {LogsProvider} from "./logs.provider";
import {Log, LogSchema} from "./schemas/logs.schema";


@Module({
    imports: [MongooseModule.forFeature([{ name: Log.name, schema: LogSchema }])],
    controllers: [LogsController],
    providers: [LogsProvider],
    exports: [LogsProvider]
})
export class LogsModule {}

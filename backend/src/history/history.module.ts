import {Module} from "@nestjs/common";

import {HistoryProvider} from "./history.provider";
import {HistoryController} from "./history.controller";


@Module({
    imports: [],
    controllers: [HistoryController],
    providers: [HistoryProvider],
})
export class HistoryModule {}

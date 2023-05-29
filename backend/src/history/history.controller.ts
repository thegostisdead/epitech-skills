import {Controller, Get, Param} from '@nestjs/common';
import {EmailParams} from "./dto/EmailDto";

@Controller('history')
export class HistoryController {

    @Get(":email")
    getHistory(@Param() email: EmailParams) {
        return 'This will return the history of ' + email.email;
    }

}

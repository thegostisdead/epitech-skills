import { Controller, Post } from "@nestjs/common";

@Controller("logs")
export class LogsController {
  @Post()
  createLog() {
    return "This will create a log";
  }
}

import { Injectable } from "@nestjs/common";
import { Log } from "./schemas/logs.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class LogsProvider {
  constructor(@InjectModel(Log.name) private logModel: Model<Log>) {}

  async create(url: string) {
    const log = new this.logModel({
      uploaded_url: url,
      uploaded_at: new Date(),
    });

    await log.save();
  }

  findAll() {}

  findOne() {}
}

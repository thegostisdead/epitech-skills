import { IsEmail } from "class-validator";

export class EmailParams {
  @IsEmail()
  email: string;
}

import { Joi } from "@AllOps/lib-common/lib/services/types";
import { ConfigServiceAbstract } from "@AllOps/lib-common";

export const configValues = {
  BASE_URL: Joi.string(),
  PORT: Joi.number()
};

export class ConfigService extends ConfigServiceAbstract<typeof configValues> {
  constructor() {
    super(configValues, undefined, {
      BASE_URL: process.env.BASE_URL,
      PORT: process.env.PORT
    });
  }
}

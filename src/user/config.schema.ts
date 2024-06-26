import * as joi from 'joi';

export const configValidatoinSchema = joi.object({
  STAGE: joi.string().required(),
  DB_HOST: joi.string().required(),
  DB_PORT: joi.string().default(5432).required(),
  DB_PASSWORD: joi.string().required(),
  DB_USERNAME: joi.string().required(),
  DB_DATABASE: joi.string().required(),
});

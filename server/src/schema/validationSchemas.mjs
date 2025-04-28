import Joi from "joi";

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const registerSchoolSchema = Joi.object({
  name: Joi.string().trim().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .pattern(
      new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$"
      )
    )
    .required(),
  address: Joi.object({
    city: Joi.string().required(),
    state: Joi.string().required(),
    country: Joi.string().required(),
  }),
  type: Joi.string().valid("primary", "secondary", "tertiary").required(),
  establishedYear: Joi.number().integer().required(),
  logoUrl: Joi.string().required(),
});

export const registerStudentSchema = Joi.object({
  firstName: Joi.string().trim().required(),
  lastName: Joi.string().trim().required(),
  email: Joi.string().trim().required(),
  password: Joi.string()
    .pattern(
      new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$"
      )
    )
    .required(),
});

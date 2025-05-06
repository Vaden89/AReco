import Joi from "joi";

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const registerSchoolSchema = Joi.object({
  name: Joi.string().trim().min(3).required(),
  phone: Joi.string().trim().required(),
  email: Joi.string().email().required(),
  establishedYear: Joi.string().required(),
  password: Joi.string()
    .pattern(
      new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
      )
    )
    .required()
    .messages({
      "string.pattern.base":
        "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character (@$!%*?&)",
    }),
  type: Joi.string().valid("primary", "secondary", "tertiary").required(),
});

export const editSchoolDetailsSchema = Joi.object({
  phone: Joi.string().trim(),
  address: Joi.string().trim(),
  state: Joi.string().trim(),
  logoUrl: Joi.string().trim(),
});

export const editStudentDetailsSchema = Joi.object({
  address: Joi.string().trim().required(),
  phone: Joi.string().trim().required(),
  state_of_origin: Joi.string().trim().required(),
  lga: Joi.string().trim().required(),
  dob: Joi.string().trim().required(),
});

export const registerStudentSchema = Joi.object({
  firstName: Joi.string().trim().required(),
  lastName: Joi.string().trim().required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .pattern(
      new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
      )
    )
    .required()
    .messages({
      "string.pattern.base":
        "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character (@$!%*?&)",
    }),
});

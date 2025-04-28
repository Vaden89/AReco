import { loginSchema } from "../schema/validationSchemas.mjs";

export const validator = (schema) => {
  return async (req, res, next) => {
    try {
      const validatedData = await schema.validateAsync(req.body, {
        abortEarly: false,
        stripUnknown: true,
      });

      req.body = validatedData;
      next();
    } catch (error) {
      if (error.isJoi) {
        const errors = error.details.map((err) => ({
          field: err.context.key,
          message: err.message.replace(/"/g, ""),
        }));

        return res.status(422).json({
          success: false,
          message: "Validation failed",
          errors,
        });
      }

      return res.status(500).json({
        success: false,
        message: "Internal server error during validation",
      });
    }
  };
};

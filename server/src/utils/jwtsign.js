import jwt from "jsonwebtoken";

export const jwtTokenGenerator = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });

  return token;
};

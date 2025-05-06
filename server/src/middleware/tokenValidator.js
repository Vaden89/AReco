import jwt from "jsonwebtoken";

export const accessTokenValidator = (req, res, next) => {
  try {
    if (
      !req.headers.authorization ||
      !req.headers.authorization.split(" ")[0] === "Bearer"
    ) {
      return res.status(401).json({ success: false, message: "unauthorized" });
    }
    const token = req.headers.authorization.split(" ")[1];

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.uid = decodedToken.id;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ success: false, error: "invalid token" });
    }
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ success: false, error: "bad token" });
    }
    return res
      .status(500)
      .json({ success: false, message: "Server error", error });
  }
};

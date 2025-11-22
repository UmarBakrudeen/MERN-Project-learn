import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "TestSecretKey";
const EXPIRES_IN = process.env.EXPIRES_IN || "30d";

export const generateToken = (userId) => {
  return jwt.sign({ userId }, SECRET_KEY, {
    expiresIn: EXPIRES_IN,
  });
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    throw new Error("Invalid or expired token");
  }
};

import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "ABC#123";

export const generateToken = (user) => {
  return jwt.sign({ user }, JWT_SECRET, { expiresIn: "1h" });
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return null;
  }
};

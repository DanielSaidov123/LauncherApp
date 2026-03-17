import jwt from "jsonwebtoken";

export const checkAuth = (role = []) => {
  return async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
      return res.status(403).json({ message: "Not logged in" });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
 
      if (!role.includes(decoded.user_type)) {
        return res.status(403).json({ message: "Access denied" });
      }

      next();
    } catch (error) {
      return res.status(401).json({ message: "Invalid token" });
    }
  };
};

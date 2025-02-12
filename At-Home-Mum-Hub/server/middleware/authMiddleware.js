import jwt from "jsonwebtoken";

const authMiddleware = (request, response, next) => {
  const token = request.header("Authorization").replace("Bearer ", "");

  if (!token) {
    return response.status(401).send("Access Denied. No token provided");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    request.user = decoded;
    next();
  } catch (ex) {
    response.status(400).send("Invalid Token");
  }
};

export default authMiddleware;

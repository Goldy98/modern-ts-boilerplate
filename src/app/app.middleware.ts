export function logRequestTimeMiddleware(req, res, next) {
  console.log("Time: ", Date.now());
  next();
}

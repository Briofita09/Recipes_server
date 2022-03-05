export async function errorMiddleware(err, _req, res, _next) {
  res.status(err.statusCode || 400).send({ msg: err.message });
}

import { ErrorRequestHandler } from "express";
import { BuilderError } from "../utils/errors";

export const errorHandlerMiddleware: ErrorRequestHandler = (
  error,
  req,
  res,
  next,
) => {
  if (error instanceof BuilderError) {
    res.status(400).send(error.message);
    return;
  }

  res.status(500).send("Internal Server Error");
};

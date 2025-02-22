import { ErrorRequestHandler } from "express";
import { BadUserInputError } from "../utils/errors";

export const errorHandlerMiddleware: ErrorRequestHandler = (
  error,
  req,
  res,
  next,
) => {
  if (error instanceof BadUserInputError) {
    res.status(400).send(error.message);
    return;
  }

  res.status(500).send("Internal Server Error");
};

import { ErrorRequestHandler } from "express";
import { BadUserInputError } from "../utils/errors";
import { NotFoundError } from "../utils/errors/NotFoundError";

export const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  if (error instanceof BadUserInputError) {
    res.status(400).send(error.message);
    return;
  }

  if (error instanceof NotFoundError) {
    res.status(404).send(error.message);
    return;
  }

  if (error instanceof Error) {
    res.status(500).send(error.message);
    return;
  }

  res.status(500).send("Internal Server Error");
};

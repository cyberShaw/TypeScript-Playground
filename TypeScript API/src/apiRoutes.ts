import { RoutesConfig } from "./routes.config";
import express from "express";

export class ApiRoutes extends RoutesConfig {
  constructor(app: express.Application) {
    super(app, "ApiRoutes");
  }

  config() {
    this.app
      .route("/api")
      .get((req: express.Request, res: express.Response) => {
        res.send(`GET Request successful!`);
      });
    this.app
      .route("/api/:id")
      .get((req: express.Request, res: express.Response) => {
        res.send(
          `GET Request successful. Parameter passed is: ${req.params.id}`
        );
      });
    return this.app;
  }
}

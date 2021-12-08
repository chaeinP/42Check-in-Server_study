import { logger } from "./modules/logger";
import express, { Request, Response, NextFunction } from "express";
import { models } from "./models";
import routes from "./routes";
import rTracer from "cls-rtracer";

export const app = express();

models()
  .sync({ force: true })
  .then(() => {
    console.log("🚀 db connected");
  })
  .catch(err => console.log(err));

app.use(express.json());
app.use(rTracer.expressMiddleware());
app.use((req: Request, res: Response, next: NextFunction) => {
  const {
    method,
    path,
    url,
    query,
    headers: { cookie },
    body
  } = req;
  const request = { method, path, cookie, body, url, query };
  logger.info({ request });
  next();
});

app.use("/", routes);
app.listen(3000);

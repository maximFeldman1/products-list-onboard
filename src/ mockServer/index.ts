import { setupWorker } from "msw";
import { routes } from "./routes";

export const worker = setupWorker(...routes);

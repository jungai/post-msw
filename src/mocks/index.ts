import { rest, setupWorker, SetupWorkerApi } from "msw";
import { songsHandler } from "./songs";

export const hanlders = [rest.get("/songs", songsHandler)];

export const worker: () => SetupWorkerApi = () => setupWorker(...hanlders);

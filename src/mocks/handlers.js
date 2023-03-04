import { rest } from "msw";
import mockAircraftData from "./mockAircraftData";

const handlers = [
  rest.get("/aircraft", (req, res, ctx) => {
    return res(ctx.delay(2000), ctx.status(200), ctx.json(mockAircraftData));
  }),
];

export default handlers;

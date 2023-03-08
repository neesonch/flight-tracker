import { rest } from "msw";
import mockAirplanesData from "./mockAirplanesData";

const handlers = [
  rest.get("/airplanes", (req, res, ctx) => {
    return res(
      ctx.delay(500),
      ctx.status(200),
      ctx.json({ airplanes: mockAirplanesData })
    );
  }),
];

export default handlers;

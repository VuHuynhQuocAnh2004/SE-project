import { Router } from "express";
import { authRouter } from "../modules/auth/auth.routes";
import { gameRouter } from "../modules/games/game.routes";
import { cartRouter } from "../modules/cart/cart.routes";
import { orderRouter } from "../modules/orders/order.routes";

export const apiRouter = Router();

apiRouter.use("/auth", authRouter);
apiRouter.use("/games", gameRouter);
apiRouter.use("/cart", cartRouter);
apiRouter.use("/orders", orderRouter);

import { Router } from "express";

// Owner: Anh
// TODO: implement get cart, add item, remove item
// - GET /              -> xem giỏ hàng hiện tại của user
// - POST /items        -> thêm game vào giỏ
// - DELETE /items/:id  -> xoá item khỏi giỏ

export const cartRouter = Router();

cartRouter.get("/ping", (_req, res) => {
  res.json({ module: "cart", status: "skeleton ok" });
});

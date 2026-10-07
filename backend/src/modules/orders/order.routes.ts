import { Router } from "express";

// Owner: Nhân
// TODO: implement checkout flow + invoice
// - POST /checkout        -> tạo order từ cart hiện tại, sinh invoice
// - GET /me                -> lịch sử đơn hàng của user
// - GET /:id/confirmation  -> xem lại 1 invoice cụ thể

export const orderRouter = Router();

orderRouter.get("/ping", (_req, res) => {
  res.json({ module: "orders", status: "skeleton ok" });
});

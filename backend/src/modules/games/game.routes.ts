import { Router } from "express";

// Owner: Long
// TODO: implement list/search/filter, get by id, create/update/delete (admin/developer)
// - GET /        -> danh sách game, hỗ trợ q, sort, minPrice, maxPrice
// - GET /:id     -> chi tiết 1 game
// - POST /       -> tạo game (role ADMIN/DEVELOPER)
// - PATCH /:id   -> cập nhật
// - DELETE /:id  -> xoá

export const gameRouter = Router();

gameRouter.get("/ping", (_req, res) => {
  res.json({ module: "games", status: "skeleton ok" });
});

import { Router } from "express";

// Owner: Vũ
// TODO: implement register, login, me
// - register: nhận username/email/password + fullName/bankName/bankAccountNumber
// - login: trả JWT
// - me: xác thực token, trả thông tin user hiện tại

export const authRouter = Router();

authRouter.get("/ping", (_req, res) => {
  res.json({ module: "auth", status: "skeleton ok" });
});

// authRouter.post("/register", ...)
// authRouter.post("/login", ...)
// authRouter.get("/me", requireAuth, ...)

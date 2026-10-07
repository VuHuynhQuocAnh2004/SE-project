# SE-project

Khung dự án (skeleton) cho môn IT076IU — mỗi thành viên code vào đúng nhánh và file phụ trách.

## Phân công (map với nhánh git)

| Người | Nhánh | Phụ trách |
|---|---|---|
| Vũ | `feature/auth` | `backend/src/modules/auth/*`, `frontend/src/pages/AuthPage.tsx`, model `User` trong schema |
| Long | `feature/game-management` | `backend/src/modules/games/*`, `frontend/src/pages/StorePage.tsx`, model `Game`/`Developer` |
| Anh | `feature/cart` | `backend/src/modules/cart/*`, `frontend/src/pages/CartPage.tsx`, model `Cart`/`CartItem` |
| Nhân | `feature/checkout` | `backend/src/modules/orders/*`, `frontend/src/pages/CheckoutPage.tsx`, model `Order`/`OrderItem` |
| Đăng | `docs/system-design` | `docs/` (kiến trúc, ERD), Chapter 1/4/5 report |

## Setup lần đầu

### Backend

```bash
cd backend
cp .env.example .env
npm install
npx prisma generate
npx prisma db push
npm run dev
```

Backend chạy ở `http://localhost:5000`. Kiểm tra nhanh: `GET http://localhost:5000/health`.

Mỗi module có sẵn route test `GET /api/<module>/ping` để xác nhận router đã nối đúng, ví dụ:
`http://localhost:5000/api/auth/ping`

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend chạy ở `http://localhost:5173`.

## Quy trình làm việc

1. `git checkout <nhánh-của-bạn>`
2. Code trong đúng file/module mình phụ trách (xem bảng phân công)
3. Commit nhỏ, thường xuyên, đúng quy ước:
   ```
   feat(auth): add registration endpoint
   fix(cart): handle duplicate item add
   docs(design): add ERD diagram
   ```
4. Push lên nhánh của mình, mở Pull Request vào `main`, nhờ 1 bạn khác review rồi mới merge
5. Trước khi bắt đầu phiên code mới: `git checkout main && git pull` rồi `git checkout <nhánh-của-bạn> && git merge main` để cập nhật, tránh conflict dồn cục cuối kỳ

## Cấu trúc thư mục

```
SE-project/
├── backend/
│   ├── prisma/schema.prisma   # schema khung, mỗi module mở rộng phần của mình
│   └── src/
│       ├── modules/
│       │   ├── auth/      (Vũ)
│       │   ├── games/     (Long)
│       │   ├── cart/      (Anh)
│       │   └── orders/    (Nhân)
│       ├── routes/index.ts    # gộp router các module
│       └── app.ts / server.ts
├── frontend/
│   └── src/
│       ├── pages/
│       │   ├── AuthPage.tsx      (Vũ)
│       │   ├── StorePage.tsx     (Long)
│       │   ├── CartPage.tsx      (Anh)
│       │   └── CheckoutPage.tsx  (Nhân)
│       └── api/client.ts         # gọi API dùng chung
└── docs/   (Đăng — kiến trúc, ERD, report content)
```

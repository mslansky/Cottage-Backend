CREATE TABLE "items" (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT NOT NULL UNIQUE,
  "desc" TEXT NOT NULL,
  "price" TEXT NOT NULL,
  "category" TEXT NOT NULL,
  "shop" TEXT NOT NULL,
  "picUrl" TEXT
);
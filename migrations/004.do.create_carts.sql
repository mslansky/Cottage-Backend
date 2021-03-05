CREATE TABLE "carts" (
  "id" SERIAL PRIMARY KEY,
  "quantity" TEXT NOT NULL ,
  "itemId" TEXT NOT NULL,
  "userId" TEXT NOT NULL
);
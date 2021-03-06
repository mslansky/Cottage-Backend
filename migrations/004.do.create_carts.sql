CREATE TABLE "carts" (
  "id" SERIAL PRIMARY KEY,
  "quantity" TEXT NOT NULL ,
  "itemId" INTEGER NOT NULL,
  "userId" TEXT NOT NULL
);
CREATE TABLE "shops" (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT NOT NULL UNIQUE,
  "desc" TEXT NOT NULL,
  "picUrl" TEXT
);
-- CreateTable
CREATE TABLE "enterprises" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "purpose" TEXT NOT NULL,
    "riNumber" TEXT NOT NULL,
    "addressId" INTEGER NOT NULL,
    CONSTRAINT "enterprises_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "address" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "address" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "cep" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "enterprises_addressId_key" ON "enterprises"("addressId");

/*
  Warnings:

  - You are about to drop the column `value` on the `ApiBaseName` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `ApiOrigin` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[baseName]` on the table `ApiBaseName` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[origin]` on the table `ApiOrigin` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `baseName` to the `ApiBaseName` table without a default value. This is not possible if the table is not empty.
  - Added the required column `origin` to the `ApiOrigin` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "ApiBaseName_value_key";

-- DropIndex
DROP INDEX "ApiOrigin_value_key";

-- AlterTable
ALTER TABLE "ApiBaseName" DROP COLUMN "value",
ADD COLUMN     "baseName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ApiOrigin" DROP COLUMN "value",
ADD COLUMN     "origin" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ApiBaseName_baseName_key" ON "ApiBaseName"("baseName");

-- CreateIndex
CREATE UNIQUE INDEX "ApiOrigin_origin_key" ON "ApiOrigin"("origin");

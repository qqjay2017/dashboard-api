/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Dashboard` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Dashboard" ADD COLUMN     "coverThumbnail" TEXT DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX "Dashboard_name_key" ON "Dashboard"("name");

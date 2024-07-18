/*
  Warnings:

  - You are about to drop the column `shareURL` on the `ComponentChart` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `ComponentChart_shareURL_key` ON `ComponentChart`;

-- AlterTable
ALTER TABLE `ComponentChart` DROP COLUMN `shareURL`;

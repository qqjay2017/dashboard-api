/*
  Warnings:

  - You are about to drop the column `apiBaseNameId` on the `ApiManage` table. All the data in the column will be lost.
  - You are about to drop the column `apiGroupId` on the `ApiManage` table. All the data in the column will be lost.
  - You are about to drop the column `apiOriginId` on the `ApiManage` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `ApiManage` DROP FOREIGN KEY `ApiManage_apiBaseNameId_fkey`;

-- DropForeignKey
ALTER TABLE `ApiManage` DROP FOREIGN KEY `ApiManage_apiGroupId_fkey`;

-- DropForeignKey
ALTER TABLE `ApiManage` DROP FOREIGN KEY `ApiManage_apiOriginId_fkey`;

-- AlterTable
ALTER TABLE `ApiManage` DROP COLUMN `apiBaseNameId`,
    DROP COLUMN `apiGroupId`,
    DROP COLUMN `apiOriginId`;

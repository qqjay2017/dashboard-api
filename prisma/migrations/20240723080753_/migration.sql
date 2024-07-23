/*
  Warnings:

  - You are about to drop the column `baseNameId` on the `ApiManage` table. All the data in the column will be lost.
  - You are about to drop the column `groupId` on the `ApiManage` table. All the data in the column will be lost.
  - You are about to drop the column `originId` on the `ApiManage` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `ApiManage` DROP FOREIGN KEY `ApiManage_baseNameId_fkey`;

-- DropForeignKey
ALTER TABLE `ApiManage` DROP FOREIGN KEY `ApiManage_groupId_fkey`;

-- DropForeignKey
ALTER TABLE `ApiManage` DROP FOREIGN KEY `ApiManage_originId_fkey`;

-- AlterTable
ALTER TABLE `ApiManage` DROP COLUMN `baseNameId`,
    DROP COLUMN `groupId`,
    DROP COLUMN `originId`,
    ADD COLUMN `apiBaseNameId` VARCHAR(191) NULL,
    ADD COLUMN `apiGroupId` VARCHAR(191) NULL,
    ADD COLUMN `apiOriginId` VARCHAR(191) NULL,
    ADD COLUMN `baseName` VARCHAR(191) NULL,
    ADD COLUMN `group` VARCHAR(191) NULL,
    ADD COLUMN `origin` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `ApiManage` ADD CONSTRAINT `ApiManage_apiGroupId_fkey` FOREIGN KEY (`apiGroupId`) REFERENCES `ApiGroup`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ApiManage` ADD CONSTRAINT `ApiManage_apiBaseNameId_fkey` FOREIGN KEY (`apiBaseNameId`) REFERENCES `ApiBaseName`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ApiManage` ADD CONSTRAINT `ApiManage_apiOriginId_fkey` FOREIGN KEY (`apiOriginId`) REFERENCES `ApiOrigin`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

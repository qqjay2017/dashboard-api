-- AlterTable
ALTER TABLE `ApiManage` MODIFY `mockJson` LONGTEXT NULL;

-- AlterTable
ALTER TABLE `Dashboard` ADD COLUMN `designWidthEnum` VARCHAR(191) NOT NULL DEFAULT '1920';

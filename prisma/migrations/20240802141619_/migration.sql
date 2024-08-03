-- AlterTable
ALTER TABLE `Dashboard` ADD COLUMN `appGroupName` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `AppGroup` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `icon` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL DEFAULT '',

    UNIQUE INDEX `AppGroup_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ApiFilter` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `name` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL DEFAULT '',
    `template` LONGTEXT NOT NULL,

    UNIQUE INDEX `ApiFilter_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

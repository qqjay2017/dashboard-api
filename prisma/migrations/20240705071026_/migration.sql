-- CreateTable
CREATE TABLE `Dashboard` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `published` BOOLEAN NOT NULL DEFAULT false,
    `name` VARCHAR(191) NOT NULL,
    `coverThumbnail` LONGTEXT NULL,
    `description` VARCHAR(191) NOT NULL DEFAULT '',
    `content` LONGTEXT NOT NULL,
    `visits` INTEGER NOT NULL DEFAULT 0,
    `submissions` INTEGER NOT NULL DEFAULT 0,
    `shareURL` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Dashboard_name_key`(`name`),
    UNIQUE INDEX `Dashboard_shareURL_key`(`shareURL`),
    UNIQUE INDEX `Dashboard_name_userId_key`(`name`, `userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ApiGroup` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ApiGroup_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ApiBaseName` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `baseName` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ApiBaseName_baseName_key`(`baseName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ApiOrigin` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `origin` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ApiOrigin_origin_key`(`origin`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ApiManage` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL DEFAULT '',
    `url` VARCHAR(191) NOT NULL,
    `method` VARCHAR(191) NOT NULL,
    `groupId` VARCHAR(191) NULL,
    `baseNameId` VARCHAR(191) NULL,
    `originId` VARCHAR(191) NULL,
    `headers` LONGTEXT NULL,
    `isMock` BOOLEAN NULL DEFAULT false,
    `mockJson` VARCHAR(191) NULL DEFAULT '{}',

    UNIQUE INDEX `ApiManage_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ApiManage` ADD CONSTRAINT `ApiManage_groupId_fkey` FOREIGN KEY (`groupId`) REFERENCES `ApiGroup`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ApiManage` ADD CONSTRAINT `ApiManage_baseNameId_fkey` FOREIGN KEY (`baseNameId`) REFERENCES `ApiBaseName`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ApiManage` ADD CONSTRAINT `ApiManage_originId_fkey` FOREIGN KEY (`originId`) REFERENCES `ApiOrigin`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

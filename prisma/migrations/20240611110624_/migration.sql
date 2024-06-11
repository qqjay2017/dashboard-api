-- DropForeignKey
ALTER TABLE "ApiManage" DROP CONSTRAINT "ApiManage_groupId_fkey";

-- AlterTable
ALTER TABLE "ApiManage" ADD COLUMN     "baseNameId" TEXT,
ADD COLUMN     "originId" TEXT,
ALTER COLUMN "groupId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "ApiBaseName" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "value" TEXT NOT NULL,

    CONSTRAINT "ApiBaseName_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ApiOrigin" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "value" TEXT NOT NULL,

    CONSTRAINT "ApiOrigin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ApiBaseName_value_key" ON "ApiBaseName"("value");

-- CreateIndex
CREATE UNIQUE INDEX "ApiOrigin_value_key" ON "ApiOrigin"("value");

-- AddForeignKey
ALTER TABLE "ApiManage" ADD CONSTRAINT "ApiManage_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "ApiGroup"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApiManage" ADD CONSTRAINT "ApiManage_baseNameId_fkey" FOREIGN KEY ("baseNameId") REFERENCES "ApiBaseName"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApiManage" ADD CONSTRAINT "ApiManage_originId_fkey" FOREIGN KEY ("originId") REFERENCES "ApiOrigin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

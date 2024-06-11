-- AlterTable
ALTER TABLE "Dashboard" ALTER COLUMN "content" SET DEFAULT '{}';

-- CreateTable
CREATE TABLE "ApiGroup" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,

    CONSTRAINT "ApiGroup_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ApiGroup_name_key" ON "ApiGroup"("name");

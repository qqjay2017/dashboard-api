-- AlterTable
ALTER TABLE "ApiManage" ADD COLUMN     "isMock" BOOLEAN DEFAULT false,
ADD COLUMN     "mockJson" TEXT DEFAULT '{}';

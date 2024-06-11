-- CreateTable
CREATE TABLE "ApiManage" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "groupId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "method" TEXT NOT NULL,

    CONSTRAINT "ApiManage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ApiManage_name_key" ON "ApiManage"("name");

-- AddForeignKey
ALTER TABLE "ApiManage" ADD CONSTRAINT "ApiManage_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "ApiGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

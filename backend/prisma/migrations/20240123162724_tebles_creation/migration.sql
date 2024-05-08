/*
  Warnings:

  - The primary key for the `Users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `profile` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the `emp_data` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `emp_id` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_type` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `asset_location` to the `it_assets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `asset_state` to the `it_assets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `branch_code` to the `it_assets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date_issued` to the `it_assets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date_returned` to the `it_assets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emp_id` to the `it_assets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `po_number` to the `it_assets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `purchased_date` to the `it_assets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Users" DROP CONSTRAINT "Users_pkey",
DROP COLUMN "profile",
ADD COLUMN     "emp_id" INTEGER NOT NULL,
ADD COLUMN     "user_type" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Users_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Users_id_seq";

-- AlterTable
ALTER TABLE "it_assets" ADD COLUMN     "asset_location" VARCHAR(100) NOT NULL,
ADD COLUMN     "asset_state" VARCHAR(100) NOT NULL,
ADD COLUMN     "branch_code" INTEGER NOT NULL,
ADD COLUMN     "date_issued" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "date_returned" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "emp_id" INTEGER NOT NULL,
ADD COLUMN     "po_number" INTEGER NOT NULL,
ADD COLUMN     "purchased_date" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "emp_data";

-- CreateTable
CREATE TABLE "emp_id" (
    "id" SERIAL NOT NULL,
    "employee_code" INTEGER NOT NULL,
    "employee_name" VARCHAR(191) NOT NULL,
    "lob" VARCHAR(191) NOT NULL,
    "designation" VARCHAR(100) NOT NULL,
    "manager_code" INTEGER NOT NULL,
    "manager_name" VARCHAR(191) NOT NULL,
    "hod_name" VARCHAR(191) NOT NULL,
    "mobile_number" INTEGER NOT NULL,
    "email" VARCHAR(191) NOT NULL,

    CONSTRAINT "emp_id_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "emp_id_employee_code_key" ON "emp_id"("employee_code");

-- AddForeignKey
ALTER TABLE "it_assets" ADD CONSTRAINT "it_assets_emp_id_fkey" FOREIGN KEY ("emp_id") REFERENCES "emp_id"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

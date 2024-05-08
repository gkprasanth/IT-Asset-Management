-- AlterTable
ALTER TABLE "it_assets" ALTER COLUMN "date_issued" DROP NOT NULL,
ALTER COLUMN "date_returned" DROP NOT NULL,
ALTER COLUMN "emp_id" DROP NOT NULL;

/*
  Warnings:

  - The primary key for the `it_assets` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `it_assets` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "it_assets" DROP CONSTRAINT "it_assets_pkey",
DROP COLUMN "id";

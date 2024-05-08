-- CreateTable
CREATE TABLE "emp_data" (
    "id" SERIAL NOT NULL,
    "employee_code" INTEGER NOT NULL,
    "employee_name" VARCHAR(191) NOT NULL,
    "lob" VARCHAR(191) NOT NULL,
    "designation" VARCHAR(100) NOT NULL,
    "manager_code" INTEGER NOT NULL,
    "manager_name" VARCHAR(191) NOT NULL,

    CONSTRAINT "emp_data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "it_assets" (
    "id" SERIAL NOT NULL,
    "asset_type" VARCHAR(191) NOT NULL,
    "asset_owner" VARCHAR(191) NOT NULL,
    "service_tag" VARCHAR(191) NOT NULL,
    "model" VARCHAR(191) NOT NULL,
    "asset_code" VARCHAR(191) NOT NULL,
    "asset_make" VARCHAR(191) NOT NULL,

    CONSTRAINT "it_assets_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "emp_data_employee_code_key" ON "emp_data"("employee_code");

-- CreateIndex
CREATE UNIQUE INDEX "it_assets_service_tag_key" ON "it_assets"("service_tag");

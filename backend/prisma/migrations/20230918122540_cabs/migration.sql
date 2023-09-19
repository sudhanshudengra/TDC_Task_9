-- CreateTable
CREATE TABLE "cabs" (
    "id" SERIAL NOT NULL,
    "cabCar" TEXT NOT NULL,
    "cabFacilities" TEXT NOT NULL,
    "cabPrice" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "cabs_pkey" PRIMARY KEY ("id")
);

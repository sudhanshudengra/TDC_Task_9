-- CreateTable
CREATE TABLE "trains" (
    "id" SERIAL NOT NULL,
    "trainName" TEXT NOT NULL,
    "trainNo" TEXT NOT NULL,
    "s_name" TEXT NOT NULL,
    "s_time" TEXT NOT NULL,
    "d_time" TEXT NOT NULL,
    "d_name" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "price" TEXT NOT NULL,

    CONSTRAINT "trains_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "buses" (
    "id" SERIAL NOT NULL,
    "buscompany" TEXT NOT NULL,
    "bustype" TEXT NOT NULL,
    "s_name" TEXT NOT NULL,
    "s_time" TEXT NOT NULL,
    "d_name" TEXT NOT NULL,
    "d_time" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "price" TEXT NOT NULL,

    CONSTRAINT "buses_pkey" PRIMARY KEY ("id")
);

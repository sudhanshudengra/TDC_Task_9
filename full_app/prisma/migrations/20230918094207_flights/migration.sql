-- CreateTable
CREATE TABLE "flights" (
    "id" SERIAL NOT NULL,
    "flightcompanylogo" TEXT,
    "flightcompany" TEXT,
    "flightcode" TEXT NOT NULL,
    "s_time" TEXT,
    "d_time" TEXT,
    "duration" TEXT,
    "price" TEXT,

    CONSTRAINT "flights_pkey" PRIMARY KEY ("id")
);

/*
  Warnings:

  - You are about to drop the `UserAndHobby` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "UserAndHobby";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Fun" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "hobbyId" INTEGER NOT NULL,
    CONSTRAINT "Fun_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Fun_hobbyId_fkey" FOREIGN KEY ("hobbyId") REFERENCES "Hobby" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

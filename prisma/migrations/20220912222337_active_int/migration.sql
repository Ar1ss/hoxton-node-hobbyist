/*
  Warnings:

  - You are about to alter the column `active` on the `Hobby` table. The data in that column could be lost. The data in that column will be cast from `Boolean` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Hobby" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "active" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Hobby_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Hobby" ("active", "id", "name", "photo", "userId") SELECT "active", "id", "name", "photo", "userId" FROM "Hobby";
DROP TABLE "Hobby";
ALTER TABLE "new_Hobby" RENAME TO "Hobby";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

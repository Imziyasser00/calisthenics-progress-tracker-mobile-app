import * as SQLite from "expo-sqlite";
import { schemaV1 } from "./schema";

export const db = SQLite.openDatabaseSync("calishub.db");

export function initDb() {
    db.execSync(schemaV1);
}

export const schemaV1 = `
    CREATE TABLE IF NOT EXISTS entries (
                                           id TEXT PRIMARY KEY NOT NULL,
                                           exercise TEXT NOT NULL,
                                           reps INTEGER NOT NULL,
                                           date TEXT NOT NULL,
                                           note TEXT,
                                           createdAt INTEGER NOT NULL
    );

    CREATE INDEX IF NOT EXISTS idx_entries_date ON entries(date);
    CREATE INDEX IF NOT EXISTS idx_entries_exercise ON entries(exercise);
`;

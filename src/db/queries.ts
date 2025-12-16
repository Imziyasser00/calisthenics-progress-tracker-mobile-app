import { db } from "./client";
import type { Entry, ExerciseKey } from "../utils/types";

export function insertEntry(e: Entry) {
    db.runSync(
        `INSERT INTO entries (id, exercise, reps, date, note, createdAt)
     VALUES (?, ?, ?, ?, ?, ?)`,
        [e.id, e.exercise, e.reps, e.date, e.note ?? null, e.createdAt]
    );
}

export function listEntriesByExercise(exercise: ExerciseKey) {
    return db.getAllSync<Entry>(
        `SELECT * FROM entries WHERE exercise = ? ORDER BY date DESC, createdAt DESC`,
        [exercise]
    );
}

export function listRecentEntries(limit = 20) {
    return db.getAllSync<Entry>(
        `SELECT * FROM entries ORDER BY date DESC, createdAt DESC LIMIT ?`,
        [limit]
    );
}

export function updateEntry(id: string, reps: number, note: string | null) {
    db.runSync(`UPDATE entries SET reps = ?, note = ? WHERE id = ?`, [reps, note, id]);
}

export function deleteEntry(id: string) {
    db.runSync(`DELETE FROM entries WHERE id = ?`, [id]);
}

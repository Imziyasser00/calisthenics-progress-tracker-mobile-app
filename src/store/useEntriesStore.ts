import { create } from "zustand";
import type { Entry, ExerciseKey } from "../utils/types";
import { insertEntry, listEntriesByExercise, listRecentEntries, deleteEntry } from "../db/queries";
import { uid } from "../utils/id";
import { todayISO } from "../utils/date";

type State = {
    recent: Entry[];
    byExercise: Record<ExerciseKey, Entry[]>;
    refreshRecent: () => void;
    refreshExercise: (exercise: ExerciseKey) => void;
    addEntry: (exercise: ExerciseKey, reps: number, note?: string) => void;
    removeEntry: (id: string, exercise: ExerciseKey) => void;
};

const emptyByExercise = {
    pushups: [],
    pullups: [],
    dips: [],
    squats: [],
} as Record<ExerciseKey, Entry[]>;

export const useEntriesStore = create<State>((set, get) => ({
    recent: [],
    byExercise: emptyByExercise,

    refreshRecent: () => {
        const recent = listRecentEntries(50);
        set({ recent });
    },

    refreshExercise: (exercise) => {
        const rows = listEntriesByExercise(exercise);
        set((s) => ({ byExercise: { ...s.byExercise, [exercise]: rows } }));
    },

    addEntry: (exercise, reps, note) => {
        const e: Entry = {
            id: uid(),
            exercise,
            reps,
            date: todayISO(),
            note: note ?? null,
            createdAt: Date.now(),
        };
        insertEntry(e);
        get().refreshRecent();
        get().refreshExercise(exercise);
    },

    removeEntry: (id, exercise) => {
        deleteEntry(id);
        get().refreshRecent();
        get().refreshExercise(exercise);
    },
}));

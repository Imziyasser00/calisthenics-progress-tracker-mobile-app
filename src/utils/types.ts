export type ExerciseKey = "pushups" | "pullups" | "dips" | "squats";

export const EXERCISES: { key: ExerciseKey; label: string }[] = [
    { key: "pushups", label: "Push-ups" },
    { key: "pullups", label: "Pull-ups" },
    { key: "dips", label: "Dips" },
    { key: "squats", label: "Squats" },
];

export type Entry = {
    id: string;
    exercise: ExerciseKey;
    reps: number;
    date: string; // YYYY-MM-DD
    note?: string | null;
    createdAt: number; // unix ms
};

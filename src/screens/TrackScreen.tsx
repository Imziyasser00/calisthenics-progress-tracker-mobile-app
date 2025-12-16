import { View, Text, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { useState } from "react";
import ExercisePicker from "../features/tracking/ExercisePicker";
import RepsInput from "../features/tracking/RepsInput";
import NoteInput from "../features/tracking/NoteInput";
import Button from "../components/Button";
import Card from "../components/Card";
import { ExerciseKey } from "../utils/types";
import { useEntriesStore } from "../store/useEntriesStore";

export default function TrackScreen() {
    const [exercise, setExercise] = useState<ExerciseKey>("pushups");
    const [reps, setReps] = useState("");
    const [note, setNote] = useState("");

    const addEntry = useEntriesStore((s) => s.addEntry);

    function save() {
        const value = Number(reps);
        if (!value || value <= 0) {
            Alert.alert("Invalid reps", "Please enter a valid number.");
            return;
        }

        addEntry(exercise, value, note);
        setReps("");
        setNote("");

        Alert.alert("Saved", "Your training has been logged.");
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            className="flex-1 bg-black"
        >
            <View className="flex-1 px-4 pt-12 gap-6">
                <Text className="text-white text-2xl font-semibold">
                    Log today’s reps
                </Text>

                <Card>
                    <ExercisePicker value={exercise} onChange={setExercise} />
                </Card>

                <Card>
                    <RepsInput value={reps} onChange={setReps} />
                </Card>

                <Card>
                    <NoteInput value={note} onChange={setNote} />
                </Card>

                <Button label="Save entry" onPress={save} />
            </View>
        </KeyboardAvoidingView>
    );
}

import { View, Text, Pressable } from "react-native";
import { EXERCISES, ExerciseKey } from "../../utils/types";

type Props = {
    value: ExerciseKey;
    onChange: (v: ExerciseKey) => void;
};

export default function ExercisePicker({ value, onChange }: Props) {
    return (
        <View className="flex-row flex-wrap gap-2">
            {EXERCISES.map((e) => {
                const active = value === e.key;
                return (
                    <Pressable
                        key={e.key}
                        onPress={() => onChange(e.key)}
                        className={`px-4 py-2 rounded-full border ${
                            active
                                ? "bg-purple-500 border-purple-500"
                                : "border-white/20"
                        }`}
                    >
                        <Text
                            className={`${
                                active ? "text-black font-semibold" : "text-white"
                            }`}
                        >
                            {e.label}
                        </Text>
                    </Pressable>
                );
            })}
        </View>
    );
}

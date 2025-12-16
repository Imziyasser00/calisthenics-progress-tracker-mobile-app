import { View, TextInput, Text } from "react-native";

type Props = {
    value: string;
    onChange: (v: string) => void;
};

export default function RepsInput({ value, onChange }: Props) {
    return (
        <View className="items-center">
            <TextInput
                value={value}
                onChangeText={onChange}
                keyboardType="number-pad"
                placeholder="0"
                placeholderTextColor="rgba(255,255,255,0.3)"
                className="text-white text-6xl font-bold text-center w-full"
            />
            <Text className="text-white/60 mt-1">Max reps</Text>
        </View>
    );
}
